<template>
  <section class="bg-[#FCFCFC] pb-4 sm:pb-6 md:pb-8">
    <div class="">
      <SBread :pages="[{ title: $t('news'), link: '/news' }]" />
      <div v-if="dataFetched" class="">
        <CNews
          class="mt-3 sm:mt-6 md:mt-8 news-home"
          :news-list="posts.slice(0, 4)"
          is-news-page=""
          newsTitle="news"
        />

        <div
          v-if="posts.length > 4"
          class="container mt-8 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          <SCard
            data-aos="fade-right"
            :data-aos-delay="ind * 50"
            v-for="(index, ind) in Math.max(0, posts.length - 1)"
            :key="index"
            :card="posts[index + 3]"
            class="-ml-3"
          />
        </div>

        <div
          v-if="total !== posts.length"
          @click="fetchRows"
          class="flex items-center justify-center"
        >
          <button
            class="bg-[#ebebeb] transition duration-300 border hover:border-mainColor hover:bg-white hover:text-mainColor rounded-[10px] text-darkColor mt-8 mb-16 py-3 px-9 !leading-[22px] text-lg font-medium"
          >
            {{ $t("watch_more") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import CNews from "@/components/sections/CNews.vue";
import SBread from "@/stories/bread-crumb/SBread.vue";
import SCard from "@/stories/card/SCard.vue";
import { $axios } from "@/utils/axios";
import { setTranslations } from "@/mixins/mixins";

const posts = ref([] as any[]);
const page = ref(0);
const size = ref(12);
const total = ref(0);
const dataFetched = ref(false);

const fetchRows = async () => {
  try {
    page.value++;
    const { data } = await $axios.get(
      `/news?meta=total_count&limit=${size.value}&offset=${
        (page.value - 1) * size.value
      }&fields=title,sub_title,date_created,slug,img.id,view_count,id,translations.title,translations.sub_title,translations.languages_code`
    );
    setTranslations(data.data).forEach((post: any) => {
      posts.value.push(post);
    });
    size.value = 8;
    total.value = data.meta.total_count;
    dataFetched.value = true;
  } catch (error) {
    console.log(error);
  }
};

fetchRows();
</script>
<style></style>
