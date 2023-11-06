import { ComboBox } from "./comboBox";

const topFilms = [{ title: "kim", year: 1993 }];

const abc = [
  {
    year: 1234,
  },
];

export default {
  title: "comboBox",
  component: ComboBox,
  args: {
    aa: topFilms,
    id: abc,
    bb: asdf,
  },
};

const Template = (args) => <ComboBox {...args} />;

export const Default = Template.bind({});
