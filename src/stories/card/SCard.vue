<template>
  <router-link
    v-if="card?.slug !== $route?.params?.slug"
    :to="`/news/${card?.slug}`"
    class="flex gap-4 group cursor-pointer rounded-xl transition-all duration-300 hover:bg-[#F1F1F1]"
    :class="[
      cardRow ? 'flex-row hover:bg-[#F1F1F1] md:p-3' : 'flex-col p-3',
      isNewsPage ? '!max-h-[150px] pb-2' : '',
      cardRow && !isNewsPage ? 'hover:!bg-white !max-h-[140px] ' : '',
    ]"
  >
    <div
      class="rounded-2xl shrink-0 overflow-hidden max-h-[164px] border border-[#E7E7E8]"
      :class="cardRow ? 'max-w-[140px] border-0' : ''"
    >
      <img
        v-lazy="$static + card?.img?.id"
        :alt="card?.title"
        class="w-full h-full !rounded-2xl object-cover transition-all duration-300"
        :class="{ '': !cardRow }"
      />
    </div>
    <div :class="cardRow ? 'py-3' : ''">
      <p class="text-[#939191] leading-[18px] text-sm font-medium">
        {{ dateFormatter(card?.date_created) }}
      </p>
      <h6
        class="text-darkColor text-[18px] !leading-[23px] font-semibold line-clamp-1 mt-2 mb-[6px] transition-all duration-300 group-hover:text-mainColor"
      >
        {{ getTranslation(card, $i18n.locale.value, "title") }}
      </h6>
      <p
        class="text-[#939191] !leading-[21px] text-sm font-semibold line-clamp-2"
      >
        {{ getTranslation(card, $i18n.locale.value, "sub_title") }}
      </p>
    </div>
  </router-link>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

import { getTranslation } from "@/mixins/mixins";

interface Props {
  card: {
    img: string;
    date_created: string;
    slug: string;
    title: string;
    description: string;
  };
  cardRow?: boolean;
  isNewsPage?: boolean;
}
const t = useI18n().t;
const dateFormatter = (date: string) => {
  const fullDate = new Date(date);
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();
  return t(`months[${month}]`) + ` ${day}, ${year}`;
};

withDefaults(defineProps<Props>(), {
  cardRow: false,
});
</script>
