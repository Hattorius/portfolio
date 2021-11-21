import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    background-color: #2d2e2f;
    position: -webkit-sticky;
    position: fixed;
    right: 3rem;
    width: 100%;
    max-width: 35%;
    margin-top: 20px;
    cursor: text;
    height: 35%;
    -webkit-box-shadow: 0px 1px 3px 0px #000000; 
    box-shadow: 0px 1px 3px 0px #000000;
    display: none;
    @media (min-width: 1000px) {
        display: block;
    }
`;

const Bar = styled.div`
    margin: 0px;
    background-color: #222D32;
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 6px;
    color: #c9c9c9;
    font-size: 12px;
    &:active {
        cursor: grabbing;
    }
    cursor: alias;
`;

const Content = styled.div`
    padding: 6px;
    padding-top: 12px;
`;

const Line = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 12px;
`;

const User = styled.div`
    display: inline-block;
    color: #8bfada;
`;

const X = styled.div`
    display: inline-block;
    color: #ff5459;
`;

const Path = styled.div`
    display: inline-block;
    color: #299bfb;
`;

const Command = styled.div`
    display: inline-block;
    color: #e5e5e5;
`;

const ConsoleCommands = (props) => {
    const commandsList = props.commands.map((command) => {
        if (command.type === 'command') {
            return (
                <div key={command.path+command.command}>
                    <User>aaron@<X>x</X>logic</User><Command>:</Command><Path>{command.path}</Path><Command>$ {command.command}</Command>
                </div>
            );
        } else if (command.type === 'log') {
            return (
                <div key={command.path+command.command}>
                    <Command>{command.command}</Command>
                </div>
            );
        }
    });
    return commandsList;
}

const TyperBlock = styled.div`
    display: inline-block;
    border-bottom: 3px solid white;
    height: 12px;
    width: 6px;
    margin-bottom: -2px;
    margin-left: 0;
`;
const TyperBlockActiveHidden = styled.div`
    display: hidden;
`;

const Typer = () => {
    const [hidden, setHidden] = React.useState(false);

    setTimeout(() => {
        setHidden(!hidden);
    }, 1000);

    if (hidden) {
        return (<TyperBlockActiveHidden />);
    } else {
        return (<TyperBlock />);
    }
}

export const Console = ( props ) => {
    const [input, inputState] = useState('');

    const keyPress = (e) => {
        if (e.keyCode === 8) {
            inputState(input.slice(0, -1));
        } else if (e.keyCode === 32) {
            inputState(input + " ");
        } else if (e.keyCode >= 48 && e.keyCode <= 90) {
            inputState(input+e.key)
        } else if (e.keyCode === 13) {
            const query = input;
            inputState("");
            props.whatToDo(query, props.commands);
        }
    }

    try {
        var latestPath = props.commands.at(-1).path;
        if (typeof latestPath === "undefined") {
            latestPath = '~';
        }
    } catch (err) {
        latestPath = '~';
    }

    return (
        <Draggable handle=".handle" defaultPosition={{x: 0, y: 0}}>
            <Wrapper onKeyDown={keyPress} tabIndex="0">
                <Bar className="handle">{props.barName}</Bar>
                <Content>
                    <Line>
                        <ConsoleCommands commands={props.commands}></ConsoleCommands>
                        <User>aaron@<X>x</X>logic</User><Command>:</Command><Path>{latestPath}</Path><Command>$ {input}<Typer /></Command>
                    </Line>
                </Content>
            </Wrapper>
        </Draggable>
    );
};
