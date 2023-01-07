<template>
  <header
    class="bg-[#090D14]"
    :class="{ 'bg-white border-b-[#D7D6D6] border-b': isDark }"
  >
    <div class="container pb-[16px] md:pb-0">
      <transition name="slide-fade">
        <div
          v-if="openedBurger"
          class="w-full h-[100%] bg-[#090D14] absolute top-[72px] left-0 z-[999] flex flex-col justify-between"
        >
          <div class="flex flex-col px-4">
            <div>
              <router-link
                class="font-semibold text-white leading-[24px] text-xl border-b border-[#21252B] last:border-none py-4 !flex items-center"
                :to="correctUrl(nav.url)"
                v-for="(nav, index) in navs"
                :key="index"
                @click="closeBurger()"
              >
                <span
                  class="block bg-[#CC3224] w-[8px] h-[8px] rounded-full"
                ></span>
                <p class="ml-2">
                  {{ nav.title }}
                </p>
              </router-link>
            </div>
          </div>
          <div
            class="bg-[#1B1A1C] mb-[70px] w-full p-4 flex items-center justify-between"
          >
            <div class="">
              <h4 class="text-white text-base leading-[19px] font-semibold">
                © One Net LLC. {{ $t("all_rights_reserved") }}
              </h4>
              <p class="text-white text-base leading-[19px] font-medium">
                {{ $t("terms_of_use") }}
              </p>
            </div>
            <img
              class="max-w-[100px] h-auto object-contain"
              src="/src/assets/img/logo-svg.svg"
              alt=""
            />
          </div>
        </div>
      </transition>

      <div class="py-[24px] flex justify-between text-white items-center">
        <div
          v-if="!openedBurger"
          @click="openBurger()"
          class="md:hidden block cursor-pointer"
        >
          <img v-if="isDark" src="/src/assets/icons/burger-white.svg" alt="" />

          <img v-else src="/src/assets/icons/burger.svg" alt="" />
        </div>
        <div
          v-if="openedBurger"
          @click="closeBurger()"
          class="md:hidden block cursor-pointer"
        >
          <img v-if="isDark" src="/src/assets/icons/close-white.svg" alt="" />

          <img v-else src="/src/assets/icons/close.svg" alt="" />
        </div>
        <!-- logo -->
        <router-link to="/">
          <img
            v-if="isDark"
            class="block md:h-full max-h-[35px]"
            src="/src/assets/img/logo-white-svg.svg"
            alt=""
          />
          <img
            v-else
            class="block md:h-full max-h-[35px]"
            src="/src/assets/img/logo-svg.svg"
            alt=""
          />
        </router-link>
        <!-- logo -->

        <!-- menu nav -->
        <div class="nav xl:block hidden">
          <router-link
            class="ml-[32px] font-semibold text-[#736F6F] opacity-70 hover:!opacity-100 leading-[19px] text-base duration-300 cursor-pointer"
            :class="{
              'text-white  hover:text-[#C53023]  is-dark': isDark,
            }"
            :to="correctUrl(nav.url)"
            v-for="(nav, index) in navs"
            :key="index"
            >{{ getTranslation(nav, $i18n.locale.value, "title") }}
          </router-link>
        </div>
        <!-- menu nav -->

        <div v-clickout="clickOutside" class="flex items-center justify-center">
          <div
            v-if="phoneNumber"
            class="items-center justify-center gap-[8px] mr-[24px] md:flex hidden"
          >
            <span
              class="block bg-[#CC3224] w-[4px] h-[4px] rounded-full"
            ></span>
            <a
              :href="`tel:${phoneNumber}`"
              class="leading-[19px] text-base font-semibold text-[#363130] hover:text-[#FF3E2D] duration-300"
              :class="{ '!text-white hover:!text-[#FF3E2D]': !isDark }"
            >
              {{ formatPhoneNumber(phoneNumber) }}
            </a>
          </div>
          <div class="relative flex items-center justify-center">
            <!-- lang dropdown-->
            <button
              @click="openLangDropdown()"
              class="bg-[#21252B] duration-200 hover:opacity-80 ml-[10px] md:ml-0 text-[#FFFFFF] rounded-[10px] w-auto px-3 h-[48px] md:flex hidden items-center justify-center relative"
            >
              <img src="/src/assets/icons/globe.svg" alt="" />
              <h5
                class="ml-2 font-semibold text-white leading-[19px] text-base"
              >
                <span v-if="currentLang === 'uz'">O'zbekcha</span>
                <span v-else-if="currentLang === 'en'">English</span>
                <span v-else>Русский</span>
              </h5>
            </button>
            <!-- lang dropdown-->
            <!-- lang list -->
            <transition name="slide" type="animation" class="md:block hidden">
              <div
                v-if="openLang"
                class="bg-[#21252B] text-white rounded-[10px] w-[128px] absolute top-16 z-10 overflow-hidden"
              >
                <div
                  v-for="(item, index) in langs"
                  :key="index"
                  @click="changeLang(item.value)"
                  class="flex items-center justify-between border-b p-[10px] border-b-[#373A40] last:border-b-0 cursor-pointer duration-300 hover:bg-[#181a1f]"
                >
                  <h5
                    class="text-left font-semibold text-white leading-[19px] text-base"
                  >
                    {{ item.label }}
                  </h5>
                  <span
                    v-if="currentLang.toLowerCase() === item.value"
                    class="block bg-[#CC3224] w-[6px] h-[6px] ml-1.5 rounded-full"
                  ></span>
                </div>
              </div>
            </transition>
            <!-- lang list -->
            <!-- open menu button-->

            <!-- open menu button-->
          </div>

          <!-- personal cabinet -->
          <button
            class="md:hidden w-[36px] h-[36px] flex items-center justify-center bg-[#FF3E2D] rounded"
          >
            <img src="/src/assets/icons/login.svg" alt="login" />
          </button>

          <!--         TOdo: Tarjima kerak -->
          
          <SButton
            context="Личный кабинет"
            class="md:block hidden px-8 pt-3 pb-[14px] ml-6 text-lg leading-[22px]"
          />

          <!-- personal cabinet -->
        </div>
      </div>
      <div
        v-clickout="clickOutside"
        class="md:hidden w-full h-12 flex items-center justify-between"
      >
        <div class="items-center justify-center gap-[8px] mr-[24px] flex">
          <span class="block bg-[#CC3224] w-[4px] h-[4px] rounded-full"></span>

          <a
            :href="`tel:${phoneNumber}`"
            class="leading-[19px] text-base font-semibold text-[#363130] hover:text-[#FF3E2D] duration-300"
            :class="{ '!text-white hover:!text-[#FF3E2D]': !isDark }"
          >
            {{ formatPhoneNumber(phoneNumber) }}
          </a>
        </div>
        <div class="relative flex items-center justify-center">
          <!-- lang dropdown-->
          <button
            @click="openLangDropdown()"
            class="bg-[#21252B] ml-[10px] md:ml-0 text-[#FFFFFF] rounded-[10px] w-auto px-3 h-[48px] flex items-center justify-center relative"
          >
            <img src="/src/assets/icons/globe.svg" alt="" />
            <h5 class="ml-2 font-semibold text-white leading-[19px] text-base">
              <span v-if="currentLang === 'uz'">O'zbekcha</span>
              <span v-else-if="currentLang === 'en'">English</span>
              <span v-else>Русский</span>
            </h5>
          </button>
          <!-- lang dropdown-->
          <!-- lang list -->
          <transition name="slide" type="animation">
            <div
              v-if="openLang"
              class="bg-[#21252B] text-white rounded-[10px] w-[130px] absolute top-16 left-2.5 z-10"
            >
              <div
                v-for="(item, index) in langs"
                :key="index"
                @click="changeLang(item.value)"
                class="flex items-center justify-between border-b p-[10px] border-b-[#373A40] last:border-b-0 cursor-pointer"
              >
                <h5
                  class="text-left font-semibold text-white leading-[19px] text-base"
                >
                  {{ item.label }}
                </h5>
                <span
                  v-if="currentLang === item.value"
                  class="block bg-[#CC3224] w-[6px] ml-1.5 h-[6px] rounded-full"
                ></span>
              </div>
            </div>
          </transition>
          <!-- lang list -->
          <!-- open menu button-->

          <!-- open menu button-->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import { getTranslation } from "@/mixins/mixins";
import { useMainStore } from "@/store";
import SButton from "@/stories/main-button/SButton.vue";
import { useRoute } from "vue-router";

const store = useMainStore();
const route = useRoute();

const phoneNumber = computed(() => store.getContact.value.phone_number);
let openLang = ref(false);
let currentLang = localStorage.getItem("locale") || "Ru";
let openedBurger = ref(false);

const isDark = computed(() => route.meta.isDark);

const body = document.body;

function openLangDropdown() {
  openLang.value = !openLang.value;
}

function openBurger() {
  openedBurger.value = !openedBurger.value;
  body.style.overflow = "hidden";
}

function closeBurger() {
  openedBurger.value = false;
  body.style.overflow = "auto";
}

const clickOutside = () => {
  openLang.value = false;
};

function formatPhoneNumber(number: string) {
  const format = number
    ?.replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ""} ${
    format && format[2] ? format[2] : ""
  }

          ${format && format[3] ? format[3] : ""} ${
    format && format[4] ? format[4] : ""
  } ${format && format[5] ? format[5] : ""}`;
}

function changeLang(item: string) {
  openLang.value = false;
  if (item !== currentLang) {
    currentLang = item;
    localStorage.setItem("locale", item);
    location.reload();
  }
}

function correctUrl(item: string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  if (pattern.test(item)) {
    return item;
  } else {
    return `${item}`;
  }
}

const navs = store.getMenu;

const langs = [
  {
    label: "O'zbekcha",
    value: "uz",
  },
  {
    label: "Русский",
    value: "ru",
  },
  {
    label: "English",
    value: "en",
  },
];
</script>
<style scoped>
.router-link-active {
  color: #fff;
  opacity: 1;
}

.is-dark.router-link-active {
  color: #cc3224;
  opacity: 1;
}

.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
  opacity: 0;
  transition: opacity 0.3s;
}

@keyframes slide-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
