import {copyFile} from "../utils/copyFile.js";
import {color} from "../utils/color.js";

export async function cp(args) {
    try {
        await copyFile(args);

        return '\nDone!\n';
    } catch (err) {
        return `\n${color.red}Operation failed${color.blue}\n`;
    }
}