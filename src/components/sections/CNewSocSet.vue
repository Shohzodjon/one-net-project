<template>
  <div class="bg-[#00121C] rounded-2xl p-6 soc-set-bg">
    <h5 class="text-white leading-[140%] font-bold text-xl">
      {{ $t("our_soc_set") }}
    </h5>
    <div class="flex items-center justify-start mt-5">
      <a
        class="
          bg-[#26353E]
          inline-flex
          rounded-lg
          p-1.5
          leading-[140%]
          font-bold
          text-base
          items-center
          justify-center
          mx-2
          first:ml-0
        "
        href=""
        v-for="(item, index) in socSets"
        :key="index"
      >
        <img :src="item.image_url" class="max-w-[28px] h-auto" alt="" />
        <span class="text-white ml-2">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

    interface Props {
        socSets: {
            image_url: string,
            title: string
        }[]    }
        defineProps<Props>()
// const socSets = [
//   {
//     image_url: "https://picsum.photos/100/100",
//     title: "Facebook",
//   },
//   {
//     image_url: "https://picsum.photos/100/100",
//     title: "Facebook",
//   },
//   {
//     image_url: "https://picsum.photos/100/100",
//     title: "Facebook",
//   },
// ];
</script>

<style scoped>
.soc-set-bg {
  background-image: url("../../assets/img/soc-set-bg.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 245px;
}
</style>