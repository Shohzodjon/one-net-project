<template>
  <section class="overflow-x-hidden">
    <div class="h-[370px] md:h-[408px] flex relative">
      <div class="absolute top-0 left-0 w-full h-full z-20">
        <div class="container pt-20 lg:pt-[116px]">
          <h2
            data-aos="fade-left"
            class="text-darkColor leading-5.5 md:leading-[31px] md:text-xl lg:text-2xl font-bold mb-9 w-full sm:!w-[80%] md:w-[80%] lg:!w-[58%] xl:!w-[45%]"
          >
            {{ $t("main-section_text") }}
          </h2>
          <router-link to="/">
            <SButton
              context="read_more"
              class="py-[10px] px-8 md:px-[50px]"
              data-aos="fade-left"
            />
          </router-link>
        </div>
      </div>

      <div class="h-full w-full bg-pattern relative" data-aos="fade"></div>
    </div>
    <div class="container py-12">


      <div
        data-aos="fade-left"
        class="bg-[#00121C] py-3 px-3 sm:py-5 sm:px-5 md:py-6 gap-3 sm:gap-5 md:px-6 flex-col flex items-start rounded-2xl relative overflow-hidden"
      >
        <h4 class="text-base sm:text-lg md:text-xl font-bold text-white">
          {{ $t("telegram_desc") }}
        </h4>
        <a
          href="https://telegram.me/one_net_support"
          target="_blank"
          class="telegram-link bg-white py-[6px] pl-[6px] pr-4 rounded-[10px] flex !items-center justify-between gap-3 cursor-pointer group transition-all duration-300 hover:bg-[#E9E9E9]"
        >
          <div
            data-aos="fade-left"
            class="w-6 h-6 telegram-wrapp rounded-full flex items-center justify-center"
          >
            <img
              data-aos="fade-left"
              src="/src/assets/icons/telegram-icon.svg"
              alt="telegram"
              class="w-[14px] h-[14px]"
            />
          </div>
          <span
            data-aos="fade-left"
            class="text-darkColor text-base leading-[34px] font-semibold transition-all duration-300 group-hover:text-[#2B9FDA]"
            >{{ $t("one_net_support") }}</span
          >
        </a>
        <span
          class="absolute top-0 right-0 h-full w-[50%] bg-[#00121C] hidden sm:block z-10 opacity-80 sm:w-[35%]"
        >
        </span>
        <img
          src="@/assets/img/path13.svg"
          alt="logo"
          class="absolute -right-1 top-0 h-full hidden sm:block sm:w-[200px]"
        />
      </div>
      <!--  -->
    </div>
  </section>
</template>
<script lang="ts" setup>
import SButton from "@/stories/main-button/SButton.vue";
</script>

<style scoped>
.bg-pattern {
  background: linear-gradient(
        90deg,
        #ffffff 26.03%,
        rgba(255, 255, 255, 0.96),
        rgba(240, 242, 242, 0) 85.75%
      )
      top left,
    url("/src/assets/img/section-div-img.png") no-repeat top right;
  background-size: 100% 100%, 90% 99%;
  overflow: hidden;
}
.bg-pattern::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #ff3e2d;
  mix-blend-mode: color;
}
.telegram-wrapp {
  background: linear-gradient(211.74deg, #34b0df -4.14%, #1e88d3 90.25%);
}
.telegram-link {
  transition: all linear 0.3s;
}
.telegram-link:hover {
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}

@media screen and (min-width: 370px) and (max-width: 576px) {
  .bg-pattern {
    background: linear-gradient(
          90deg,
          #ffffff 26.03%,
          rgba(255, 255, 255, 0.9),
          rgba(240, 242, 242, 0) 85.75%
        )
        top left,
      url("/src/assets/img/section-div-img.png") no-repeat top right;
    background-size: 110%, 125% 99%;
  }
}

@media screen and (min-width: 577px) and (max-width: 1300px) {
  .bg-pattern {
    background-size: 100%, 105% 99%;
  }
}
</style>
