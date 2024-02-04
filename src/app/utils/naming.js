import path from "path";
import {fileURLToPath} from "url";
import {color} from "./color.js";

export const __dirname = () => path.dirname(fileURLToPath(import.meta.url));
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
