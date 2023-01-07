<template>
  <MainSlider :slides="slides" />
  <div class="container">
    <div
      data-aos="fade-up"
      class="flex-col lg:flex xl:flex-row -mt-[74px] justify-center items-stretch gap-6 bg-[#eef0f0] p-4 border-[1.6px] rounded-2xl border-[#333938] border-opacity-20 lg:mx-[100px] b-shadow"
    >
      <router-link
        :to="`/tariffs?tab=${tc?.id}`"
        v-for="(tc, index) in tarifCategories"
        :key="index"
        class="py-5 mb-3 last:mb-0 lg:my-0 px-[50px] rounded-[10px] bg-white w-full text-center flex flex-col items-center cursor-pointer border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-mainColor"
      >
        <img
          v-lazy="$static + tc.icon_file_svg"
          class="!w-12 !h-12 object-contain"
          alt=""
        />
        <p class="font-bold leading-[140%] text-[24px] text-[#363130]">
          {{ getTranslation(tc, $i18n.locale.value, "title") }}
        </p>
      </router-link>
    </div>
    <CTarifs data-aos="fade-up" :tarifs="tarifs" />
  </div>

  <div class="bg-[#F4F4F4]">
    <div
      class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:py-12 py-6"
    >
      <BCard
        v-for="(i, index) in cardData"
        :key="i"
        :text="i.text"
        :img-url="i.img"
        data-aos="fade-right"
        :data-aos-delay="index * 50"
      />
    </div>
  </div>

  <CQuotesSlider :slides="comments" />

  <CApplicationForm />

  <HSection />
  <CNewSocSet />
  <div v-if="news && news.length" class="bg-[#F4F4F4]" data-aos="fade-up">
    <div class="py-4 md:py-12">
      <CNews
        news-title="news_and_alerts"
        news-btn="all_news"
        :news-list="news"
        :isHome="'gap-4'"
      />
    </div>
  </div>
  <SFaq data-aos="fade-up" />
  <CPartners
    v-if="residents.length > 0"
    :partnersList="residents"
    data-aos="fade-up"
  />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import CApplicationForm from "@/components/sections/CApplicationForm.vue";
import CNews from "@/components/sections/CNews.vue";
import HSection from "@/components/sections/HSection.vue";
import MainSlider from "@/components/sections/MainSlider.vue";
import SFaq from "@/components/sections/SFaq.vue";
import CNewSocSet from "@/components/sections/CNewSocSet.vue";
import CPartners from "@/components/Sliders/CPartners.vue";
import CQuotesSlider from "@/components/Sliders/CQuotesSlider.vue";
import CTarifs from "@/components/Sliders/CTarifs.vue";
import { getTranslation, setTranslations } from "@/mixins/mixins";
import { useMainStore } from "@/store";
import BCard from "@/stories/service-card/BCard.vue";
import { $axios } from "@/utils/axios";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const store = useMainStore();

const slides = store.getSlides;
const tarifs = store.getTarifs;
const news = store.getNews;
const residents = store.getResidents;
const tarifCategories = store.getTarifCategories;
const comments = store.getComments;

const cardData = [
  {
    img: "icon-charge",
    text: "service_charge",
  },
  {
    img: "icon-deal",
    text: "service_agreement",
  },
  {
    img: "icon-security",
    text: "service_security",
  },
  {
    img: "icon-setting",
    text: "service_settings",
  },
];
const route = useRoute();
onMounted(async () => {
  if (!store.getHomeFetched.value) {
    const [
      _slides,
      _tarifs,
      _news,
      _residents,
      _tarifCategories,
      _faq,
      _comments,
      _socialMedia
    ] = await Promise.all([
      $axios.get("/slider?fields=*.*"),
      $axios.get("/offer?fields=*.*"),
      $axios.get(
        "/news?sort=sort,-date_created&limit=4&fields=title,sub_title,date_created,slug,img.id,view_cound,id,translations.title,translations.sub_title,translations.languages_code"
      ),
      $axios.get("/resident?fields=img,url"),
      $axios.get(
        "/offer_category?fields=*,translations.*&sort=sort,-sort&limit=3"
      ),
      $axios.get("/often_asked_questions?fields=*.*&sort=sort,ordering"),
      $axios.get("/comment"),
      $axios.get("/social_media?fields=url,icon_for,icon_file_svg"),
    ]);
    store.setSlides(setTranslations(_slides.data.data));
    store.setTarifs(setTranslations(_tarifs.data.data));
    store.setNews(setTranslations(_news.data.data));
    store.setResidents(_residents.data.data);
    store.setHomeFetched(true);
    store.setTarifCategories(setTranslations(_tarifCategories.data.data));
    store.setFaq(setTranslations(_faq.data.data));
    // console.log(store.getFaq.value);
    store.setComments(_comments.data.data);
    store.setSocialMedias(_socialMedia.data.data);
  }
  setTimeout(() => {
    if (route.query.partner) {
      var ele = document.getElementById("partners");
      if (ele) {
        window.scrollTo(ele.offsetLeft, ele?.offsetTop);
      }
    }
  }, 300);
});
onBeforeRouteUpdate(() => {
  setTimeout(() => {
    if (route.query.partner) {
      var ele = document.getElementById("partners");
      if (ele) {
        window.scrollTo(ele.offsetLeft, ele?.offsetTop);
      }
    }
  }, 100);
});
</script>

<style>
.b-shadow {
  box-shadow: 0px 4px 64px rgba(51, 57, 56, 0.2);
}
</style>
