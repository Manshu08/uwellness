import styled from "styled-components";

export const StyledLandingFormMainComponent = styled.div`
	padding: 2rem 6rem;

	display: flex;
	padding-bottom: 8rem;
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		width: 95vw;
		padding: 2.5rem;
	}
`;

export const StyledLandingFormLeft = styled.div`
	width: 43%;
	padding-top: 10rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	@media (max-width: 768px) {
		width: 90%;
		padding: 2rem;
		padding-left: 0;
	}
`;

export const StyledLandingFormLeftHeading = styled.div`
	color: white;
	font-family: "Google Sans", Roboto, Arial, sans-serif;
	font-size: 3.2rem;
	font-weight: 600;
	@media (max-width: 600px) {
		width: 100%;
		padding: 2rem;
		padding-left: 0rem;
		font-size: 3rem;
	}
	@media (max-width: 375px) {
		width: 100%;
		padding: 2rem;
		padding-left: 0rem;
		font-size: 2.5rem;
	}
`;

export const StyledLandingFormLeftText = styled.div`
	padding-top: 1rem;
	font-size: 1.25rem;
	font-weight: 300;
	letter-spacing: 0.01rem;
	font-family: "Raleway", sans-serif;
	color: white;
	@media (max-width: 600px) {
		width: 100%;
		padding: 2rem;
		padding-left: 0rem;
		font-size: 1rem;
	}
`;

export const StyledLandingFormLeftTextSmall = styled.div`
	font-size: 1rem;
	font-weight: 300;
	font-family: "Raleway", sans-serif;
	color: #ffffff;
`;
export const StyledLandingFormLeftAddress = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 1rem 0.5rem;
	@media (max-width: 768px) {
		width: 100%;
		display: flex;
	}
`;

export const StyledLandingAddressLeft = styled.img`
	height: 5rem;
`;

export const StyledLandingAddressRight = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

export const StyledLandingAddressRightColor = styled.div`
	font-size: 1.3rem;
	font-family: sans-serif;
	font-weight: 600;
	color: ${(props) => props.theme.colors.redRibbon};
`;

export const StyledLandingFormRight = styled.div`
	width: 50%;
	display: flex;
	padding-left: 6.2rem;
	padding-top: 11rem;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		padding-left: 0;
		padding-top: 5rem;
		width: 90%;
	}
`;

export const StyledLandingFormInner = styled.div`
	width: 100%;
	border-radius: 15px;
	background-color: #312a2a;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const StyledLandingFormInnerHeading = styled.div`
	font-size: 1.7rem;
	font-weight: 550;
	font-family: sans-serif;
	color: #ffffff;
`;
