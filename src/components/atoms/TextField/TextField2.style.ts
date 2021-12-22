import styled from "styled-components";

export const StyledInputTextField2Container = styled.div`
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
`;

export const StyledInputLabel2 = styled.label`
	color: white;
	pointer-events: none;
	text-transform: capitalize;
	font-family: "Raleway", sans-serif;
	padding-bottom: 10px;
`;

export const StyledInputTextField2 = styled.input<{
	fontSize?: string;
	color: string;
	bordercolor?: string;
}>`
	font-size: 1.1rem;
	color: white;
	border: none;
	border: 0.5px solid ${(props) => props.theme.colors.white};
	outline: none;
	padding: 10px 0px;
	padding-left: 0.5rem;
	font-family: "Raleway", sans-serif;
	background: transparent;
	border-radius: 5px;
	margin-top: 0.5rem;
`;
