<template>
  <div>
    <div v-if="isLoading"
      class="
        fixed
        left-0
        top-0
        w-full
        h-screen
        bg-[#090D14]
        z-50
        flex
        items-center
        justify-center
      "
    >
      <div class="spinner"></div>
    </div>
    <section  class="w-full min-h-[100vh] flex flex-col justify-between">
      <!-- <SHeader /> -->
      <RouterView v-slot="{ Component, route: routerViewRoute }">
        <component :is="routerViewRoute.meta.layout">
          <transition name="scale" mode="out-in">
            <div :key="route.path">
              <component :is="Component" />
            </div>
          </transition>
        </component>
      </RouterView>
      <SFooter v-if="!isLoading"/>
    </section>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import AOS from "aos";
import SFooter from "@/components/sections/SFooter.vue";
import { setTranslations } from "./mixins/mixins";
import { useMainStore } from "./store";
import { $axios } from "./utils/axios";
import { useRoute } from "vue-router";

const store = useMainStore();
const route = useRoute();
var isLoading = ref(true);




watch(
  () => isLoading.value,
  (newValue: any) => {
    if (newValue) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "5px";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0";
    }
  },
  { immediate: true }
);

onMounted(async () => {
  AOS.init({
    once: true,
  });
  const [_menus, _contacts] = await Promise.all([
    $axios.get("/menu?fields=*.*&sort=order"),
    $axios.get("/contacts?fields=*.*&limit=1"),
  ]);

  store.setContact(setTranslations(_contacts.data.data)[0]);
  store.setMenu(setTranslations(_menus.data.data));

  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.spinner {
  width: 72px;
  height: 72px;
  display: grid;
  border: 5.8px solid #0000;
  border-radius: 50%;
  border-color: #ff3e2d #0000;
  animation: spinner-animation 0.5s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2.9px;
  border: inherit;
  border-radius: 50%;
}

.spinner::before {
  border-color: white #0000;
  animation: inherit;
  animation-duration: 2s;
  animation-direction: reverse;
}

.spinner::after {
  margin: 11.6px;
}

@keyframes spinner-animation {
  100% {
    transform: rotate(1turn);
  }
}

.layout-enter-active {
  animation: layout 2s ease-out;
}

.layout-leave-active {
  animation: layout 2s ease-in reverse;
}


</style>
