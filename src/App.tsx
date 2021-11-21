import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AboutMe } from "./components/AboutMe";
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
`;

const Wrapper = styled.div`
	background: #020B0D;
	display: flex;
	justify-content: center;
    min-height: 150vh;
`;

const Center = styled.div`
	max-width: 900px;
	width: 100%;
`;

const Button = styled.div`
    padding: 0.4rem 1rem;
    background-color: blue;
    border-radius: 1rem;
    color: white;
    display: inline-block;
    margin: 4rem;
    cursor:pointer;
`;

export const App = () => {
    const [consoleData, setConsoleData] = useState([{'path':'~','command':'hi','type':'command'}]);

    const goToPage = (page) => {
        console.log(page);
    }

    const commandExecute = (command, commands) => {
        console.log(commands[commands.length - 1]);
        setConsoleData(commands.push({'path':commands[commands.length - 1].path,'command':command,'type':'command'}));
        console.log(command);
    }

	return (
		<Wrapper>
			<Center>
                <Navbar goToHandler={goToPage}/>
                <Console commands={consoleData} barName='console' whatToDo={commandExecute}/>
                <AboutMe/>
            </Center>
			<GlobalStyle />
		</Wrapper>
	);
};
