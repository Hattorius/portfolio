import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: sans-serif, monospace;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
    }
`;

export const App = () => {
	return (
		<>
            <GlobalStyle />
            Hello World!
        </>
	);
};
