import Avatar from "../components/Avatar/Avatar";

export default {
	title: "Avatar",
	component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	name: "Dom Pc",
};
