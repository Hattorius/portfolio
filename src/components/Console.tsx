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
    &:active {
        -webkit-box-shadow: 0px 1px 3px 0px #000000; 
        box-shadow: 0px 1px 3px 0px #000000;
    }
    display: none;
    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
    }
    resize: both;
    min-height: 300px;
    min-width: 600px;
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
    flex-grow: 1;
    overflow-y: overlay;
    padding-bottom: 1rem;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-bottom: 3px;
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

const Log = styled(Command)`
    font-weight: 500;
`;

const ConsoleCommands = (props) => {
    const commandsList = props.commands.map((command: ConsoleLine, i) => {
        if (command.type === 'command') {
            return (
                <div key={i}>
                    <User>aaron@<X>x</X>logic</User><Command>:</Command><Path>{command.path}</Path><Command>$ {command.command}</Command>
                </div>
            );
        } else if (command.type === 'log') {
            return (
                <div key={i}>
                    <Log>{command.message}</Log>
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
const TyperBlocky = styled(TyperBlock)`
    border: 1px solid white;
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

function reverse(s){
    return s.split("").reverse().join("");
}

export const Console = () => {
    const [input, inputState] = useState('');
    const [active, setActive] = useState(false);
    const [consoleData, setConsoleData] = useState<ConsoleLine[]>([
        {type:'log', message:'Type `help` to see a list of commands', path:'~'}
    ]);

    const fileSystem = {
        '~': {
            "readme.txt": "Wow, actually someone interacting with this custom made terminal?",
            "needwork.txt": "I ned work"
        }
    };

    const commandsExe = {
        "help": {
            "help": "Shows this message",
            "exe": (command: ConsoleLine) => {
                var commands: ConsoleLine[] = [
                    command, 
                    {type: 'log', message: 'AARON bash, version 0.0.2-release', path: '~'},
                    {type: 'log', message: 'These shell commands are defined internally. Type `help` to see this list', path: '~'},
                    {type: 'log', message: 'Type `help name` to find out more about the function `name`', path: '~'},
                    {type: 'log', message: 'Use `info bash` to find out more about the shell in general.', path: '~'},
                    {type: 'log', message: '', path: '~'},
                    {type: 'log', message: 'A star (*) next to a name means that the command is disabled.', path: '~'},
                    {type: 'log', message: '', path: '~'},
                ];
                for (var i = 0; i < Object.keys(commandsExe).length; i++) {
                    const thisCommand = Object.keys(commandsExe)[i];
                    commands.push({
                        type: 'log',
                        message: thisCommand + "  =>  " + commandsExe[thisCommand].help,
                        path: '~'
                    });
                }
                setConsoleData(consoleData.concat(commands));
            }
        },
        "clear": {
            "help": "Clears the terminal",
            "exe": () => {
                setConsoleData([]);
            }
        },
        "ls": {
            "help": "Shows current directory contents",
            "exe": (command: ConsoleLine) => {
                const currentPath = command.path.split('/');
                var newPath = fileSystem;
                for (var i = 0; i < currentPath.length; i++) {
                    newPath = newPath[currentPath[i]];
                }

                var filesList: string = '';
                for (var i = 0; i < Object.keys(newPath).length; i++) {
                    filesList += Object.keys(newPath)[i] + " ";
                }
                console.log(filesList);
                
                setConsoleData([
                    ...consoleData,
                    command,
                    {type: 'log', message: filesList, path: '~'},
                ]);
            }
        },
        "cat": {
            "help": "Reads file",
            "exe": (command: ConsoleLine,  args: string[]) => {
                const currentPath = command.path.split('/');
                var newPath = fileSystem;
                for (var i = 0; i < currentPath.length; i++) {
                    newPath = newPath[currentPath[i]];
                }

                var logs = [command];
                if (args[0]) {
                    logs.push({type: 'log', message: newPath[args[0]], path: '~'});
                }
                setConsoleData(consoleData.concat(logs));
            }
        }
    }

    const commandExecute = (command: string, commands: ConsoleLine[]) => {
        console.log(command);

        if (command === '') command = ' ';
        var path = '~';

        if (consoleData.length && consoleData.at(-1).path) {
            path = consoleData.at(-1).path;
        }
        const commandView: ConsoleLine = {type: 'command', command: command, path: path};

        const mainCommand = command.split(' ')[0];
        const args = command.split(' ');
        args.shift();
        if (commandsExe[mainCommand]) {
            commandsExe[mainCommand].exe(commandView, args);
        } else {
            if (command !== ' ') {
                setConsoleData([...consoleData, commandView, {type: 'log', message: mainCommand+": command not found", path: '~'}]);
            } else {
                setConsoleData([...consoleData, commandView]);
            }
        }

        const consoleWrapper = document.querySelector('.consoleContent');
        consoleWrapper.scrollTop = consoleWrapper.scrollHeight - consoleWrapper.clientHeight;
    }

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 8) {
            inputState(input.slice(0, -1));
        } else if (e.keyCode === 32) {
            inputState(input + " ");
        } else if ((e.keyCode >= 48 && e.keyCode <= 90) || e.keyCode === 190 || e.keyCode === 191) {
            inputState(input+e.key)
        } else if (e.keyCode === 13) {
            const query = input;
            inputState("");
            commandExecute(query, consoleData);
        }
    }

    try {
        var latestPath = consoleData.at(-1).path;
        if (typeof latestPath === "undefined") {
            latestPath = '~';
        }
    } catch (err) {
        latestPath = '~';
    }

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setActive(false);
            } else {
                setActive(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Draggable handle=".handle" defaultPosition={{x: 0, y: 0}}>
            <Wrapper ref={wrapperRef} className="consoleWrapper" onKeyDown={keyPress} tabIndex={0}>
                <Bar className="handle">Terminal</Bar>
                <Content className="consoleContent">
                    <Line>
                        <ConsoleCommands commands={consoleData}></ConsoleCommands>
                        <User>aaron@<X>x</X>logic</User><Command>:</Command><Path>{latestPath}</Path><Command>$ {input}{active ? <Typer/> : <TyperBlocky/>}</Command>
                    </Line>
                </Content>
            </Wrapper>
        </Draggable>
    );
};
