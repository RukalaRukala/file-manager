import {start} from "../commands/start.js";
import {up} from "../commands/up.js";
import {cd} from "../commands/cd.js";
import {ls} from "../commands/ls.js";
import {cat} from "../commands/cat.js";
import {add} from "../commands/add.js";
import {rn} from "../commands/rn.js";
import {cp} from "../commands/cp.js";
import {mv} from "../commands/mv.js";
import {rm} from "../commands/rm.js";
import {hash} from "../commands/hash.js";
import {compress} from "../commands/compress.js";
import {decompress} from "../commands/decompress.js";
import {osFunc} from "../commands/os.js";

export const commands = new Map([
    ['start', start],
    ['up', up],
    ['cd', cd],
    ['ls', ls],
    ['cat', cat],
    ['add', add],
    ['rn', rn],
    ['cp', cp],
    ['mv', mv],
    ['rm', rm],
    ['hash', hash],
    ['compress', compress],
    ['decompress', decompress],
    ['os', osFunc],
])