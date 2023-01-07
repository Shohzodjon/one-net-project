<template>
  <div class="aspect-ratio-image">
    <div
      class="aspect-ratio-image__wrapper"
      :class="ratioClass"
      :style="{ 'padding-top': ratioPercent }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AspectRatioImage",
  props: {
    ratio: {
      type: Number,
      default: 3 / 4,
    },
    ratioClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    ratioPercent() {
      return this.ratio * 100 + "%";
    },
  },
};
</script>

<style>
.aspect-ratio-image__wrapper {
  position: relative;
}
.aspect-ratio-image__wrapper > * {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
