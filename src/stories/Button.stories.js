import Button from "../components/Button/Button";

export default {
	title: "Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Submit",
	onClick: () => {},
};
