import React, { cloneElement, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tooltip = ({ tooltipText, children }) => {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const handleMouseOver = () => setIsTooltipVisible(!isTooltipVisible);

	return (
		<>
			{isTooltipVisible && <p>{tooltipText}</p>}
			{cloneElement(children, { onMouseOver: handleMouseOver })}
		</>
	);
};

Tooltip.propTypes = {
	tooltipText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Tooltip;
