import React, { useState } from "react";
import DropdownIcon from "components/atoms/icons/DropdownIcon";

import {
	StyledDropdownDisplay,
	StyledDropdownlabel,
	StyledDropdownmain,
	StyledDropdownselectcontent,
	StyledDropdownValue,
	StyledSelect,
} from "./Combobox.style";

function Combobox(props: IcomboboxDisplay) {
	const [selectionstate, setSelectionstate] = useState(false);
	const [value, setValue] = useState(props.displayValue ? true : false);
	const [displayValue, setDisplayValue] = useState(props.displayValue);
	return (
		<StyledDropdownmain>
			{selectionstate && (
				<StyledDropdownselectcontent
					onClick={() => {
						setSelectionstate(!selectionstate);
						setValue(true);
					}}
				>
					{!props.data
						? "Loading"
						: props.data.map((element: any, index: number) => {
								return (
									<StyledSelect
										id="categoryId"
										key={index}
										// value={element?.[props.internalValue]}
										// onClick={(e) => {
										// 	e.target.value = element?.[props.internalValue];
										// 	props.onChange(e);
										// 	setDisplayValue(element?.[props.displayName]);
										// }}
									>
										{element?.[props.displayName]}
									</StyledSelect>
								);
						  })}
				</StyledDropdownselectcontent>
			)}
			<StyledDropdownDisplay
				onClick={() => {
					setSelectionstate(!selectionstate);
				}}
			>
				<div className="flex flex-column">
					<StyledDropdownlabel isActive={!selectionstate && !value}>
						{props.label}
					</StyledDropdownlabel>
					<StyledDropdownValue>{displayValue}</StyledDropdownValue>
				</div>
				<DropdownIcon />
			</StyledDropdownDisplay>
		</StyledDropdownmain>
	);
}

export default Combobox;

interface IcomboboxDisplay {
	name: string;
	label: string;
	onChange: Function;
	value?: string;
	data: Array<any>;
	displayName: string;
	internalValue: string;
	displayValue?: string;
}
