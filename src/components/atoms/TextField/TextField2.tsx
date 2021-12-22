import React, { ChangeEventHandler } from "react";
import THEME from "utils/theme";
import {
	StyledInputLabel2,
	StyledInputTextField2,
	StyledInputTextField2Container,
} from "./TextField2.style";

function TextField2(props: ipropsTextField2) {
	return (
		<>
			<StyledInputTextField2Container>
				<StyledInputLabel2>{props.label}</StyledInputLabel2>
				<StyledInputTextField2
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
					onChange={props.onChange}
				/>
			</StyledInputTextField2Container>
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

export default TextField2;

interface ipropsTextField2 {
	width?: string;
	id?: string;
	color?: string;
	backgroundColor?: string;
	fontSize?: string;
	required?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
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
