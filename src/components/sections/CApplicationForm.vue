<template>
  <div class="bg-darkBg mt-3 md:mt-0 py-8 md:py-16 relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-1">
      <h2 class="section-title text-white mb-10" data-aos="fade-up">
        {{ $t("submit_your_application") }}
      </h2>
      <form @submit.prevent="submitForm" class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 md:col-span-4 gap-5 flex flex-col sm:flex-row md:flex-col"
        >
          <CInput
            data-aos="fade-up"
            v-model="form.name"
            type="text"
            label="name"
            placeholder="enter_your_name"
            :error="$v.name.$error"
            is-dark
          />
          <CInput
            data-aos="fade-up"
            v-model="form.phone_number"
            is-dark
            placeholder="__ ___ __ __"
            label="phone_number"
            type="phone"
            :error="$v.phone_number.$error"
          >
            <template #prefix>
              <span class="text-white text-base text-140 font-normal mr-1">
                +998
              </span>
            </template>
          </CInput>
        </div>
        <div class="col-span-12 md:col-span-8" data-aos="fade-up">
          <label class="text-xl font-medium leading-130 text-white" for="">
            {{ $t("enter_text") }}
          </label>
          <div class="w-full relative !h-40 md:h-auto textarea-block mt-2">
            <textarea
              maxlength="200"
              v-model="form.text"
              class="px-4 py-3 text-base text-140 font-normal placeholder:text-opacity-40 text-white resize-none w-full !h-full outline-none bg-white bg-opacity-10 border rounded-xl backdrop-blur-[10px] border-white border-opacity-20 hover:border-opacity-75 focus:border-opacity-75 transition duration-300"
              :placeholder="$t('enter_application_text')"
              :class="{
                '!border-mainColor': $v.text.$error,
              }"
            />
            <p
              class="absolute right-3 bottom-3 text-sm leading-140 text-white text-opacity-40"
            >
              {{ form.text.length }}/200
            </p>
          </div>
        </div>
        <div class="hidden sm:block sm:col-span-6 md:col-span-9" />
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <SButton
            data-aos="fade-up"
            class="w-full py-2.5"
            type="submit"
            context="send_application"
          />
        </div>
      </form>
    </div>
    <img
      class="w-[552px] h-[552px] blur-[111px] absolute z-0 bottom-[220px] -right-[201px] pointer-events-none"
      src="/src/assets/img/rocket.png"
      alt=""
    />
    <img
      class="w-[552px] h-[552px] blur-[111px] absolute z-0 top-[213px] -left-[315px] pointer-events-none"
      src="/src/assets/img/rocket.png"
      alt=""
    />
  </div>
</template>
<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";
import CInput from "@/components/Form/Input/CInput.vue";
import { $axios } from "@/utils/axios";
import SButton from "@/stories/main-button/SButton.vue";
import { useReCaptcha } from "vue-recaptcha-v3";

const recaptchaUse = useReCaptcha();
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
const { executeRecaptcha, recaptchaLoaded } = recaptchaUse;
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
      await recaptchaLoaded();
      const token = await executeRecaptcha("login");

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
@media screen and (min-width: 768px) {
  .textarea-block {
    height: calc(100% - 32px) !important;
  }
}
</style>
