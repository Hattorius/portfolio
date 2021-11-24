
type ConsoleLine = ({
    type: 'command',
    command: string
} | {
    type: 'log',
    message: string
} | {
    type: 'change'
}) & {
    path: string
};
