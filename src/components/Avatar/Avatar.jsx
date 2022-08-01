import PropTypes from "prop-types";
import styled from "styled-components";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR } from "../../constants/theme";
import { formatName } from "./helpers";

const Avatar = ({ name }) => (
	<AvatarContainer>
		<span>{formatName(name)}</span>
	</AvatarContainer>
);

const AvatarContainer = styled.div`
	background-color: ${MAIN_BACKGROUND_COLOR};
	color: ${MAIN_COLOR};
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Avatar;
