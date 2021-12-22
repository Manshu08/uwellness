import styled from "styled-components";

export const StyledInputTextFieldContainer = styled.div`
	position: relative;
	width: 100%;
	height: 2rem;
`;

export const StyledInputLabel = styled.label`
	position: absolute;

	top: 70%;
	left: 0.8rem;
	padding: 0 0.3rem;
	transform: translate(0, -50%);
	transition: all 0.3s ease;
	text-transform: capitalize;
	background-color: white;
	pointer-events: none;
`;

export const StyledInputTextField = styled.input<{
	fontSize?: string;
	color: string;
	bordercolor?: string;
}>`
	height: 3rem;
	width: 100%;
	font-size: ${(props) => props.fontSize};
	color: ${(props) => props.color};
	border: none;
	border: 2px solid ${(props) => props.theme.colors.black};
	outline: none;
	padding: 0.8rem 0.8rem;
	background: transparent;
	border-radius: 5px;
	&:focus + label,
	&:valid + label {
		color: ${(props) =>
			props.bordercolor ? props.bordercolor : props.theme.colors.black};
		top: 0;
	}
	&:focus {
		border: 1px solid
			${(props) =>
				props.bordercolor ? props.bordercolor : props.theme.colors.black};
	}
`;
