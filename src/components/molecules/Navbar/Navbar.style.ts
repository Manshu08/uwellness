import styled from "styled-components";

export const StyledNavbarMainComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.6rem 3rem;
	@media (max-width: 768px) {
		padding: 0.5rem;
	}
`;

export const StyledNavbarLogo = styled.img`
	height: 40px;
`;

export const StyledLeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 2.5rem;
	justify-content: space-between;

	@media (max-width: 768px) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		justify-content: space-evenly;
		z-index: 101;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.thunder};
	}
	&::before {
		content: "";
		width: 100px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 0;
		/* background-color: white; */
		@media (max-width: 768px) {
			display: block;
		}
	}
`;

export const StyledPointer = styled.div`
	cursor: pointer;
`;

export const StyledNavbarText = styled.div`
	font-size: 1.25rem;
	font-weight: 300;
	font-family: "Raleway", sans-serif;
	color: #ffffff;
`;

export const StyledNavbutton = styled.button`
	width: 100% !important;
	padding: 0.5rem 0.7rem;
	font-size: 1.3rem;
	color: white;
	font-family: "Nunito", sans-serif;
	outline: none;
	border: 2px solid white;
	background: transparent;
	cursor: pointer;
	border-radius: 100px;
`;
