import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}
	//TODO an dieser Stelle etwas dynamisches eintragen, führt aber dazu, dass die Button auf der Index wieder alle gesehen werden können
	body {
		margin: 80px;
	}
`;
