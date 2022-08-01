import PropTypes from "prop-types";
import styled from "styled-components";
import { MAIN_BACKGROUND_COLOR, MAIN_COLOR } from "../../constants/theme";

const Button = ({ label, onClick }) => (
	<StyledButton onClick={onClick}>{label}</StyledButton>
);

const StyledButton = styled.button`
	padding: 10px 20px;
	background-color: ${MAIN_BACKGROUND_COLOR};
	color: ${MAIN_COLOR};
	border: none;
	border-radius: 5px;
	font-weight: bold;
`;

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
