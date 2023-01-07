<template>
  <div class="faq md:py-16 py-4">
    <div class="container mx-auto">
      <h4
        data-aos="zoom-in"
        class="text-white text-center font-bold md:text-[36px] leading-[140%] text-[26px]"
      >
        {{ $t("faq_title") }}
      </h4>
      <!-- <div class="flex items-center md:justify-center justify-between mt-4">
        <div>
          <CInput
            data-aos="zoom-in"
            v-model="searchFaq"
            type="search"
            :placeholder="$t('write_your_answer')"
            is-dark
            class="sm:w-[481px] w-auto md:px-3 px-1"
            @keydown.enter="search"
          >
            <template #prefix>
              <img
                class="mr-[8px]"
                src="../../assets/icons/search.svg"
                alt=""
              />
            </template>
          </CInput>
        </div>
        <SBasicButton
          data-aos="zoom-in"
          @click="search"
          :label="$t('search')"
          backgroundColor="#FF3E2D"
          class="md:block px-8 pt-3 pb-[14px] ml-6 text-lg leading-[22px]"
        />
      </div> -->
    </div>

    <!-- answers -->
    <!-- <p
      data-aos="zoom-in"
      class="text-center text-white mt-2"
      v-if="searching || faqMode === FaqMode.SEARCH"
    >
      {{ searching ? "Searching..." : `${faqQuestions.length} FAQs found` }}
    </p> -->

    <div class="container mt-8 mx-auto">
      <div class="grid grid-cols-2 gap-x-6 gap-y-4">
        <div
          class="md:col-span-1 col-span-2"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
          v-for="(item, index) in faqQuestions"
          :key="item.id"
        >
          <div class="tab">
            <input type="checkbox" :id="`${q}` + item.id" />
            <label class="tab-label" :for="`${q}` + item.id">{{
              getTranslation(item, $i18n.locale.value, "title")
            }}</label>
            <div
              class="tab-content"
              v-html="getTranslation(item, $i18n.locale.value, 'context')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

import { getTranslation, setTranslations } from "@/mixins/mixins";
import { useMainStore } from "@/store";
import { $axios } from "@/utils/axios";

import SBasicButton from "../BasicButton/SBasicButton.vue";
import CInput from "../Form/Input/CInput.vue";
import { useToast } from "vue-toastification";

enum FaqMode {
  PREV,
  SEARCH,
}

const store = useMainStore();

const searchFaq = ref("");
const faqMode = ref(FaqMode.PREV);
const searchedFaqs = ref([] as any);
const searching = ref(false);

const toast = useToast();

const search = async () => {
  try {
    if (!searchFaq.value) {
      return toast.error("Please fill the field!", {
        icon: {
          iconClass: "toast-error",
          iconTag: "div",
        },
      });
    }
    searching.value = true;
    const { data } = await $axios.get(
      `/often_asked_questions?search=${searchFaq.value}&fields=*.*&sort=sort,ordering`
    );
    searchedFaqs.value = setTranslations(data.data);
    searching.value = false;
    return (faqMode.value = FaqMode.SEARCH);
  } catch (error) {
    searching.value = false;
  }
};

watch(searchFaq, () => {
  if (!searchFaq.value) {
    faqMode.value = FaqMode.PREV;
  }
});

const faqQuestions = computed(() => {
  return faqMode.value === FaqMode.SEARCH
    ? searchedFaqs.value
    : store.getFaq.value;
});
</script>

<style scoped>
.faq {
  background: #090d14;
}

input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-label {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .tab-label {
    margin-top: 0px;
  }
}

.tab-label::after {
  content: "";
  background: url(../../assets/icons/chevron-left.svg) no-repeat;
  width: 24px;
  transform: rotate(-90deg);
  height: 24px;
  text-align: center;
  transition: all 0.3s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.06);
  border: transparent;
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: red;
  cursor: pointer;
}
.tab-close:hover {
  background: rgba(255, 255, 255, 0.1);
}
input:checked + .tab-label {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px 8px 0 0;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
