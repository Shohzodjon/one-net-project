<template>
  <div class="w-full">
    <div class="container">
      <ul class="flex py-[13.67px] gap-[9.67px] items-center">
        <li class="cursor-pointer">
          <router-link to="/" class="flex items-center gap-2 group">
            <i class="icon-home text-[26px] text-[#CC3224]" />
            <span
              class="leading-[18px] text-sm font-medium home-color transition-all duration-300 group-hover:text-mainColor"
              >{{ $t("main_page") }}</span
            >
          </router-link>
        </li>
        <li
          class="cursor-pointer flex items-center list"
          v-for="(page, index) in pages.slice(0, pages.length - 1)"
          :key="index"
        >
          <span class="shape mr-[9.67px]"></span>
          <router-link :to="page?.link || ''">
            <span class="leading-[18px] text-sm font-medium text-darkColor">{{
              page.title
            }}</span>
          </router-link>
        </li>
        <li class="flex items-center justify-center">
          <span class="shape mr-[9.67px]"></span>
          <span class="leading-[18px] text-sm font-medium text-darkColor">{{
            pages[pages.length - 1]?.title
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  pages: any[];
}
withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.home-color {
  color: rgba(34, 35, 44, 0.4);
}
.shape {
  display: block;
  width: 6px;
  height: 6px;
  background: rgba(34, 35, 44, 0.4);
  transform: rotate(45deg);
}
.list:last-child {
  cursor: auto !important;
}
</style>
