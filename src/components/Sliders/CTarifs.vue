<template>
  <div class="container pt-8 !px-0">
    <div class="text-center">
      <h4
        class="font-semibold leading-5 text-base text-[#cc3224]"
        data-aos="fade-up"
      >
        {{ $t("tariffs") }}
      </h4>
      <h2
        data-aos="fade-up"
        class="text-darkColor text-2xl md:text-4xl font-bold leading-120 md:leading-140"
      >
        {{ $t("popular_tariffs") }}
      </h2>
    </div>
    <swiper
      v-bind="settings"
      data-aos="fade-up"
      class="serverSwiper !md:pt-[60px] !pt-5 !pb-[68px] !pl-20 !-ml-20 md:!pt-20 md:!-mt-10 lg:!pl-1 lg:!-ml-1"
    >
      <swiper-slide
        v-for="(tarif, index) in tarifs"
        :key="index"
        class="select-none"
      >
        <STarifCard
          :card="{
            type: getTranslation(tarif, $i18n.locale.value, 'sub_title'),
            status: tarif.status,
            price: tarif.price,
            tariff_name: getTranslation(tarif, $i18n.locale.value, 'title'),
            tariff_items: getItems(tarif),
          }"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import STarifCard from "@/components/Sliders/STarifCard.vue";
import { getTranslation, getItems } from "@/mixins/mixins";

defineProps<{ tarifs: [] }>();

const settings = {
  centerInsufficientSlides: true,
  "grab-cursor": true,
  modules: [Navigation],
  pagination: { clickable: true },
  loop: false,
  spaceBetween: 30,
  navigation: {
    prevEl: ".server-prev-btn",
    nextEl: ".server-next-btn",
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
};
</script>

<style>
.serverSwiper .swiper-button-disabled {
  display: none;
}

.swiper-slide {
  height: auto !important;
}
.swiper-card {
  height: 100% !important;
}
html {
  scroll-behavior: smooth;
}

.serverSwiper .swiper-slide {
  transition: transform 0.3s;
}

@media screen and (min-width: 1024px) {
  .serverSwiper .swiper-slide-next {
    transform: scale(1.09) !important;
  }
  .serverSwiper .swiper-slide-next .swiper-card {
    box-shadow: 0 4px 64px rgba(51, 57, 56, 0.2) !important;
  }
}

@media (min-width: 720px) and (max-width: 1024px) {
  .serverSwiper .swiper-slide-active {
    transform: scale(1.05) !important;
  }
  .serverSwiper .swiper-slide-active .swiper-card {
    box-shadow: 0 4px 64px rgba(51, 57, 56, 0.2) !important;
  }
}
</style>
