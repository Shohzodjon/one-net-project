<template>
  <section>
    <div class="container pb-3">
      <div class="flex justify-between gap-2 items-center">
        <h2
          data-aos="fade-top"
          class="text-darkColor text-lg sm:text-2xl md:text-[30px] lg:text-[40px] font-semibold leading-6 lg:leading-[56px]"
        >
          {{ isNewsPage ? $t("news") : $t("news_and_alerts") }}
        </h2>

        <router-link v-if="!isNewsPage" to="/news" class="w-max">
          <button
            class="flex items-center justify-end gap-0 sm:gap-[10px] lg:w-auto group"
          >
            <span
              class="text-darkColor text-sm sm:text-lg md:text-xl md:leading-7 font-semibold transition-all duration-300 group-hover:text-mainColor"
            >
              {{ $t("all_news") }}
            </span>
            <span
              :class="[newsBtn ? 'block' : 'hidden']"
              class="transition-all duration-300 group-hover:translate-x-2"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#FF3E2D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 6L15 12L9 18"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </router-link>
      </div>
      <div
        v-if="newsList?.length"
        class="grid grid-cols-12 gap-6 mt-8 md:mt-[25px]"
      >
        <SMain
          data-aos="fade"
          class="col-span-12 lg:col-span-6 xl:col-span-7"
          v-bind="{
            mainImg: newsList[0].img.id,
            mainText: getTranslation(newsList[0], $i18n.locale.value, 'title'),
            mainSlug: newsList[0].slug,
            mainDesc: getTranslation(
              newsList[0],
              $i18n.locale.value,
              'sub_title'
            ),
          }"
        />
        <div
          class="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col flex-1"
          v-if="newsList.length > 1"
          :class="isHome ? 'gap-4' : ''"
        >
          <SCard
            data-aos="fade-up"
            class="last:mb-0 flex-1"
            v-for="index in 3"
            :key="index"
            :card="newsList[index]"
            card-row
            :is-news-page="isNewsPage"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import SCard from "@/stories/card/SCard.vue";
import SMain from "@/stories/news/SMain.vue";
import { getTranslation } from "@/mixins/mixins";

export interface Props {
  newsList: any[];
  isHome: string;
  isNewsPage?: boolean;
  newsBtn: string;
}
withDefaults(defineProps<Props>(), {
  isNewsPage: false,
});
</script>
