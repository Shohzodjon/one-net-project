<template>
  <section class="bg-[#FCFCFC]">
    <SBread v-if="isFetched" :pages="[{ title: getTranslation(p, $i18n.locale.value, 'title')} ]" />
    <div class="container pt-8 pb-8 sm:pb-12 md:pb-16" v-if="isFetched">
      <h2
        class="text-darkColor text-2xl sm:text-3xl md:text-4xl md:leading-[47px] font-bold mb-4 sm:mb-6 md:mb-8"
      >
        {{ getTranslation(p, $i18n.locale.value, "title") }}
      </h2>
      <h3
        class="text-darkColor text-xl sm:text-2xl md:text-[32px] md:leading-[42px] mb-4 sm:mb-6 md:mb-8 font-extrabold"
      >
        {{ getTranslation(p, $i18n.locale.value, "sub_title") }}
      </h3>

      <div
        class="static-text"
        v-html="getTranslation(p, $i18n.locale.value, 'context')"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getTranslation, setTranslations } from "@/mixins/mixins";
import { $axios } from "@/utils/axios";
import SBread from "@/stories/bread-crumb/SBread.vue";

const route = useRoute();
const router = useRouter();

const p = ref({});
const isFetched = ref(false);

onMounted(async () => {
  try {
    const { data } = await $axios.get(
      `/partner?filter[slug][_eq]=${route.params.slug}&limit=1&fields=*.*`
    );
    if (data.data.length === 0) {
      return router.push("/404");
    }
    p.value = setTranslations(data.data)[0];
    isFetched.value = true;
  } catch (error) {
    router.push("/404");
  }
});
</script>
<style>
.static-text h1 {
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  color: #363130;
  margin: 32px 0 12px;
}

.static-text h3 {
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: #363130;
}

.static-text p {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #363130;
}
.static-text ul {
  list-style: disc;
  margin-left: 18px;
}
.static-text ul > li {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #363130;
}
.static-text img {
  width: 100%;
  max-height: 449px;
  border-radius: 12px;
  margin: 32px 0;
}

.static-text a {
  color: #ff3e2d;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  text-decoration: underline;
}
@media screen and (min-width: 370px) and (max-width: 575px) {
  .static-text p {
    font-size: 14px;
  }
  .static-text ul > li {
    font-size: 14px;
  }
  .static-text h1 {
    font-size: 24px;
    margin-top: 25px;
  }
  .static-text a {
    font-size: 14px;
  }
}
@media screen and (min-width: 576px) and (max-width: 767px) {
  .static-text p {
    font-size: 16px;
  }
  .static-text ul > li {
    font-size: 16px;
  }
  .static-text h1 {
    font-size: 28px;
    margin-top: 25px;
  }
}
</style>
