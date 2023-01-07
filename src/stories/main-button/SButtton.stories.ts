import { Story } from "@storybook/vue3";

import SButton, { Props } from "./SButton.vue";

export default {
  title: "SButton",
  components: SButton,
};

const Template: Story<Props> = (args) => ({
  components: { SButton },
  setup() {
    return { args };
  },
  template: '<SButton v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  context: "Button",
};
