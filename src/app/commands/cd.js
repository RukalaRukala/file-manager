import { __dirname } from "../utils/naming.js";

export function cd(path) {
    const chosenPath = /^[A-Z,a-z]:/.test(path)
        ? path
        : `${__dirname()}\\${path}`
    process.chdir(`${chosenPath}\\`);

    return '';
}