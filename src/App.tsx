import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./routes";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif, monospace;
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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                </Routes>
            </BrowserRouter>
        </>
	);
};
