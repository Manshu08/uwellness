import styled from "styled-components";
import gradint1 from "assets/gradiente.png";
import gradint2 from "assets/gradiente2@2x.png";
import gradint3 from "assets/gradiente2-1@2x.png";

export const StyledLandingMainComponent = styled.div`
	width: 100vw;
	overflow: hidden;
	background-color: ${(props) => props.theme.colors.thunder};
`;

export const StyledFirstSection = styled.div`
	width: 100%;
	background: url(${() => gradint1});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const StyledLandingComponent = styled.div`
	display: flex;
	padding: 2rem 6rem;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1rem;
	}
	@media (max-width: 600px) {
		padding: 2rem 2rem;
	}
`;

export const StyledLeftLandingSection = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 10rem;
	position: relative;
	z-index: 100;
	@media (max-width: 890px) {
		gap: 3rem;
	}
	@media (max-width: 768px) {
		width: auto;
		padding-left: 1rem;
		gap: 1rem;
	}
	@media (max-width: 500px) {
		padding-top: 5rem;
	}
`;

export const StyledRightLandingSection = styled.img`
	width: 100%;
	position: relative;
	z-index: 100;
`;

export const StyledRightLandingBack = styled.div`
	width: 60%;
	position: relative;
	@media (max-width: 768px) {
		position: absolute;
		z-index: 10;
		width: 80%;
		opacity: 0.3;
	}
	&::after {
		content: "";
		z-index: 10;
		position: absolute;
		left: 53%;
		top: 55%;
		transform: translate(-50%, -50%);
		border-radius: 100%;
		width: 80%;
		height: 85%;
		background: linear-gradient(
			to top,
			transparent 30%,
			${(props) => props.theme.colors.redRibbon}
		);
	}
`;

export const StyledTextMain = styled.div`
	text-align: left;
	font-family: "Google Sans", Roboto, Arial, sans-serif;
	font-size: 3.8rem;
	font-weight: bold;
	letter-spacing: 0px;
	color: #ffffff;
	text-transform: uppercase;
	@media (max-width: 412px) {
		font-size: 3rem;
	}
`;

export const StyledColor = styled.span`
	color: ${(props) => props.theme.colors.redRibbon};
`;

export const StyledSpecialText = styled.div`
	text-align: left;
	font-size: 1.2rem;
	font-family: "Raleway", sans-serif;
	padding: 1rem;
	color: #ffffff;
	padding-left: 0;
	line-height: 1.5rem;
	@media (max-width: 800px) {
		font-size: 1.1rem;
	}
`;

export const StyledSecondSection = styled.div`
	width: 100%;
	background: url(${() => gradint2});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const StyledThirdSection = styled.div`
	width: 100%;
	background: url(${() => gradint3});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const StyledspecialButton = styled.div`
	padding: 0.6rem 0.6rem;
	margin-botton: 0.5rem;
	font-size: 1.2rem;
	color: white;
	border: none;
	outline: none;
	width: 14rem;
	background: ${(props) => props.theme.colors.redRibbon};
	cursor: pointer;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	font-family: sans-serif;
	align-items: center;
	&:active {
		background: ${(props) => props.theme.colors.red};
	}
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const StyledUpbar = styled.div`
	width: 4rem;
	height: 4rem;
	border-radius: 4rem;
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.redRibbon};
`;
