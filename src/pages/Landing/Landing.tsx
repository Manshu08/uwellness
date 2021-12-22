import Navbar from "components/molecules/Navbar";
import React, { useRef, useState } from "react";

import mobileis from "assets/phonecustom.png";
import {
	StyledColor,
	StyledFirstSection,
	StyledLandingComponent,
	StyledLandingMainComponent,
	StyledLeftLandingSection,
	StyledRightLandingBack,
	StyledRightLandingSection,
	StyledSecondSection,
	StyledspecialButton,
	StyledSpecialText,
	StyledTextMain,
	StyledThirdSection,
	StyledUpbar,
} from "./Landing.style";
import CardwithtiltedImage from "components/molecules/CardwithtiltedImage";
import str1 from "assets/streaming@2x.png";
import str2 from "assets/streaming2@2x.png";
import str3 from "assets/streaming3@2x.png";

import Footer from "components/molecules/Footer";

import swal from "sweetalert";

import {
	StyledLandingAddressLeft,
	StyledLandingAddressRight,
	StyledLandingAddressRightColor,
	StyledLandingFormInner,
	StyledLandingFormInnerHeading,
	StyledLandingFormLeft,
	StyledLandingFormLeftAddress,
	StyledLandingFormLeftHeading,
	StyledLandingFormLeftText,
	StyledLandingFormMainComponent,
	StyledLandingFormRight,
	StyledLandingFormLeftTextSmall,
} from "../../components/molecules/LandingPageForm/LandingPageForm.style";

import icon from "assets/Grupo 9.png";
import TextField2 from "components/atoms/TextField/TextField2";
import { StyledInputLabel2 } from "components/atoms/TextField/TextField2.style";
import Button from "components/atoms/Button";
import THEME from "utils/theme";
import axiosInstance from "utils/axios";
import { APIS } from "utils/Apis";
import useWindowDimensions from "components/Customhooks/Windowwidth";
function Landing() {
	const myRef = useRef<any>(null);
	const myRef2 = useRef<any>(null);
	const scrolltoform = () => {
		myRef.current.scrollIntoView();
	};

	const scrollTop = () => {
		myRef2.current.scrollIntoView();
	};

	const { width } = useWindowDimensions();
	const [userDetails, setUserDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		cellphone: "",
		uType: "Future Member",
	});
	const onChange = (e) => {
		setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
	};
	const submitForm = () => {
		if (
			!userDetails.firstName ||
			!userDetails.lastName ||
			!userDetails.email ||
			!userDetails.cellphone
		) {
			swal("Error", "All the field are not filled", "error");
			return;
		}
		axiosInstance
			.post(APIS._submitForm, userDetails)
			.then((data: any) => {
				swal("Good job!", "Your data is inserted", "success");
				setUserDetails({
					firstName: "",
					lastName: "",
					email: "",
					cellphone: "",
					uType: "",
				});
			})
			.catch((error: any) => {
				swal("Error", "Error occurred try again", "error");
				setUserDetails({
					firstName: "",
					lastName: "",
					email: "",
					cellphone: "",
					uType: "",
				});
			});
	};
	return (
		<StyledLandingMainComponent>
			<StyledFirstSection ref={myRef2}>
				<Navbar onscroll={scrolltoform} />
				<StyledLandingComponent>
					<StyledLeftLandingSection>
						<StyledTextMain>
							<StyledColor>Live </StyledColor>
							Your
							<br /> Best Life
						</StyledTextMain>
						<StyledSpecialText>
							A community that inspires individuals to be the best
							<br /> versions of themselves.
						</StyledSpecialText>

						<StyledspecialButton onClick={scrolltoform}>
							GET STARTED
						</StyledspecialButton>
					</StyledLeftLandingSection>
					<StyledRightLandingBack>
						<StyledRightLandingSection
							src={mobileis}
						></StyledRightLandingSection>
					</StyledRightLandingBack>
				</StyledLandingComponent>
			</StyledFirstSection>
			<StyledSecondSection>
				<CardwithtiltedImage
					img={str1}
					mainText="Fitness"
					subText="Your goal is to take your body to its best potential. Learn from fitness professionals new workouts from the of your surroundings."
				/>
				<CardwithtiltedImage
					img={str2}
					right={true}
					mainText="Nutrition"
					subText="Your goal is to take your nutritional health seriously. Learn new ways from our experts to take the stress out of cooking."
				/>
			</StyledSecondSection>
			<StyledThirdSection>
				<CardwithtiltedImage
					img={str3}
					mainText="Mental Well Being"
					subText="Do you want to take back the reigns on your life? Our Coaches will help you reduce stress and refocus your mindset."
				/>
				<StyledLandingFormMainComponent>
					<StyledLandingFormLeft>
						<StyledLandingFormLeftHeading>
							We can't spell
							<br /> UniteWellness <br />
							without U
						</StyledLandingFormLeftHeading>
						<StyledLandingFormLeftText>
							We're excited to get to know you. Please fill out your <br />{" "}
							information to receive updates on our products and
							<br /> services.
						</StyledLandingFormLeftText>
						{width > 768 && (
							<StyledLandingFormLeftAddress>
								<StyledLandingAddressLeft src={icon} />
								<StyledLandingAddressRight>
									<StyledLandingAddressRightColor>
										Address
									</StyledLandingAddressRightColor>
									<StyledLandingFormLeftTextSmall color="white">
										Menlo Park, California
									</StyledLandingFormLeftTextSmall>
								</StyledLandingAddressRight>
							</StyledLandingFormLeftAddress>
						)}
					</StyledLandingFormLeft>
					<StyledLandingFormRight>
						<StyledLandingFormInner ref={myRef}>
							<StyledLandingFormInnerHeading>
								Future Member or Coach
							</StyledLandingFormInnerHeading>
							<TextField2
								onChange={onChange}
								value={userDetails.firstName}
								id="firstName"
								label="First Name"
							/>
							<TextField2
								onChange={onChange}
								value={userDetails.lastName}
								label="Last Name"
								id="lastName"
							/>
							<TextField2
								onChange={onChange}
								value={userDetails.email}
								label="Email Address"
								id="email"
							/>
							<TextField2
								onChange={onChange}
								value={userDetails.cellphone}
								label="Cellphone"
								id="cellphone"
							/>
							<div
								style={{
									paddingTop: "1rem",
									display: "flex",
									flexDirection: "column",
									gap: "1rem",
								}}
							>
								<StyledInputLabel2>
									"Future Member" or "Future Coach"
								</StyledInputLabel2>
								<select
									style={{
										backgroundColor: "transparent",
										outline: "none",
										borderRadius: "5px",
										padding: "10px 0",
										color: "white",
										border: "1px solid white",
										fontSize: "1rem",
									}}
									name="cars"
									id="uType"
									onChange={onChange}
								>
									<option value="Future Member">Member</option>
									<option value="Future Coach">Coach</option>
								</select>
							</div>
							<div onClick={submitForm} style={{ paddingTop: "1rem" }}>
								<Button backgroundColor={THEME.colors.redRibbon}>SEND</Button>
							</div>
						</StyledLandingFormInner>
					</StyledLandingFormRight>
					{width <= 768 && (
						<StyledLandingFormLeftAddress>
							<StyledLandingAddressLeft src={icon} />
							<StyledLandingAddressRight>
								<StyledLandingAddressRightColor>
									Address
								</StyledLandingAddressRightColor>
								<StyledLandingFormLeftTextSmall color="white">
									Menlo Park, California
								</StyledLandingFormLeftTextSmall>
							</StyledLandingAddressRight>
						</StyledLandingFormLeftAddress>
					)}
				</StyledLandingFormMainComponent>
				<Footer />
			</StyledThirdSection>
			<StyledUpbar onClick={scrollTop}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="2rem"
					viewBox="0 0 60 60"
				>
					<path
						fill="#fff"
						d="M1.69482,44.71924L30,17.39014l28.30518,27.3291C58.49951,44.90674,58.75,45,59,45	c0.26172,0,0.52295-0.10205,0.71924-0.30518c0.38379-0.39746,0.37256-1.03076-0.02441-1.41406l-29-28	c-0.3877-0.37402-1.00195-0.37402-1.38965,0l-29,28c-0.39697,0.3833-0.4082,1.0166-0.02441,1.41406	C0.66504,45.09277,1.29736,45.10352,1.69482,44.71924z"
					></path>
				</svg>
			</StyledUpbar>
		</StyledLandingMainComponent>
	);
}

export default Landing;
