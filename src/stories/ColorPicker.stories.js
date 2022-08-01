import ColorPicker from "../components/ColorPicker/ColorPicker";

export default {
	title: "Color Picker",
	component: ColorPicker,
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
	setSelectedColor: () => {},
};
