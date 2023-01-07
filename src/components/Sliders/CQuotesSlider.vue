<template>
  <div class="container">
    <div class="my-4 mx-auto p-4 text-center">
      <Swiper
        class="quote-swiper w-full !pb-[48px]"
        data-aos="fade-up"
        @swiper="onInit"
        :allow-touch-move="true"
        slideToClickedSlide
        centered-slides
        :space-between="10"
        :slides-per-view="3"
        :module="EffectFade"
        :loop="true"
      >
        <SwiperSlide v-for="(item, i) in slides" :key="i">
          <div class="">
            <p class="text-[#111827] lg:text-lg text-base leading-7 mb-6">
              {{ item.text }}
            </p>
            <div class="text-center">
              <p class="text-[#111827] font-medium leading-5">
                {{ item.full_name }}
              </p>
              <p class="mt-1 text-[#6B7280] text-sm leading-5s">
                {{ item.position }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        data-aos="fade-up"
        class="thumbs-swiper max-w-[208px] mx-auto"
        :allow-touch-move="true"
        slideToClickedSlide
        centered-slides
        :space-between="10"
        :slides-per-view="3"
        :loop="true"
        @active-index-change="setThumbsSwiper"
      >
        <SwiperSlide
          class="slide cursor-pointer"
          v-for="(item, index) in slides"
          :key="index"
        >
          <div class="relative w-16 h-16 rounded-full overflow-hidden">
            <img
              v-lazy="$static + item.image"
              alt=""
              class="object-cover select-none pointer-events-none w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";

import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

defineProps<{ slides: [] }>();

const quote = ref(null);
const onInit = (swiper: any) => {
  quote.value = swiper;
};
const setThumbsSwiper = (swiper: any) => {
  quote.value?.slideTo(swiper.activeIndex);
};
const settings = {
  modules: [EffectFade],
  effect: "fade",
  loop: true,
  allowTouchMove: true,
};
</script>

<style>
.thumbs-swiper .swiper-slide {
  transform: scale(0.7) translateY(12px);
  opacity: 0.75;
  transition: all 300ms;
}
.thumbs-swiper .swiper-slide-active {
  transform: scale(1);
  opacity: 1;
  cursor: auto;
}

.quote-swiper .swiper-slide {
  opacity: 0 !important;
  transition: all 300ms;
}
.quote-swiper .swiper-slide-active {
  opacity: 1 !important;
}
</style>
