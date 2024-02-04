import {start} from "../commands/start.js";
import {up} from "../commands/up.js";
import {cd} from "../commands/cd.js";
import {ls} from "../commands/ls.js";

export const commands = new Map([
    ['start', start],
    ['up', up],
    ['cd', cd],
    ['ls', ls],

])