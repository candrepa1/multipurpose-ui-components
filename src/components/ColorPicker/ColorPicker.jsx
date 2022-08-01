import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { COLOR_PICKER_PALETTE } from "../../constants/theme";

const ColorPicker = ({ setSelectedColor }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openDropdown = () => setIsOpen(!isOpen);

	const selectColor = (color) => setSelectedColor(color.value);

	return (
		<DropDownContainer>
			<DropDownHeader onClick={openDropdown}>
				<span>Select...</span>
				<FontAwesomeIcon icon={faAngleDown} />
			</DropDownHeader>
			{isOpen && (
				<ColorPickerContainer>
					{COLOR_PICKER_PALETTE.map((color) => (
						<Color
							key={color.value}
							color={color.value}
							onClick={() => selectColor(color)}
						/>
					))}
				</ColorPickerContainer>
			)}
		</DropDownContainer>
	);
};

const DropDownContainer = styled.div`
	width: 332px;
`;

const DropDownHeader = styled.div`
	border: 1px solid black;
	padding: 8px;
	display: flex;
	justify-content: space-between;

	&:hover {
		cursor: pointer;
	}
`;

const ColorPickerContainer = styled.div`
	border: 1px solid black;
	width: 300px;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: 6px;
	padding: 15px;
`;

const Color = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		width: 18px;
		height: 18px;
		border: 1px solid black;
		cursor: pointer;
	}
`;

ColorPicker.propTypes = {
	setSelectedColor: PropTypes.func.isRequired,
};

export default ColorPicker;
