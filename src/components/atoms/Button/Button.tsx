import React from "react";
import { StyledInputButton, StyledInputButtonContainer } from "./Button.style";

function Button(props: ipropsbutton) {
	return (
		<StyledInputButtonContainer width={props.width ? props.width : "100%"}>
			<StyledInputButton
				id={props.id}
				color={props.color ? props.color : "white"}
				backgroundColor={props.backgroundColor}
				ClickColor={props.clickColor}
				fontSize={props.fontSize ? props.fontSize : "1rem"}
				border={props.border}
				// required={props.required}
				// onChange={props.onChange}
				// onClick={props.onClick}
				// onSubmit={props.onSubmit}
			>
				{props.label ? props.label : props.children ? props.children : ""}
			</StyledInputButton>
		</StyledInputButtonContainer>
	);
}

export default Button;

interface ipropsbutton {
	width?: string;
	id?: string;
	color?: string;
	clickColor?: string;
	backgroundColor?: string;
	fontSize?: string;
	required?: boolean;
	onChange?: Function;
	onClick?: Function;
	onSubmit?: Function;
	label?: string;
	border?: string;
	children?: string;
}
