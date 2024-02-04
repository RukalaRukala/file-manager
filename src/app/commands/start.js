import { getUsername, setUsername } from "../utils/naming.js";

export function start(arg) {
    setUsername(arg.trim());
    return `\nWelcome to the File Manager, ${getUsername()}!\n`;
}