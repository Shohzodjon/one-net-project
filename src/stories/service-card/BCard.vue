<template>
  <div
    class="card cursor-pointer rounded-2xl bg-white pt-4 sm:pt-5 md:pt-7 px-4 lg:px-0 pb-4 sm:pb-6 relative flex flex-col items-center justify-center overflow-hidden"
  >
    <i class="text-[48px] text-[#C43225]" :class="imgUrl" />

    <h4
      class="text-darkColor !leading-0 lg:leading-7 text-sm sm:text-base md:text-lg lg:text-xl w-full text-center relative z-20 font-bold mt-3 lg:mt-6"
    >
      {{ $t(text) }}
    </h4>
    <div class="circle-shape" :class="patternClass"></div>
    <span class="absolute top-0 right-0" :class="patternClass">
      <svg
        width="119"
        height="126"
        viewBox="0 0 119 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M127.819 125.3C147.8 65.278 128.599 -65.7886 0.322592 -96.4029L16.7452 -67.9582C54.0568 -59.7078 128.126 -9.46888 127.819 125.3Z"
          fill="#FF3E2D"
        />
        <path
          d="M127.819 125.3C147.8 65.278 128.599 -65.7886 0.322592 -96.4029L16.7452 -67.9582C54.0568 -59.7078 128.126 -9.46888 127.819 125.3Z"
          fill="black"
          fill-opacity="0.2"
        />
      </svg>
    </span>
    <span class="absolute bottom-0 left-0" :class="patternClass">
      <svg
        width="116"
        height="137"
        viewBox="0 0 116 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-11.6838 0.484375C-31.6649 60.506 -12.4631 191.573 115.813 222.187L99.3903 193.742C62.0787 185.492 -11.991 135.253 -11.6838 0.484375Z"
          fill="#FF3E2D"
        />
        <path
          d="M-11.6838 0.484375C-31.6649 60.506 -12.4631 191.573 115.813 222.187L99.3903 193.742C62.0787 185.492 -11.991 135.253 -11.6838 0.484375Z"
          fill="black"
          fill-opacity="0.2"
        />
      </svg>
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text?: string;
  imgUrl?: string;
  patternClass?: string;
}

withDefaults(defineProps<Props>(), {});
</script>
<style scoped>
.card {
  transition: all linear 0.3s;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.circle-shape {
  background: rgba(255, 62, 45, 0.03);
  filter: blur(22px);
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
}
</style>
