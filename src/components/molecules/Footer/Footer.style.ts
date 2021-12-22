import styled from "styled-components";

export const StyledFooterComponent = styled.div`
	display: flex;
	margin: 0 3rem;
	padding: 1rem 2rem;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid white;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0;
		gap: 1rem;
	}
`;

export const StyledFooterLogo = styled.img`
	height: 40px;
`;

export const StyledFooterText = styled.div`
	font-size: 1.25rem;
	font-weight: 300;
	letter-spacing: 0.01rem;
	font-family: "Raleway", sans-serif;
	color: white;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
