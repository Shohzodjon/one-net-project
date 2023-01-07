import { Story } from "@storybook/vue3";
import STarifs from "./STarifs.vue";

export default {
  title: "Cards",
  component: STarifs,
};

const Template: Story = (args) => ({
  components: { STarifs },
  setup() {
    return { args };
  },
  template: '<STarifs v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};
