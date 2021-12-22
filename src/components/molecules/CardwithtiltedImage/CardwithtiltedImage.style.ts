import styled from "styled-components";

export const StyledCardwithtiltedImage = styled.div<{ isReversed: boolean }>`
	display: flex;
	padding: 10rem 6rem;
	padding-bottom: 0rem;
	flex-direction: ${(props) => (props.isReversed ? "row-reverse " : "row")};
	@media (max-width: 890px) {
		flex-direction: column;
		padding: 4rem 2rem;
	}
`;

export const StyledLeftSectionImage = styled.img`
	width: 50%;
	height: 67vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 890px) {
		width: 100%;
		height: 50vh;
		padding-left: 2.5vw;
		padding-right: 2.5vw;
	}
`;

export const StyledRightSectionText = styled.div<{ isReversed?: boolean }>`
	width: 50%;
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	padding-top: 7rem;

	padding-left: ${(props) => (props.isReversed ? "0rem" : "5rem")};
	flex-direction: column;
	@media (max-width: 890px) {
		width: 100%;
		justify-content: flex-start;
		padding-top: 2rem;
		padding-left: 2.5vw;
	}
`;

export const StyledRightCustomText = styled.div`
	color: white;
	font-family: "Google Sans", Roboto, Arial, sans-serif;
	font-size: 3rem;
	font-weight: bold;
	letter-spacing: 0px;
	color: #ffffff;
	text-transform: uppercase;
	@media (max-width: 890px) {
		width: 100%;
		font-size: 2.5rem;
	}
`;
