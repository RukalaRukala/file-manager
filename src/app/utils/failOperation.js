import {color} from "./color.js";

export function failOperation() {
    return process.stdout.write(`\n${color.red}Operation failed${color.reset}\n\n`)
}