import { StyledSpecialText } from "pages/Landing/Landing.style";
import React from "react";
import {
	StyledCardwithtiltedImage,
	StyledLeftSectionImage,
	StyledRightCustomText,
	StyledRightSectionText,
} from "./CardwithtiltedImage.style";

function CardwithtiltedImage(props: iCardWithTitle) {
	return (
		<StyledCardwithtiltedImage isReversed={props.right ? true : false}>
			<StyledLeftSectionImage src={props.img} />
			<StyledRightSectionText isReversed={props.right ? true : false}>
				<StyledRightCustomText color="white">
					{props.mainText}
				</StyledRightCustomText>

				<StyledSpecialText color="white">{props.subText}</StyledSpecialText>
			</StyledRightSectionText>
		</StyledCardwithtiltedImage>
	);
}

export default CardwithtiltedImage;

interface iCardWithTitle {
	img: any;
	mainText: any;
	subText: any;
	right?: boolean;
}
