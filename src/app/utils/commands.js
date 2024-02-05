import {start} from "../commands/start.js";
import {up} from "../commands/up.js";
import {cd} from "../commands/cd.js";
import {ls} from "../commands/ls.js";
import {cat} from "../commands/cat.js";
import {add} from "../commands/add.js";
import {rn} from "../commands/rn.js";
import {cp} from "../commands/cp.js";

export const commands = new Map([
    ['start', start],
    ['up', up],
    ['cd', cd],
    ['ls', ls],
    ['cat', cat],
    ['add', add],
    ['rn', rn],
    ['cp', cp],

])