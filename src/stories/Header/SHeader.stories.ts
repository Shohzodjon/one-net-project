import { Story } from "@storybook/vue3";

import SHeader from "../Header/SHeader.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Layout",
  component: SHeader,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SHeader },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SHeader v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};
