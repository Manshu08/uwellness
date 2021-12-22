import styled from "styled-components";

export const StyledDropdownlabel = styled.div<{ isActive: boolean }>`
	position: absolute;
	left: 0;
	top: ${(props) => (props.isActive ? 0 : "-1rem")};
	font-size: ${(props) => (props.isActive ? "1rem" : "0.8rem")};
	color: ${(props) => (props.isActive ? "black" : props.theme.colors.blue)};
`;

export const StyledDropdownmain = styled.div`
	position: relative;
	margin-top: 1rem;
`;

export const StyledDropdownDisplay = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	border-bottom: 1px solid black;
	padding-bottom: 3px;
`;

export const StyledSelect = styled.div`
	width: 100%;
	padding: 0.5rem;
	&:hover {
		background-color: ${(props) => props.theme.colors.grayLight};
	}
`;

export const StyledDropdownselectcontent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	max-height: 10rem;
	overflow: auto;
	background-color: white;
	border-radius: 5px;
	cursor: pointer;
	z-index: 100;
	box-shadow: 10px 10px 10px ${(props) => props.theme.colors.blackwithOpacity10};
`;

export const StyledDropdownValue = styled.div``;
