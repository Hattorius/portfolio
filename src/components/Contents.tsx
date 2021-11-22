import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Remarkable } from 'remarkable';

const md = new Remarkable({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'english-',
    typographer: true,
    linkTarget: '_blank'
});

const Wrapper = styled.div`
    margin-top: 3rem;
    color: #fff;
    max-width: 900px;
	width: 100%;
    margin-left: auto;
    margin-right: auto;
    white-space: pre-wrap;
`;

const GlobalStyle = createGlobalStyle`
    #markdownContent {
        text-align: justify;
        text-justify: inter-word;
        h1 {
            margin-bottom: .3rem;
        }
        h2, h3, h4, h5, h6 {
            margin-bottom: -1rem;
            margin-top: 0.5rem;
        }
        p {
            margin-top: .2rem;
            margin-bottom: .2rem;
        }
        img {
            margin-left: 1rem;
            margin-right: 1rem;
        }
        a, a:link {
            text-decoration: underline;
            color: #fff;
            font-weight: 500;
            transition: 250ms;
        }
        a:hover {
            text-shadow: 2px 2px 5px rgba(255,255,255,0.65);
        }
        a:visited, a:active {
            font-weight: 400;
            text-shadow: none !important;
        }
        br {
            display: block;
            margin: -15px 0;
            line-height: 10px;
            content: " ";
        }
    }
`;

export const Contents = ( props ) => {
    return (
        <div>
            <Wrapper id="markdownContent" dangerouslySetInnerHTML={{__html: md.render(props.pageContent)}}/>
            <GlobalStyle/>
        </div>
    );
}