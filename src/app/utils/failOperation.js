import {color} from "./color.js";
import {currentFolder} from "./naming.js";

export function failOperation(message) {
    return process.stdout.write(`\n${color.red}${message}${color.blue}\n${currentFolder()}${color.reset}`)
}