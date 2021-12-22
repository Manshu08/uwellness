import React from "react";
import SearchIcon from "../icons/SearchIcon";
import {
	StyledSearchInputContainer,
	StyledSearchInputElement,
} from "./SearchInput.style";

function SearchInput() {
	return (
		<StyledSearchInputContainer>
			<StyledSearchInputElement placeholder="Search" type="input" />
			<SearchIcon />
		</StyledSearchInputContainer>
	);
}

export default SearchInput;
