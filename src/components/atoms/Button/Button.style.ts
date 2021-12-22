import styled from "styled-components";

export const StyledInputButtonContainer = styled.div<{ width?: string }>`
	position: relative;
	width: ${(props) => props.width};
`;

export const StyledInputButton = styled.button<{
	fontSize?: string;
	color?: string;
	backgroundColor?: string;
	ClickColor?: string;
	border?: string;
}>`
	width: 18rem;
	padding: 0.8rem;
	margin-botton: 0.5rem;
	font-size: 1.2rem;
	color: ${(props) => props.color};
	border: none;
	outline: none;
	font-weight: bold;
	border: ${(props) => (props.border ? "1px" : "0px")} solid white;
	background: ${(props) =>
		props.backgroundColor ? props.backgroundColor : props.theme.colors.blue};
	cursor: pointer;
	border-radius: 100px;

	&:active {
		background: ${(props) =>
			props.ClickColor ? props.ClickColor : props.theme.colors.Malibu};
	}
`;
