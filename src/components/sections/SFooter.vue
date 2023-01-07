<template>
  <div v-if="this?.$route?.name !== 'error'">
    <div class="w-full h-[3px] bg-[#FF3E2D]"></div>
    <footer>
      <div class="container pt-7 lg:pt-9">
        <div class="flex flex-col items-center w-full">
          <router-link to="/">
            <img
              src="/src/assets/img/logo-svg.svg"
              alt="logo"
              class="w-[120px] lg:w-[179px] lg:h-12"
            />
          </router-link>

          <p
            v-if="text"
            class="text-center footer--context mt-4 sm:mt-5 md:mt-6 max-w-[787px] mx-auto text-sm lg:text-base font-normal"
          >
            {{ getTranslation(text, $i18n.locale.value, "text") }}
          </p>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <div class="hidden sm:block sm:w-[13%] 2xl:w-[8%]"></div>
          <ul v-if="socialMedia.length > 0" class="flex gap-2.5 md:gap-4">
            <li v-for="sm in socialMedia" :key="sm" class="social-media group">
              <a
                :href="sm.url"
                target="_blank"
                class="flex items-center justify-center w-full h-full p-2"
              >
                <img
                  v-lazy="$static + sm.icon_file_svg"
                  alt=""
                  class="transition-all duration-300 grayscale group-hover:grayscale-0 w-full h-full img-footer"
                />
              </a>
            </li>
          </ul>

          <div>
            <img
              src="/src/assets/img/footer-inside.png"
              alt="footer_img"
              class="w-20 md:w-[88px] md:h-[31px]"
            />
          </div>
        </div>
      </div>

      <div class="footer-bottom mt-9">
        <div class="flex justify-between sm:block pr-2 sm:pr-0">
          <div
            class="container flex flex-col justify-between sm:flex-row items-start sm:items-center sm:justify-between py-4"
          >
            <h5
              class="text-xs sm:text-sm md:text-base leading-[19px] text-white font-medium"
            >
              {{ $t("reserved") }}
            </h5>
            <a href="https://uicgroup.us/" class="hidden sm:mt-2 sm:block">
              <UICLogo />
            </a>
            <router-link
              to="/pages/privacy-policy"
              class="text-xs mt-2 sm:mt-0 sm:text-sm md:text-base leading-[19px] text-white font-medium cursor-pointer transition-all duration-300 hover:text-mainColor"
            >
              {{ $t("used_role") }}
            </router-link>
          </div>
          <a href="https://uicgroup.us/" class="mt-4 sm:mt-2 sm:hidden">
            <UICLogo />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useMainStore } from "@/store";
import UICLogo from "@/components/UICLogo.vue";
import { getTranslation, setTranslations } from "@/mixins/mixins";
import { $axios } from "@/utils/axios";

const store = useMainStore();

const text = ref("");

const socialMedia = computed(() => {
  return store.getSocialMedia.value.filter((sm: any) => {
    return sm.icon_for === "footer";
  });
});

onMounted(async () => {
  const [_text, _socialMedia] = await Promise.all([
    $axios.get(
      "/footer?fields=text,translations.text,translations.languages_code&limit=1"
    ),
    $axios.get("/social_media?fields=url,icon_for,icon_file_svg"),
  ]);
  text.value = setTranslations(_text.data.data)[0];
  store.setSocialMedias(_socialMedia.data.data);
});
</script>
<style scoped>
footer {
  background: url("@/assets/img/footer-bg1.png") left no-repeat,
    #0a0e15 url("@/assets/img/footer-bg2.png") right no-repeat;
  background-size: 25% 100%, 25% 100%;
}
.footer--context {
  color: rgba(255, 255, 255, 0.8);
}
.social-media {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s linear all;
}
.icon-size {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.649);
  transition: 0.3s linear all;
}

.social-media:hover {
  background: #ffff;
}
.social-media:hover .icon-size {
  color: #ff3e2d;
}
.footer-bottom {
  background: rgba(54, 49, 48, 0.54);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
}

@media screen and (min-width: 370px) and (max-width: 677.9px) {
  .social-media {
    width: 34px;
    height: 34px;
  }
  .icon-size {
    font-size: 24px;
  }

  footer {
    background: url("/src/assets/img/footer-bg1.png") left no-repeat,
      #0a0e15 url("/src/assets/img/footer-bg2.png") right no-repeat;
    background-size: 35% 100%, 35% 100%;
  }
}
@media screen and (min-width: 640px) and (max-width: 767.9px) {
  .social-media {
    width: 40px;
    height: 40px;
  }
}
</style>
