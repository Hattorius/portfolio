import React from "react";
import { render } from "react-dom";
import { App } from "./App";
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
    .active {
        color: #fefefe;
    }
    .red {
        color: #ff5459;
    }
    .post-link {
        padding: .3rem;
        transition: 300ms;
        width: max-content;
        margin: .4rem;
    }
    .post-link:hover {
        background: gray;   
    }
    .holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
    }
`;

render(<App />, document.getElementById('root'));
