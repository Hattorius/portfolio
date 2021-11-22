
type ConsoleLine = ({
    type: 'command',
    command: string
} | {
    type: 'log',
    message: string
}) & {
    path: string
};
