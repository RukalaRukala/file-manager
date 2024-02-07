import path from "path";
import {__dirname} from "./naming.js";

export function createTwoVariables(str) {
    const result = str
        .replace(/^"|"$/g, '')
        .split('" "')
        .map(eachPath => path.resolve(__dirname(), eachPath));
    if (result.length === 2) {
        return result;
    } else {
        throw new Error('Operation failed');
    }
}