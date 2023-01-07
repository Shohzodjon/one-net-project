<template>
  <div class="block w-full">
    <label
      :for="`a-input-${id}`"
      class="mb-2 flex items-end justify-between"
      v-if="label"
    >
      <span
        class="text-xl font-medium leading-130"
        :class="isDark ? 'text-white' : 'text-darkColor'"
      >
        {{ $t(label) }}
      </span>
      <span
        v-if="error && errorLabel"
        class="text-mainColor text-xs leading-4 font-semibold transition duration-300 text-right"
      >
        {{ $t(errorLabel) }}
      </span>
    </label>
    <div
      class="outline-none border bg-opacity-10 px-4 py-3 backdrop-blur-[10px] rounded-lg flex items-center transition-all duration-300"
      :class="[
        { '!border-mainColor': error },
        isDark
          ? 'bg-white border-white border-opacity-20 hover:border-opacity-75 focus-within:border-opacity-75'
          : 'bg-[#AEAEAE] border-[#E7E7E8] hover:border-[#363130] focus-within:border-[#363130]',
        inputClass,
      ]"
    >
      <slot name="prefix" />
      <input
        :value="modelValue"
        :autocomplete="autocomplete"
        :id="`a-input-${id}`"
        :type="type === 'phone' ? 'text' : type"
        v-bind="{ minlength, maxlength, max, min }"
        v-maska="type === 'phone' ? '## ### ## ##' : maska ?? null"
        :class="[
          'outline-none w-full bg-transparent text-base text-140 font-normal placeholder:text-opacity-40',
          isDark ? 'text-white' : 'text-darkColor',
          inputStyle,
        ]"
        :placeholder="$t(placeholder)"
        @input="handleInput"
        @blur="handleBlur"
      />
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: string;
  placeholder?: string;
  modelValue: any;
  error?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
  inputClass?: string;
  label?: string;
  errorLabel?: string;
  inputStyle?: string;
  optional?: boolean;
  autocomplete?: string;
  maska?: string;
  isDark: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "text",
  maxlength: 100,
  minlength: undefined,
  string: "on",
  max: undefined,
  min: undefined,
  inputStyle: undefined,
  inputClass: undefined,
  isDark: false,
});

const id = computed(() => {
  return Math.floor(Math.random() * 101);
});
const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
  (e: "blur", value: Event): void;
}>();

const handleInput = (e: any) => {
  emit("update:modelValue", e.target.value);
};
const handleBlur = (e: Event) => {
  emit("blur", e);
};
</script>
