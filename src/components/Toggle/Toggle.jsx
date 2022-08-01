import { useState } from "react";
import styled from "styled-components";
import {
	DISABLED_COLOR,
	MAIN_BACKGROUND_COLOR,
	MAIN_COLOR,
} from "../../constants/theme";

const Toggle = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => setToggle(!toggle);

	return (
		<ToggleContainer value={toggle} onClick={handleToggle}>
			<StyledToggle />
		</ToggleContainer>
	);
};

const ToggleContainer = styled.div`
	width: 60px;
	height: 25px;
	border-radius: 15px;
	padding: 3px;
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.value && "flex-end"};
	background-color: ${(props) =>
		props.value ? MAIN_BACKGROUND_COLOR : DISABLED_COLOR};
`;

const StyledToggle = styled.div`
	background-color: ${MAIN_COLOR};
	width: 40%;
	height: 22px;
	border-radius: 50%;
`;

export default Toggle;
