import { __dirname } from "../utils/naming.js";
import path from "path";

export function cd(pathToFile) {
    process.chdir(path.resolve(__dirname(), pathToFile));

    return '';
}