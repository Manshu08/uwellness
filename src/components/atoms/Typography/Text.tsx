import styled from "styled-components";
import DynamicComponent from "./DynamicComponent";
import {
	ExtraLargeStyle,
	LargeStyle,
	MediumStyle,
	SmallStyle,
} from "./typography.style";

export const TextMedium = styled(DynamicComponent)`
	${MediumStyle}
	font-family: Montserrat;
	color: ${(props) => props.color}; /* add media query for font-sizes */
`;

export const TextLarge = styled(DynamicComponent)`
	${LargeStyle}
	font-family: Montserrat;
	color: ${(props) => props.color}; /* add media query for font-sizes */
`;

export const TextSmall = styled(DynamicComponent)`
	${SmallStyle}
	font: normal normal 300 25px/30px Adobe Clean;
	font-weight: 300 !important;
	color: ${(props) => props.color};
`;

export const TextExtraLarge = styled(DynamicComponent)`
	${ExtraLargeStyle}
	font-family: Montserrat;
	font-weight: bold;
	color: ${(props) => props.color}; /* add media query for font-sizes */
`;
