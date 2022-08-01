import Toggle from "../components/Toggle/Toggle";

export default {
	title: "Toggle",
	component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
