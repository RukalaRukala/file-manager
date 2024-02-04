import {start} from "../commands/start.js";
import {up} from "../commands/up.js";
import {cd} from "../commands/cd.js";

export const commands = new Map([
    ['start', start],
    ['up', up],
    ['cd', cd],

])