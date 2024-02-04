import {color} from "./color.js";

export function failOperation(message) {
    return process.stdout.write(`\n${color.red}${message}${color.reset}\n\n`)
}