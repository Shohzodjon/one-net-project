<template>
  <div class="h-screen bg-[#090D14] overflow-hidden relative">
    <div class="container relative pt-16 h-full">
      <img
        class="absolute left-0 top-6 w-full z-1"
        src="/src/assets/img/404-pattern.png"
        alt=""
      />
      <div class="relative z-2 flex items-center flex-col gap-[101px] h-full">
        <img src="/src/assets/img/404.png" alt="" />
        <div class="text-center">
          <h1 class="text-white font-bold text-[28px] leading-[34px]">
            {{ $t("error") }}
          </h1>
          <p class="text-[24px] leading-7 text-white">
            {{ $t("page_not_found") }}
          </p>
          <router-link
            to="/"
            class="block mt-8 py-3 px-9 text-[#363130] text-lg font-medium leading-[22px] bg-[#EBEBEB] transition duration-300 hover:bg-[#CCCCCC] rounded-[10px]"
          >
            {{ $t("go_home") }}
          </router-link>
        </div>
      </div>
    </div>
    <img
      src="/src/assets/img/shadow.png"
      class="absolute left-1/2 -translate-x-1/2 bottom-0"
      alt=""
    />
  </div>
</template>
