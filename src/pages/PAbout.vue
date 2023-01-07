<template>
  <section class="w-full bg-[#FCFCFC]">
    <div class="about--header mb-4"></div>
    <div class="container">
      <h2
        class="text-2xl sm:text-3xl lg:text-[32px] md:leading-[42px] font-extrabold -mt-4 mb-8 text-darkColor"
      >
        {{ $t("about_header") }} <br />{{ $t("about_text") }}
      </h2>
      <div
        class="about-text"
        v-html="getTranslation(api, $i18n.locale.value, 'title')"
      ></div>
      <div class="w-full flex items-center justify-center my-8">
        <div
          class="w-[160px] h-1 sm:w-[194px] sm:h-[6px] bg-[#CC3224] rounded-lg"
        ></div>
      </div>
      <div class="gap-6 about-card">
        <BCard
          v-for="item in cardData"
          class="border border-transparent transition-all duration-300 hover:border-mainColor"
          :key="item"
          v-bind="{
            text: `${item.text}`,
            imgUrl: `${item.img}`,
            patternClass: `${'hidden'}`,
          }"
        />
      </div>
      <!-- text-lg text-darkColor opacity-80 -->
      <div
        class="mt-16 about-text2"
        v-html="getTranslation(api, $i18n.locale.value, 'context')"
      ></div>

      <div
        class="about-blog my-9 pl-5 sm:my-14 md:my-16 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between sm:items-center overflow-hidden rounded-2xl py-5 sm:py-7 sm:pl-4 md:py-8 md:pl-10 sm:pr-5 md:pr-10 relative"
      >
        <img
          src="/src/assets/img/about-pattern.png"
          alt="img"
          class="absolute hidden md:block top-0 left-0 w-auto h-full z-10"
        />
        <i18n-t
          keypath="about_content"
          tag="h4"
          class="relative z-20 text-darkColor leading-5 text-left md:text-xl lg:text-2xl font-bold md:leading-[34px]"
        >
          <template #social>
            <span class="text-mainColor">{{ $t("about_content2") }}</span>
          </template>
        </i18n-t>

        <ul class="flex relative z-20">
          <li
            class="pr-5 sm:pr-10 !h-max flex group"
            v-for="sm in socialMedia"
            :key="sm"
          >
            <a
              :href="sm.url"
              class="pl-3 transition-all duration-300 grayscale group-hover:grayscale-0"
            >
              <img
                v-lazy="$static + sm.icon_file_svg"
                class="!w-8 !h-8 object-contain"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <CApplicationForm />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import CApplicationForm from "@/components/sections/CApplicationForm.vue";
import { getTranslation, setTranslations } from "@/mixins/mixins";
import BCard from "@/stories/service-card/BCard.vue";
import { $axios } from "@/utils/axios";
import { useMainStore } from "@/store";

const api = ref({});

const store = useMainStore();

const socialMedia = computed(() => {
  return store.getSocialMedia.value.filter((sm: any) => {
    return sm.icon_for === "about";
  });
});

onMounted(async () => {
  const { data } = await $axios.get("/about_us?fields=*.*&limit=1");
  api.value = setTranslations(data.data)[0];
});

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
</script>
<style scoped>
.about--header {
  height: 500px;
  width: 100%;
  background: url("/src/assets/img/about-img.png") no-repeat;
  background-size: cover !important;
  background-position: bottom;
}
.about-card {
  display: flex;
}

.about-card > div {
  width: 25%;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.04) !important;
}
.about-blog {
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.04);
  background: #fff;
}

.icon-size {
  color: rgba(40, 40, 60, 0.4);
  font-size: 30px;
  transition: all linear 0.3s;
}
a:hover .icon-size {
  color: #cc3224;
}

@media screen and (min-width: 370px) and (max-width: 499.9px) {
  .about--header {
    background-size: 140% 100%;
    height: 300px;
  }
  .about-card {
    flex-direction: column;
  }
  .about--header {
    background-size: cover;
  }
  .about-card > div {
    width: 96%;
    margin: 0 auto;
  }
  .icon-size {
    font-size: 25px;
  }
}
@media screen and (min-width: 500px) and (max-width: 749.9px) {
  .about--header {
    height: 380px;
    background-size: 130% 100%;
  }
  .about-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .about-card > div {
    width: 96%;
    margin: 0 auto;
  }
  .icon-size {
    font-size: 25px;
  }
}
</style>

<style>
.about-text > p {
  font-size: 18px;
  color: #363130;
  opacity: 0.8;
  line-height: 130%;
}
.about-text2 ul {
  list-style-type: disc;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.about-text2 ul > li {
  font-size: 18px;
  color: #363130;
  opacity: 0.8;
  line-height: 130%;
}
</style>
