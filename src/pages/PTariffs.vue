<template>
  <section class="bg-[#FCFCFC]">
    <SBread :pages="[{ title: $t('tariffs'), link: '/tariffs' }]" />
    <div class="container px-4 mx-auto pt-8 pb-16">
      <h1 class="font-bold text-[32px] leading-140 text-darkColor mb-6">
        {{ $t("tariffs") }}
      </h1>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xl:col-span-3">
          <div
            v-if="categories.length > 0"
            class="p-4 rounded-2xl flex flex-wrap md:flex-nowrap flex-row xl:flex-col gap-2 bg-[#EEF0F0] border border-[#33393826]"
          >
            <button
              :class="{ active: category.id === +activeTab }"
              class="text-left w-full xl:w-auto p-3 pr-6 rounded-[10px] bg-white transition-all duration-300 border border-transparent hover:border-[#cc3224] hover:text-[#cc3224] font-medium text-xl leading-140 flex items-center flex-col lg:flex-row gap-2"
              v-for="(category, index) in categories"
              @click="setTabActive(category.id)"
              :key="index"
            >
              <img
                v-lazy="$static + category.icon_file_svg"
                alt=""
                class="!w-6 !h-auto object-contain"
              />
              {{ getTranslation(category, $i18n.locale.value, "title") }}
            </button>
          </div>
        </div>
        <div class="col-span-12 xl:col-span-9">
          <div :key="activeTab" class="w-full flex flex-col space-y-6">
            <STarifs
              v-for="tarif in tarifs"
              :key="tarif"
              data-aos="fade-up"
              v-bind="{
                tarif: getTranslation(tarif, $i18n.locale.value, 'sub_title'),
                tarifName: getTranslation(tarif, $i18n.locale.value, 'title'),
                price: tarif.price,
                items: getItems(tarif),
                id: tarif.id,
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { getItems, getTranslation, setTranslations } from "@/mixins/mixins";
import SBread from "@/stories/bread-crumb/SBread.vue";
import STarifs from "@/stories/card/STarifs/STarifs.vue";
import { $axios } from "@/utils/axios";

defineProps<{ tarifs: [] }>();

const router = useRouter();
const route = useRoute();
const activeTab = ref(null as null | number);

const categories = ref([] as any[]);
const tarifs = ref([] as any[]);

const fetchTarifs = async () => {
  const _tarifs = await $axios.get(
    `/offer?fields=*.*&filter[category][id][_in]=${activeTab.value}`
  );
  tarifs.value = setTranslations(_tarifs.data.data);
};

onMounted(async () => {
  activeTab.value = route.query.tab ? +route.query.tab : null;
  const _categories = await $axios.get(
    "/offer_category?fields=*,translations.*&sort=sort,-sort"
  );
  if (!activeTab.value && _categories.data.data.length > 0) {
    setRoute(_categories.data.data[0].id);
  }
  categories.value = setTranslations(_categories.data.data);

  await fetchTarifs();
});

const setRoute = (tab: number) => {
  activeTab.value = tab;
  router.push({
    ...route,
    query: { ...route.query, tab },
  });
};

async function setTabActive(tab: number) {
  setRoute(tab);
  await fetchTarifs();
}
</script>
<style>
.active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ff3e2d;
  color: white;
  pointer-events: none;
}
.active svg path {
  fill: #ebada7;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
