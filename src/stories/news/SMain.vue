<template>
  <router-link
    :to="`/news/${mainSlug}`"
    class="group h-[300px] sm:h-auto !max-h-[459px] relative rounded-2xl overflow-hidden group cursor-pointer"
  >
    <img
      v-lazy="$static + mainImg"
      :alt="mainImg"
      class="w-full h-full object-cover rounded-none"
    />
    <div
      class="main-overlay absolute w-full h-full left-0 top-0 z-10 opacity-0 transition-all duration-500 group-hover:opacity-100"
    />
    <div
      class="main-overlay absolute w-full h-full z-20 left-0 bottom-0 transition-all duration-500 opacity-100"
    />
    <div
      class="px-6 pb-6 flex flex-col justify-end absolute w-full h-full top-0 left-0 z-30"
    >
      <h3
        class="text-white line-clamp-2 transition duration-300 text-base mb-4 sm:text-2xl leading-5 sm:leading-[31px] font-bold group-hover:text-mainColor"
      >
        {{ mainText }}
      </h3>
      <p class="text-sm line-clamp-2 text-color font-medium leading-[18px]">
        {{ mainDesc }}
      </p>
    </div>
  </router-link>
</template>
<script lang="ts" setup>
interface Props {
  mainImg: string;
  mainText: string;
  mainDesc: string;
  mainSlug: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.main-overlay {
  background: linear-gradient(180deg, rgba(4, 4, 4, 0.02) 0%, #050505 100%);
}
.text-color {
  color: rgba(255, 255, 255, 0.8);
}

@media screen and (min-width: 1024px) and (max-width: 1200px) {
  .card-wrap {
    width: 70%;
  }
  .card-wrap img {
    object-fit: fill;
  }
}
</style>
