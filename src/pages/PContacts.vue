<template>
  <div>
    <SBread :pages="[{ title: $t('feedback')}]" />
    <div class="container px-4 mx-auto pt-8 pb-[105px]">
      <h1
        class="
          font-bold
          leading-130
          mb-5
          text-darkColor
          lg:text-4xl
          md:text-3xl
          text-2xl
        "
      >
        {{ $t("feedback") }}
      </h1>
      <div
        class="
          flex flex-col
          space-y-6 space-x-0
          lg:space-x-6 lg:space-y-0
          spa
          lg:flex-row
        "
      >
        <form @submit.prevent="submitForm" class="lg:w-9/12">
          <div
            class="
              p-6
              bg-white
              rounded-2xl
              flex flex-col
              border border-[#22232C1C]
            "
          >
            <div class="mb-6">
              <div class="grid sm:grid-cols-2 mb-6 items-center gap-5 w-full">
                <CInput
                  v-model="form.name"
                  placeholder="enter_your_name"
                  label="your_full_name"
                  :error="$v.name.$error"
                />
                <CInput
                  v-model="form.phone_number"
                  placeholder="__ ___ __ __"
                  label="phone_number"
                  type="phone"
                  :error="$v.phone_number.$error"
                >
                  <template #prefix>
                    <span class="text-base text-140 font-normal mr-1">
                      +998
                    </span>
                  </template>
                </CInput>
              </div>
              <div class="w-full relative md:h-auto mt-2">
                <label
                  class="text-xl font-medium leading-130 text-darkColor"
                  for="text"
                >
                  {{ $t("appeal") }}
                </label>
                <textarea
                  v-model="form.text"
                  id="appeal"
                  class="
                    px-4
                    py-3
                    mt-2
                    text-base text-140
                    font-normal
                    placeholder:text-opacity-40
                    text-darkColor
                    resize-none
                    w-full
                    !h-40
                    outline-none
                    bg-[#f7f7f7]
                    border
                    rounded-xl
                    backdrop-blur-[10px]
                    border-[#E7E7E8]
                    hover:border-[#363130]
                    focus:border-[#363130]
                    transition
                    duration-300
                  "
                  :placeholder="$t('enter_your_appeal')"
                  :class="{
                    '!border-mainColor': $v.text.$error,
                  }"
                />
              </div>
            </div>
            <div
              class="
                flex flex-col
                md:flex-row md:justify-between md:items-center
              "
            >
              <div class="flex items-center">
                <input
                  v-model="form.checkbox"
                  id="checkboxWithoutImage"
                  class="inp-cbx"
                  type="checkbox"
                  style="display: none"
                />
                <label class="cbx flex items-center" for="checkboxWithoutImage">
                  <span
                    class="shrink-0"
                    :class="$v.checkbox.$error ? 'error' : ''"
                  >
                    <svg width="12px" height="9px" viewbox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                  <span>
                    <i18n-t
                      keypath="privacy_policy_desc"
                      tag="p"
                      class="leading-130 text-[#1D1D1D] text-xs w-[273px]"
                    >
                      <template #privacyPolicy>
                        <a
                          href="/pages/privacy-policy"
                          target="_blank"
                          class="text-mainColor"
                        >
                          {{ $t("privacy_policy") }}
                        </a>
                      </template>
                    </i18n-t>
                  </span>
                </label>
              </div>
              <SButton
                context="send"
                class="
                  px-[95px]
                  py-2.5
                  mt-3
                  md:mt-0 md:ml-6
                  text-lg
                  leading-[22px]
                "
              />
            </div>
          </div>
        </form>
        <div class="lg:w-3/12">
          <div
            class="
              p-4
              bg-white
              rounded-2xl
              flex flex-col
              border border-[#22232C1C]
            "
          >
            <h4 class="mb-4 font-medium leading-130 text-xl text-darkColor">
              {{ $t("contacts") }}
            </h4>
            <div class="flex flex-col space-y-4">
              <div class="flex items-start">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4287 3.42857V6"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.57129 3.42857V6"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4.28564 8.71429C4.28564 6.50515 6.07651 4.71429 8.28564 4.71429H15.7142C17.9234 4.71429 19.7142 6.50515 19.7142 8.71429V16.5714C19.7142 18.7806 17.9234 20.5714 15.7142 20.5714H8.28565C6.07651 20.5714 4.28564 18.7806 4.28564 16.5714V8.71429Z"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4.28564 9.42857H19.7142"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <div class="ml-3 flex flex-col">
                  <p class="text-[#36313066] text-sm leading-4">
                    {{ $t("work_time") }}
                  </p>
                  <p class="font-medium leading-130 text-darkColor mt-0.5">
                    {{
                      getTranslation(
                        data,
                        $i18n.locale.value,
                        "working_schedule"
                      )
                    }}
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5716 4.65308H9.24507L11.0818 9.24491L8.78588 10.6225C9.76942 12.6167 11.3835 14.2308 13.3777 15.2143L14.7553 12.9184L19.3471 14.7551V18.4286C19.3471 18.9157 19.1536 19.3829 18.8091 19.7274C18.4647 20.0718 17.9975 20.2653 17.5104 20.2653C13.9281 20.0476 10.5493 18.5264 8.01154 15.9886C5.4738 13.4509 3.95256 10.0721 3.73486 6.48981C3.73486 6.00268 3.92838 5.5355 4.27283 5.19104C4.61728 4.84659 5.08447 4.65308 5.5716 4.65308"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="ml-3 flex flex-col">
                  <p class="text-[#36313066] text-sm leading-4">
                    {{ $t("phone") }}
                  </p>
                  <a
                    class="
                      font-medium
                      leading-130
                      text-darkColor
                      mt-0.5
                      transition
                      duration-300
                      hover:text-mainColor
                    "
                    :href="`tel: ${data.phone_number}}`"
                  >
                    {{ data.phone_number }}
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.42871"
                      y="4.28571"
                      width="17.1429"
                      height="15.4286"
                      rx="4"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.42871 7.71429L10.1261 13.0722C11.2217 13.9487 12.7786 13.9487 13.8742 13.0722L20.5716 7.71429"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="ml-3 flex flex-col">
                  <p class="text-[#36313066] text-sm leading-4">
                    {{ $t("email") }}
                  </p>
                  <a
                    v-for="(item, index) in data.email"
                    :key="index"
                    class="
                      font-medium
                      leading-130
                      text-darkColor
                      mt-0.5
                      transition
                      duration-300
                      hover:text-mainColor
                    "
                    :href="`mailto: ${item.email}`"
                  >
                    {{ item.email }}
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <span
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.125 2.25H15C15 2.05109 14.921 1.86032 14.7803 1.71967C14.6397 1.57902 14.4489 1.5 14.25 1.5H9.75C9.55109 1.5 9.36032 1.57902 9.21967 1.71967C9.07902 1.86032 9 2.05109 9 2.25H7.875C7.17942 2.25198 6.51289 2.52918 6.02103 3.02103C5.52918 3.51289 5.25198 4.17942 5.25 4.875V16.4531C5.25 18.1078 12 19.5 12 19.5C12 19.5 18.75 18.1078 18.75 16.4531V4.875C18.75 4.17881 18.4734 3.51113 17.9812 3.01884C17.4889 2.52656 16.8212 2.25 16.125 2.25V2.25ZM12 16.5C11.555 16.5 11.12 16.368 10.75 16.1208C10.38 15.8736 10.0916 15.5222 9.92127 15.111C9.75097 14.6999 9.70642 14.2475 9.79323 13.811C9.88005 13.3746 10.0943 12.9737 10.409 12.659C10.7237 12.3443 11.1246 12.13 11.561 12.0432C11.9975 11.9564 12.4499 12.001 12.861 12.1713C13.2722 12.3416 13.6236 12.63 13.8708 13C14.118 13.37 14.25 13.805 14.25 14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5ZM16.5 9C16.5 9.19891 16.421 9.38968 16.2803 9.53033C16.1397 9.67098 15.9489 9.75 15.75 9.75H8.25C8.05109 9.75 7.86032 9.67098 7.71967 9.53033C7.57902 9.38968 7.5 9.19891 7.5 9V6C7.5 5.80109 7.57902 5.61032 7.71967 5.46967C7.86032 5.32902 8.05109 5.25 8.25 5.25H15.75C15.9489 5.25 16.1397 5.32902 16.2803 5.46967C16.421 5.61032 16.5 5.80109 16.5 6V9Z"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.75 21.75H17.25"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 20.25L18 22.5"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 20.25L6 22.5"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="ml-3 flex flex-col">
                  <p class="text-[#36313066] text-sm leading-4">
                    {{ $t("metro") }}
                  </p>

                  <p class="font-medium leading-130 text-darkColor mt-0.5">
                    {{ data.subway }}
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.98731 17.2308L4.67961 17.5192L3.98731 17.2308ZM3.15397 19.2308L3.84628 19.5192L3.15397 19.2308ZM20.8463 19.2308L20.154 19.5192L20.8463 19.2308ZM20.0129 17.2308L20.7053 16.9423V16.9423L20.0129 17.2308ZM16.0001 15.25C15.5859 15.25 15.2501 15.5858 15.2501 16C15.2501 16.4142 15.5859 16.75 16.0001 16.75V15.25ZM8.00013 16.75C8.41434 16.75 8.75013 16.4142 8.75013 16C8.75013 15.5858 8.41434 15.25 8.00013 15.25V16.75ZM18.2501 9.11111C18.2501 10.8311 17.2713 12.8886 15.9049 14.5523C15.2309 15.373 14.49 16.0632 13.7814 16.5419C13.0567 17.0316 12.4406 17.25 12.0001 17.25V18.75C12.8722 18.75 13.7873 18.3483 14.6212 17.7849C15.4712 17.2106 16.3162 16.4149 17.0641 15.5043C18.5415 13.7054 19.7501 11.3185 19.7501 9.11111H18.2501ZM12.0001 17.25C11.5597 17.25 10.9435 17.0316 10.2188 16.5419C9.51023 16.0632 8.76935 15.373 8.09534 14.5523C6.72898 12.8886 5.75013 10.8311 5.75013 9.11111H4.25013C4.25013 11.3185 5.45877 13.7054 6.93616 15.5043C7.68403 16.4149 8.52908 17.2106 9.37908 17.7849C10.213 18.3483 11.1281 18.75 12.0001 18.75V17.25ZM5.75013 9.11111C5.75013 5.58679 8.55944 2.75 12.0001 2.75V1.25C7.70883 1.25 4.25013 4.78072 4.25013 9.11111H5.75013ZM12.0001 2.75C15.4408 2.75 18.2501 5.58679 18.2501 9.11111H19.7501C19.7501 4.78072 16.2914 1.25 12.0001 1.25V2.75ZM13.7501 9C13.7501 9.9665 12.9666 10.75 12.0001 10.75V12.25C13.7951 12.25 15.2501 10.7949 15.2501 9H13.7501ZM12.0001 10.75C11.0336 10.75 10.2501 9.9665 10.2501 9H8.75013C8.75013 10.7949 10.2052 12.25 12.0001 12.25V10.75ZM10.2501 9C10.2501 8.0335 11.0336 7.25 12.0001 7.25V5.75C10.2052 5.75 8.75013 7.20507 8.75013 9H10.2501ZM12.0001 7.25C12.9666 7.25 13.7501 8.0335 13.7501 9H15.2501C15.2501 7.20507 13.7951 5.75 12.0001 5.75V7.25ZM3.295 16.9423L2.46166 18.9423L3.84628 19.5192L4.67961 17.5192L3.295 16.9423ZM5.00013 22.75H19.0001V21.25H5.00013V22.75ZM21.5386 18.9423L20.7053 16.9423L19.3206 17.5192L20.154 19.5192L21.5386 18.9423ZM18.1668 15.25H16.0001V16.75H18.1668V15.25ZM5.83346 16.75H8.00013V15.25H5.83346V16.75ZM20.7053 16.9423C20.2783 15.9175 19.277 15.25 18.1668 15.25V16.75C18.6714 16.75 19.1266 17.0534 19.3206 17.5192L20.7053 16.9423ZM19.0001 22.75C20.9625 22.75 22.2933 20.7537 21.5386 18.9423L20.154 19.5192C20.497 20.3426 19.8921 21.25 19.0001 21.25V22.75ZM2.46166 18.9423C1.70692 20.7537 3.03779 22.75 5.00013 22.75V21.25C4.10815 21.25 3.50321 20.3426 3.84628 19.5192L2.46166 18.9423ZM4.67961 17.5192C4.8737 17.0534 5.32883 16.75 5.83346 16.75V15.25C4.72328 15.25 3.72199 15.9175 3.295 16.9423L4.67961 17.5192Z"
                      fill="#AFAFAF"
                    />
                  </svg>
                </span>
                <div class="flex flex-col ml-3">
                  <p class="text-[#36313066] text-sm leading-4">
                    {{ $t("on_map") }}
                  </p>
                  <a>
                    <!-- {{ item.contactLink }} -->
                  </a>
                </div>
              </div>
              <div>
                <div style="position: relative; overflow: hidden">
                  <a
                    href="https://yandex.uz/maps/org/united_it_company/144492119461/?utm_medium=mapframe&utm_source=maps"
                    style="
                      color: #eee;
                      font-size: 12px;
                      position: absolute;
                      top: 0px;
                    "
                    >United IT Company</a
                  ><a
                    href="https://yandex.uz/maps/10335/tashkent/category/it/184106174/?utm_medium=mapframe&utm_source=maps"
                    style="
                      color: #eee;
                      font-size: 12px;
                      position: absolute;
                      top: 14px;
                    "
                    >IT-компания в Ташкенте</a
                  ><iframe
                    v-if="data.map"
                    :src="data.map"
                    width="100%"
                    height="146"
                    frameborder="1"
                    allowfullscreen="true"
                    style="position: relative"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { minLength, required, sameAs } from "@vuelidate/validators";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";
import CInput from "@/components/Form/Input/CInput.vue";
import SButton from "@/stories/main-button/SButton.vue";
import { $axios } from "@/utils/axios";
import { useMainStore } from "@/store";
import { getTranslation } from "@/mixins/mixins";
import SBread from "@/stories/bread-crumb/SBread.vue";

const store = useMainStore();

const data = store.getContact;

const t = useI18n().t;
const form = reactive({
  name: "",
  phone_number: "",
  text: "",
  checkbox: "f",
});
const formRules = {
  name: {
    required,
  },
  phone_number: {
    required,
    minLength: minLength(9),
  },
  text: {
    required,
  },
  checkbox: {
    sameAs: sameAs(true),
  },
};
const toast = useToast();
const $v = useVuelidate(formRules, form);
const submitForm = async () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    try {
      await $axios.post("/request", { ...form });
      $v.value.$reset();
      form.name = "";
      form.phone_number = "";
      form.text = "";
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
</script>

<style>
.cbx {
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  transform: scale(1);
  vertical-align: middle;
  border: 2px solid #22c55e;
  transition: all 0.2s ease;
}
.cbx .error {
  border: 2px solid #ff3e2d !important;
}
.cbx span:first-child svg {
  position: absolute;
  z-index: 1;
  top: 6px;
  left: 5px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
  border-color: #22c55e;
}
.cbx span:first-child::before {
  content: "";
  width: 100%;
  height: 100%;
  background: #22c55e;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
  transition-delay: 0.2s;
}
.cbx span:last-child {
  margin-left: 16px;
}

.cbx:hover span:first-child {
  border-color: #22c55e;
}

.inp-cbx:checked + .cbx span:first-child {
  border-color: #22c55e;
  background: #22c55e;
}
.inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.inp-cbx:checked + .cbx span:first-child::before {
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.6s ease;
}
.inp-cbx:checked + .cbx span:last-child {
  color: #626469;
  transition: all 0.3s ease;
}
.inp-cbx:checked + .cbx span:last-child::after {
  transform: scaleX(1);
  transition: all 0.3s ease;
}
</style>
