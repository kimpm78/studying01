import { ComboBox } from "./comboBox";

export default {
  title: "comboBox",
  component: ComboBox,
  args: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
};

const Template = (args) => <ComboBox {...args} />;

export const Default = Template.bind({});
