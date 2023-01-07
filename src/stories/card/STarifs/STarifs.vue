<template>
  <div
    v-if="tarif"
    class="px-7 py-6 card group cursor-pointer transition duration-300 flex sm:flex-row flex-col sm:items-end space-y-4 sm:space-y-0 items-center justify-between bg-white border border-[#E5E7EB] rounded-2xl"
    style=""
    @click="openModal = true"
  >
    <div class="flex flex-col sm:items-start items-center">
      <h4
        class="mb-3 font-medium leading-6 md:text-base text-sm text-mainColor"
      >
        {{ tarif }}
      </h4>
      <h2
        class="text-mainColor line-clamp-1 font-bold lg:text-2xl md:text-xl text-lg leading-7 mb-2"
      >
        {{ tarifName }}
      </h2>
      <p
        class="font-extrabold leading-130 lg:text-2xl md:text-xl text-lg text-darkColor"
      >
        {{ formatMoneyWithSpace(price) }}
        <span
          class="font-medium leading-5 text-sm text-[#9CA3AF] lg:ml-4 ml-2"
          >{{ $t("sum_month") }}</span
        >
      </p>
    </div>
    <div
      class="h-full w-full sm:w-fit flex sm:flex-row flex-col sm:items-start items-center sm:space-x-6 space-y-4 sm:space-y-0"
    >
      <div class="bg-[#E5E7EB] sm:w-[1px] w-full sm:h-full h-[1px]"></div>
      <div
        class="grid sm:grid-cols-2 items-center lg:gap-x-[35px] md:gap-x-6 gap-4 gap-y-6"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center space-x-3"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21.6C17.302 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.302 2.4 12 2.4C6.69809 2.4 2.40002 6.69807 2.40002 12C2.40002 17.3019 6.69809 21.6 12 21.6ZM16.4486 10.4485C16.9172 9.9799 16.9172 9.2201 16.4486 8.75147C15.9799 8.28284 15.2201 8.28284 14.7515 8.75147L10.8 12.7029L9.24855 11.1515C8.77992 10.6828 8.02012 10.6828 7.5515 11.1515C7.08287 11.6201 7.08287 12.3799 7.5515 12.8485L9.9515 15.2485C10.4201 15.7172 11.1799 15.7172 11.6486 15.2485L16.4486 10.4485Z"
              fill="#22C55E"
            />
          </svg>
          <div>
            <p class="mb-1 text-[#374151] md:text-sm text-xs leading-4">
              {{ item.value }}
            </p>
            <p class="font-bold leading-5 md:text-base text-sm text-[#374151]">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p
      class="text-[#cc3224] space-x-1 font-medium leading-7 lg:text-lg md:text-base text-sm flex items-center"
    >
      {{ $t("start") }}
      <svg
        class="group-hover:translate-x-1 transition duration-300"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_190_1312)">
          <path
            d="M8.16675 8.16667L14.0001 14L8.16675 19.8333"
            stroke="#FF3E2D"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.16675 8.16667L14.0001 14L8.16675 19.8333"
            stroke="black"
            stroke-opacity="0"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1667 8.16667L21.0001 14L15.1667 19.8333"
            stroke="#FF3E2D"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1667 8.16667L21.0001 14L15.1667 19.8333"
            stroke="black"
            stroke-opacity="0"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_190_1312">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </p>
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
import { required, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";

import CInput from "@/components/Form/Input/CInput.vue";
import { formatMoneyWithSpace } from "@/mixins/mixins";
import SButton from "@/stories/main-button/SButton.vue";
import { $axios } from "@/utils/axios";

const toast = useToast();

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
const t = useI18n().t;
const $v = useVuelidate(formRules, form);
const submitForm = async () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    try {
      await $axios.post("/request_tarif", {
        ...form,
        tarif_name: props.tarifName,
      });
      $v.value.$reset();
      form.name = "";
      form.phone_number = "";
      form.text = "";
      hideModal();
      return toast.success(t("your_application_successful_send"), {
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

const props = defineProps({
  tarif: { type: String, default: "" },
  tarifName: { type: String, default: "" },
  price: { type: String, default: "" },
  items: { type: Array },
  id: { type: Number },
});
</script>
<style scoped>
.card:hover {
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.06);
}

.bounceIn-enter-to,
.bounceIn-enter-active {
  animation: 0.3s fromTop ease-out;
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

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  70% {
    opacity: 1;
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounceInLeave {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}

.anime {
  animation: 1s linear infinite slidein;
}

@keyframes slidein {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
