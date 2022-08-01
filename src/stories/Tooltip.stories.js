import Tooltip from "../components/Tooltip/Tooltip";

export default {
	title: "Tooltip",
	component: Tooltip,
};

const Template = (args) => (
	<Tooltip {...args}>
		<p>Random Text</p>
	</Tooltip>
);

export const Default = Template.bind({});
Default.args = {
	tooltipText: "I am a tooltip",
};
