import {color} from "./color.js";

export const __dirname = () => process.cwd();
export const getFile = (path) => path.join(__dirname, path);

export const currentFolder = () =>
    `${color.blue}\nYou are currently in ${__dirname()}${color.reset}\n\n`;

let username = '';

export function setUsername(newUsername) {
    username = newUsername;
}

export function getUsername() {
    return username;
}
