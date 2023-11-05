import ComboBox from "./comboBox";

export default {
  title: "top100Anime",
  component: ComboBox,
};

const Template = (args) => <ComboBox {...args} />;

export const AnimeComboBox = Template.bind({});

AnimeComboBox.args = {
  label: [],
  year: "2023",
};
