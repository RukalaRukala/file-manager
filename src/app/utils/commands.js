import {start} from "../commands/start.js";

export const commands = new Map([
    ['start', start],
    ['.exit', process.exit]
])