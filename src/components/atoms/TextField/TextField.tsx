import React from "react";
import THEME from "utils/theme";

import {
	StyledInputLabel,
	StyledInputTextField,
	StyledInputTextFieldContainer,
} from "./TextField.style";

function TextField(props: ipropstextfield) {
	return (
		<>
			<StyledInputTextFieldContainer>
				<StyledInputTextField
					type="text"
					id={props.id}
					placeholder={props.placeholder}
					value={props.value}
					color={props.color ? props.color : THEME.colors.black}
					bordercolor={
						props.bordercolor ? props.bordercolor : THEME.colors.black
					}
					fontSize={props.fontSize ? props.fontSize : "1rem"}
					required={props.required}
					// onChange={props.onChange}
				/>
				<StyledInputLabel>{props.label}</StyledInputLabel>
			</StyledInputTextFieldContainer>
			{props.error && (
				<div
					style={{
						paddingLeft: "10px",
						fontSize: ".7rem",
						color: THEME.colors.red,
					}}
				>
					{props.helperText}
				</div>
			)}
		</>
	);
}

export default TextField;

interface ipropstextfield {
	width?: string;
	id?: string;
	color?: string;
	backgroundColor?: string;
	fontSize?: string;
	required?: boolean;
	onChange?: Function;
	onClick?: Function;
	onSubmit?: Function;
	label?: string;
	children?: string;
	placeholder?: string;
	value?: string;
	bordercolor?: string;
	error?: boolean;
	helperText?: string;
	multiline?: boolean;
	rows?: string;
}
