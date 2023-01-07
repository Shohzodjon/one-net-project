<template>
  <div id="partners" class="bg-[#F4F4F4] md:py-12 py-4 overflow-hidden">
    <div class="container">
      <!-- Slider start -->
      <div class="relative flex items-center justify-between">
        <div class="mb-6">
          <h3
            class="font-bold text-2xl md:text-[40px] leading-140"
            data-aos="fade-top"
          >
            {{ $t("partners") }}
          </h3>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="prev-btn transition duration-300 w-8 h-8 border border-[#333938] bg-white border-opacity-8 rounded-lg flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7L10 12L14 17"
                stroke="#363130"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="next-btn transition duration-300 w-8 h-8 border border-[#333938] bg-white border-opacity-8 rounded-lg flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7L14 12L10 17"
                stroke="#363130"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <swiper class="partnerSwiper" v-bind="settings" data-aos="fade-top">
        <swiper-slide v-for="(partner, index) in partnersList" :key="index">
          <a
            :href="partner.url"
            target="_blank"
            class="h-[124px] partner bg-white flex justify-center items-center w-full !rounded-2xl overflow-hidden py-5 sm:py-10 px-4 sm:px-[30px] transition duration-300 border border-transparent border-[#D6D8DB] hover:-translate-y-1.5"
          >
            <img
              class="h-full w-full object-contain overflow-hidden"
              v-lazy="$static + partner.img"
              alt="partner.title"
            />
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Slider end -->
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Navigation];
defineProps<{ partnersList: [] }>();
const settings = {
  slidesPerView: 1,
  spaceBetween: 24,
  "grab-cursor": true,
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.7,
    },
    680: {
      slidesPerView: 2.7,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  modules: modules,
};
</script>

<style>
.partnerSwiper.swiper {
  overflow: visible;
}
.prev-btn.swiper-button-disabled,
.next-btn.swiper-button-disabled {
  opacity: 0.75;
  cursor: not-allowed;
}
.partner:hover {
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.04);
}
</style>
