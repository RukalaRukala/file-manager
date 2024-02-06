import * as fs from "fs/promises";
import { __dirname } from "../utils/naming.js";
import * as path from "path";

export async function add(pathToFile) {
    await fs.writeFile(path.join(__dirname(), pathToFile), '');
    return '\nDone!\n'
}