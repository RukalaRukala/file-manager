import { getUsername, setUsername } from "../utils/naming.js";
import { __dirname } from "../utils/naming.js";

export function start(arg) {
    setUsername(arg.trim());
    const targetFolder = __dirname()
        .split('\\')
        .splice(0, 3)
        .join('\\');

    process.chdir(targetFolder);

    return `\nWelcome to the File Manager, ${getUsername()}!\n`;
}