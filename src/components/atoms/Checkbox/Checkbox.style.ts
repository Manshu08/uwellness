import styled from "styled-components";

export const StyledCheckboxElement = styled.input`
	width: 1.5rem;
	height: 1.5rem;
	opacity: 0;
	position: absolute;
	left: 0;
	cursor: pointer;
	z-index: 1;
`;

export const StyledCheckboxContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.3rem;
`;
