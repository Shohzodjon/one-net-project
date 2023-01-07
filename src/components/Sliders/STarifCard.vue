<template>
  <div
    @click="openModal = true"
    class="swiper-card flex flex-col justify-between p-5 bg-white rounded-2xl transition-all group duration-500 border-2 cursor-pointer border-solid border-[#E5E7EB] hover:border-mainColor text-[#212525]"
  >
    <div>
      <div class="flex items-center justify-between">
        <p class="font-medium leading-6 text-[#cc3224]">{{ card.type }}</p>
        <span
          v-if="card.status"
          class="font-medium leading-5 text-[#cc3224] py-1 px-3 bg-[#FFECEA] rounded-full text-sm line-clamp-1 break-all ml-2"
          >{{ card.status }}</span
        >
      </div>
      <div class="flex items-end gap-2">
        <h3
          class="text-darkColor text-4xl leading-[44px] font-extrabold tracking-tight"
        >
          {{ formatMoneyWithSpace(card.price) }}
        </h3>
        <p class="text-[#9CA3AF] text-sm leading-5 font-medium mb-1">
          {{ $t("sum_month") }}
        </p>
      </div>
      <h2 class="my-6 font-bold leading-6 text-2xl text-[#cc3224]">
        {{ card.tariff_name }}
      </h2>
      <hr class="border-t border-[#E5E7EB]" />
      <div class="flex flex-col gap-4 mt-6 mb-8">
        <div
          v-for="(item, index) in card.tariff_items"
          :key="index"
          class="flex items-start gap-3"
        >
          <span
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21.6C17.302 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.302 2.40002 12 2.40002C6.69809 2.40002 2.40002 6.69809 2.40002 12C2.40002 17.302 6.69809 21.6 12 21.6ZM16.4486 10.4486C16.9172 9.97992 16.9172 9.22012 16.4486 8.7515C15.9799 8.28287 15.2201 8.28287 14.7515 8.7515L10.8 12.703L9.24855 11.1515C8.77992 10.6829 8.02012 10.6829 7.5515 11.1515C7.08287 11.6201 7.08287 12.3799 7.5515 12.8486L9.9515 15.2486C10.4201 15.7172 11.1799 15.7172 11.6486 15.2486L16.4486 10.4486Z"
                fill="#22C55E"
              />
            </svg>
          </span>
          <div class="text-[#374151]">
            <p class="text-base font-normal leading-6" v-if="item.name">
              {{ item.value }}
            </p>
            <p class="md:text-2xl text-[20px] font-semibold leading-6 mt-1">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="rounded-[10px] font-medium text-lg tarrifs-btn leading-7 py-2.5 flex items-center justify-center gap-2 bg-[#FFDAD7] group-hover:bg-mainColor text-[#cc3224] group-hover:text-white transition-all duration-300"
    >
      {{ $t("start") }}

      <span class="tarrifs-arrow">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9815 4.81482L17.1667 10M17.1667 10L11.9815 15.1852M17.1667 10L3.83337 10"
            stroke="white"
            stroke-width="1.48148"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
  </div>
  <Teleport to="body">
    <div
      v-if="openModal"
      class="bg-[#181919] bg-opacity-80 w-full h-full fixed top-0 left-0 delay-700 z-50 px-4 flex items-center justify-center"
      @click="hideModal"
      id="bg"
    />
    <transition name="bounceIn" mode="out-in">
      <div
        v-if="openModal"
        class="fixed z-50 w-full h-screen inset-0 flex items-center justify-center px-4"
      >
        <div
          class="bg-white max-w-[786px] p-6 w-full rounded-2xl relative max-h-screen"
        >
          <div
            class="pb-5 flex items-center justify-between border-b border-solid border-divider"
          >
            <h2
              class="md:text-xl sm:text-lg text-base lg:text-2xl font-bold leading-140 text-darkColor"
            >
              Оставить заявку
            </h2>
            <button
              @click="hideModal"
              class="group ml-2 flex items-center justify-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7L7 21"
                  stroke="#FF3E2D"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 7L7 21"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7L21 21"
                  stroke="#FF3E2D"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7L21 21"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex sm:flex-row flex-col text-darkColor sm:space-x-6 items-center mb-5 mt-6"
          >
            <CInput
              v-model="form.name"
              type="text"
              label="name"
              placeholder="enter_your_name"
              :error="$v.name.$error"
              class="sm:w-6/12 w-full"
              inputClass="bg-[#3631301a] border-[#36313038] focus-within:!border-[#363130]"
              :class="{
                '!border-mainColor': $v.text.$error,
              }"
            />

            <CInput
              placeholder="__ ___ __ __"
              label="phone_number"
              v-model="form.phone_number"
              type="phone"
              inputClass="bg-[#3631301a] border-[#36313038] focus-within:!border-[#363130]"
              class="sm:w-6/12 w-full"
              :error="$v.phone_number.$error"
              :class="{
                '!border-mainColor': $v.text.$error,
              }"
            >
              <template #prefix>
                <span
                  class="text-darkColor text-base text-140 font-normal mr-1"
                >
                  +998
                </span>
              </template>
            </CInput>
          </div>
          <div class="flex flex-col items-start mb-7">
            <label
              class="lg:text-xl md:text-lg text-base font-medium leading-140 text-darkColor"
              for=""
            >
              {{ $t("enter_text") }}
            </label>
            <div class="h-[152px] w-full relative">
              <textarea
                v-model="form.text"
                :class="{
                  '!border-mainColor': $v.text.$error,
                }"
                maxlength="200"
                :placeholder="$t('enter_application_text')"
                class="resize-none outline-none h-full lg:text-base text-sm bg-[#3631301a] text-darkColor transition duration-300 border border-[#36313038] focus:border-[#363130] rounded-xl w-full py-3 px-4 mt-2"
              />
              <p
                class="absolute right-1.5 bottom-2.5 text-sm leading-140 text-[#363130] text-opacity-40"
              >
                {{ form.text.length }}/200
              </p>
            </div>
          </div>
          <div class="flex items-center justify-end sm:space-x-5 space-x-2">
            <button
              @click="hideModal"
              class="leading-5 lg:text-lg md:text-base text-sm pt-3 pb-3.5 sm:pl-[31px] sm:pr-[30px] sm:w-fit w-6/12 rounded-[10px] text-darkColor bg-[#EBEBEB]"
            >
              Отменить
            </button>

            <SButton
              @click="submitForm"
              context=" Отправить"
              class="px-8 pt-3 pb-[14px] ml-6 text-lg leading-[22px]"
            />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import { defineProps, reactive, ref, watch } from "vue";
import { useToast } from "vue-toastification";

import CInput from "@/components/Form/Input/CInput.vue";
import SButton from "@/stories/main-button/SButton.vue";
import { $axios } from "@/utils/axios";
import { useI18n } from "vue-i18n";

interface Props {
  card: {
    type: string;
    status?: string;
    price: number;
    tariff_name: string;
    tariff_items: { name: string; value: string }[];
  };
}

function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const props = defineProps<Props>();

const toast = useToast();
const t = useI18n().t;

const form = reactive({
  name: "",
  phone_number: "",
  text: "",
});
const formRules = {
  name: { required },
  phone_number: { required, minLength: minLength(9) },
  text: { required },
};
const $v = useVuelidate(formRules, form);
const submitForm = async () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    try {
      await $axios.post("/request_tarif", {
        ...form,
        tarif_name: props.card.tariff_name,
      });
      $v.value.$reset();
      form.name = "";
      form.phone_number = "";
      form.text = "";
      hideModal();
      return toast.success("Success!", {
        icon: {
          iconClass: "toast-success",
          iconTag: "div",
        },
      });
    } catch (error) {
      return toast.error(t("something_wrong"), {
        icon: {
          iconClass: "toast-error",
          iconTag: "div",
        },
      });
    }
  }
  toast.error(t("please_fill_all_fields"), {
    icon: {
      iconClass: "toast-error",
      iconTag: "div",
    },
  });
};

const openModal = ref(false);
const hideModal = () => {
  openModal.value = false;
  $v.value.$reset();
};

function keyUp(event: KeyboardEvent) {
  if (event.keyCode === 27) {
    openModal.value = false;
    $v.value.$reset();
  }
}

watch(
  () => openModal.value,
  (newValue) => {
    if (newValue) {
      document.addEventListener("keydown", keyUp);
      document.body.style.overflowY = "hidden";
      document.body.classList.add("pr-2");
    } else {
      document.removeEventListener("keydown", keyUp);
      document.body.style.overflowY = "scroll";
      document.body.classList.remove("pr-2");
    }
  }
);
</script>

<style>
.bounceIn-enter-to,
.bounceIn-enter-active {
  animation: 0.3s fromTop ease-out;
}
.tarrifs-arrow {
  transition: all linear 0.3s;
  opacity: 0;
  transform: translateX(-50%);
}
.tarrifs-btn:hover .tarrifs-arrow {
  transform: translateX(0);
  opacity: 1;
}

.bounceIn-leave-to,
.bounceIn-leave-active {
  animation: 0.3s fromTop ease-in reverse;
}

@keyframes fromTop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
