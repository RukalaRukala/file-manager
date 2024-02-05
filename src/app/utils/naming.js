import {color} from "./color.js";

export const __dirname = () => process.cwd();

export const currentFolder = () =>
    `${color.blue}\nYou are currently in ${__dirname()}${color.reset}\n\n`;

let username = '';

export function setUsername(newUsername) {
    username = newUsername;
}

export function getUsername() {
    return username;
}

export const sayGoodbye = () =>
    `${color.green}\nThank you for using File Manager, ${getUsername() || 'Unknown User'}, goodbye!\n\n`;

export const sayHello = () =>
    `${color.green}Welcome to the File Manager, ${getUsername() || 'Unknown User'}!${color.reset}\n\n`;
