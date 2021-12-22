import React from "react";
import logo from "assets/logo.png";
import { TextSmall } from "components/atoms/Typography/Text";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import { StyledNavbarText, StyledNavbutton } from "./Navbar.style";

function Navbar(props: any) {
	return (
		<div className="header">
			<Link className="icon" to="/">
				<img className="icon-element" src={logo} alt="" width="4rem" />
			</Link>

			<div className="nav">
				<div className="nav-box-icons"></div>
				<input className="nav-stter-box" type="checkbox"></input>
				<div className="nav-stter">
					<Link className="nav-items i--1" to="/">
						<StyledNavbarText> Fitness</StyledNavbarText>
					</Link>
					<Link className="nav-items i--1" to="/">
						<StyledNavbarText> Nutrition</StyledNavbarText>
					</Link>
					<Link className="nav-items i--2" to="/">
						<StyledNavbarText> Life Coaching</StyledNavbarText>
					</Link>
					<Link className="nav-items i--3" to="/">
						<StyledNavbutton onClick={props.onscroll}>
							GET STARTED
						</StyledNavbutton>
					</Link>
				</div>
				<div className="nav-selector-icons"></div>
			</div>
		</div>
	);
}

export default Navbar;
