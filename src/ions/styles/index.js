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

	body {
		margin: 0;
		font-size: 1rem;
		display: flex;
		flex-wrap: wrap;
		padding-top: 3rem;
	}

	.add {
		position: relative;
		bottom: 1.5rem;
		background-color: #00798c;
		border: none;
		border-radius: 6px;
		padding: 0.5rem 1rem;
		color: #fff;
		font-size: 1.5rem;
		width: 100vw;
	}
	/*	.note {
		background-color: #fff;
		box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
		margin: 30px 20px;
		height: 400px;
		width: 400px;
	}

	.note .tools {
		background-color: #d1495b;
		display: flex;
		justify-content: flex-end;
		padding: 0.5rem;
	}

	.note .tools button {
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: 1rem;
		margin-left: 0.5rem;
	}

	.note textarea {
		justify-content: center;
		justify-items: center;
		outline: none;
		background-color: #edae49;
		font-family: inherit;
		font-size: 1.2rem;
		border: none;
		height: 400px;
		width: 100%;
		padding: 20px;
	}

	.hidden {
		display: none;
	}*/
`;
