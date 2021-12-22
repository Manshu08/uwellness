import React from "react";
import THEME from "utils/theme";

function MenuIcon(props: any) {
	return (
		<div
			style={{ cursor: "pointer" }}
			className={props.className}
			onClick={props.onClick}
		>
			<svg
				width="30"
				height="30"
				viewBox="0 0 26 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="reorder_24px">
					<path
						id="icon/action/reorder_24px"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3 7V5H21V7H3ZM3 11H21V9H3V11ZM21 15H3V13H21V15ZM21 19H3V17H21V19Z"
						fill={props.color ? props.color : THEME.colors.white}
						fill-opacity="1"
					/>
				</g>
			</svg>
		</div>
	);
}

export default MenuIcon;
