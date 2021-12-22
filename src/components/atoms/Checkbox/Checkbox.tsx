import React, { useState } from "react";
import THEME from "utils/theme";
import { TextSmall } from "../Typography/Text";
import {
	StyledCheckboxContainer,
	StyledCheckboxElement,
} from "./Checkbox.style";

function Checkbox(props: ICheckboxProps) {
	const [checked, setChecked] = useState(props.checked);
	return (
		<StyledCheckboxContainer>
			{!checked ? (
				<svg
					style={{
						pointerEvents: "none",
					}}
					width="1.5rem"
					height="1.5rem"
					viewBox="0 0 24 24"
				>
					<path
						fill={THEME.colors.black}
						d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
					></path>
				</svg>
			) : (
				<svg
					width="1.5rem"
					height="1.5rem"
					style={{ pointerEvents: "none" }}
					viewBox="0 0 24 24"
				>
					<path
						fill={THEME.colors.black}
						d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
					></path>
				</svg>
			)}
			<StyledCheckboxElement
				onClick={(e) => {
					setChecked(!checked);
					props.onChange(e);
				}}
				checked={checked}
				name={props.name}
				type="checkbox"
			/>
			<TextSmall>{props.displayValue}</TextSmall>
		</StyledCheckboxContainer>
	);
}

export default Checkbox;

interface ICheckboxProps {
	checked?: boolean;
	onChange: Function;
	name: string;
	displayValue: string;
}
