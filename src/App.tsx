import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Contents } from "./components/Contents";
import { Console } from "./components/Console";
import { Navbar } from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Fira Code', sans-serif, monospace;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
    }
    .active {
        color: #fefefe;
    }
`;

const Wrapper = styled.div`
	background: #020B0D;
    width: 100%;
    min-height: 100vh;
`;

const Center = styled.div`
	max-width: 900px;
	width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

if (window.location.pathname.split('/')[1]) {
    var currentPath = window.location.pathname.split('/')[1];
} else {
    var currentPath = 'aboutme.md';
}

export const App = () => {
    const [currentPage, setCurrentPage] = useState(currentPath);
    const [currentPageContents, setCurrentPageContents] = useState('');

    const goToPage = (page: string) => {
        setCurrentPage(page);
        console.log("Go to page",page);
    }

	return (
		<Wrapper>
			<Center>
                <Navbar goToHandler={goToPage} currentPage={currentPage}/>
                <Console goToHandler={goToPage} currentPage={currentPage} pageContents={setCurrentPageContents}/>
            </Center>
            <Contents pageContent={currentPageContents}/>
			<GlobalStyle />
		</Wrapper>
	);
};
