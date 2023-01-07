<template>
  <div class="bg-[#090D14] lg:min-h-[92vh] min-h-[80vh] mainSwiper">
    <KinesisContainer>
      <div class="container lg:grid lg:grid-cols-12 flex flex-col-reverse">
        <div
          class="lg:col-span-5 col-span-4 flex flex-col justify-between pb-[130px]"
        >
          <!-- dont delete this -->
          <div></div>
          <!-- dont delete this -->

          <Swiper
            :modules="modules"
            :navigation="{
              nextEl: '.next-slide',
              prevEl: '.prev-slide',
            }"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :space-between="20"
            :pagination="{ clickable: true }"
            loop="true"
          >
            <swiper-slide v-for="slide in slides" :key="slide.description">
              <div class="flex flex-col justify-center">
                <h1
                class="text-[#CA3124] font-bold lg:text-[44px] md:text-[35px] text-[30px] xl:leading-[45px] leading-[40px]"
                >
                 {{ getTranslation(slide, $i18n.locale.value, "title").trim()}}
                </h1>
                <h2
                class="text-[#FFF] font-bold lg:text-[40px] md:text-[30px] text-[20px] lg:leading-[56px] leading-[25px]"
                >
                {{ getTranslation(slide, $i18n.locale.value, "sub_title").trim() }}
                </h2>
                <p
                  class="text-white font-medium md:text-[16px] text-[12px] md:leading-[19px] leading-[14px] mt-3 line-clamp-3"
                >
                {{ getTranslation(slide, $i18n.locale.value, "description") }}
                </p>
                <a :href="slide.url || ''">
                  <s-basic-button
                    :label="$t('read_more')"
                    :background-color="'#CC3224'"
                    class="md:w-[280px] w-full h-12 mt-6 lg:mb:0 mb-4"
                  ></s-basic-button>
                </a>
              </div>
            </swiper-slide>
          </Swiper>
          <div class="gap-2 z-20 flex">
            <button
              class="prev-slide rounded-[10px] bg-[#21252B] duration-200 hover:bg-[#3A3D43] w-[52px] h-[52px] flex items-center justify-center"
            >
              <img
                class="h-[24px] object-cover w-[24px]"
                src="../../assets/icons/chevron-left.svg"
                alt=""
              />
            </button>
            <button
              class="next-slide rounded-[10px] bg-[#21252B] duration-200 hover:bg-[#3A3D43] w-[52px] h-[52px] flex items-center justify-center"
            >
              <img
                class="h-[24px] object-cover w-[24px]"
                src="../../assets/icons/chevron-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div class="lg:col-span-7 col-span-4">
          <img
            src="../../assets/img/uzbekistan-map-mobile.png"
            class="md:hidden w-auto"
          />
          <kinesis-element :strength="20" :transformOrigin="earthmoonOrigin">
            <img
              src="../../assets/img/uzbekistan-map.png"
              class="hidden md:block w-auto"
            />
          </kinesis-element>
        </div>
      </div>
    </KinesisContainer>
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/pagination";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

import SBasicButton from "@/components/BasicButton/SBasicButton.vue";
import { getTranslation } from "@/mixins/mixins";

defineProps<{ slides: [] }>();

useSwiper();
const modules = [Pagination, Navigation, Autoplay];
</script>

<style>
.mainSwiper .swiper {
  width: 100%;
  margin-bottom: -395px;
  padding-bottom: 225px;
}

@media screen and (max-width: 1536px) {
  .mainSwiper .swiper {
    margin-bottom: -313px;
    padding-bottom: 168px;
  }
}

@media screen and (max-width: 1350px) {
  .mainSwiper .swiper {
    margin-bottom: -250px;
    padding-bottom: 168px;
  }
}

@media screen and (max-width: 768px) {
  .mainSwiper .swiper {
    margin-bottom: -83px;
    padding-bottom: 100px;
  }
}

.mainSwiper .swiper .swiper-pagination-bullet {
  background-color: #3a3d43 !important;
  width: 40px;
  position: relative;
  height: 6px;
  border-radius: 12px;
  transition-property: background-color;
  opacity: 1;
  transition-duration: 0.2s;
}

.mainSwiper .swiper .swiper-pagination-bullet:hover {
  background-color: #252525 !important;
}

.mainSwiper .swiper .swiper-pagination-bullet-active {
  position: relative;
}

.mainSwiper .swiper .swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  top: 0;
  background-color: #cc3224 !important;
  height: 6px;
  border-radius: 12px;
  animation: fillWidth 5s linear forwards;
}

@keyframes fillWidth {
  0% {
    width: 6px;
    left: 0;
  }
  100% {
    left: 0;
    width: 100%;
  }
}

.mainSwiper .swiper-pagination {
  text-align: left;
  bottom: -5px !important;
  left: 0 !important;
  /*opacity: 0 !important;*/
}

@media screen and (max-width: 1537px) {
  .mainSwiper .swiper-pagination {
    bottom: 5px !important;
  }
}

@media screen and (max-width: 1279px) {
  .mainSwiper .swiper-pagination {
    bottom: 650px !important;
  }
}

@media screen and (max-width: 767px) {
  .mainSwiper .swiper-pagination {
    bottom: -5px !important;
  }
}

/*@media screen and (max-width: 1413px) {*/
/*  .swiper-pagination {*/
/*    width: 150px !important;*/
/*    bottom: 11% !important;*/
/*    left: 70px !important;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 1024px) {*/
/*  .swiper-pagination {*/
/*    width: 150px !important;*/
/*    bottom: 100px !important;*/
/*    left: 10px !important;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 768px) {*/
/*  .swiper-pagination {*/
/*    width: 150px !important;*/
/*    bottom: 8% !important;*/
/*  }*/
/*}*/
</style>
