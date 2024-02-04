import { __dirname } from "../utils/naming.js";

export function cd(path) {
    const chosenPath = /^[A-Z]:/.test(path)
        ? path
        : `${__dirname()}\\${path}`
    process.chdir(`${chosenPath}\\`);

    return '';
}