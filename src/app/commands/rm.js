import fs from "fs/promises";
import path from "path";
import {__dirname} from "../utils/naming.js";

export async function rm(pathToFile) {
    await fs.unlink(path.resolve(__dirname(), pathToFile));

    return '\nDone!\n';
}