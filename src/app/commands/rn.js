import * as fs from "fs/promises";
import {createTwoVariables} from "../utils/createTwoVariables.js";

export async function rn(args) {
    const [initFilePath, changedFilePath] = createTwoVariables(args);
    await fs.rename(initFilePath, changedFilePath);
    return '\nDone!\n';
}