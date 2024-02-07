import { __dirname } from "../utils/naming.js";
import path from "path";

export function up(args) {
    if (!args) {
        const upFolderPath = path.resolve(__dirname(), '..');
        process.chdir(upFolderPath);
    } else {
        throw new Error('Invalid input');
    }

    return '';
}