<template>
  <button
    :type="type"
    class="btn rounded-xl text-center font-medium text-white overflow-hidden flex items-center justify-center"
    @click="onClick"
  >
    <span class="relative z-20">{{ $t(context) }}</span>
    <slot class="relative z-20" />
  </button>
</template>
<script lang="ts" setup>
interface Props {
  context: string;
  type: "submit" | "button" | "reset";
}

interface Emits {
  (e: "click"): void;
}
const emit = defineEmits<Emits>();
const onClick = () => {
  emit("click");
};

withDefaults(defineProps<Props>(), {});
</script>
<style scoped>
.btn {
  position: relative;
  background: #ff3e2d;
}

.btn::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  display: block;
  height: 100%;
  z-index: 1;
  opacity: 1;
  transition: opacity 0.4s linear;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ff3e2d;
}
.btn:hover::after {
  opacity: 0;
}
</style>
