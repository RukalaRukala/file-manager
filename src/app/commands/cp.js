import {copyFile} from "../utils/copyFile.js";

export async function cp(args) {
    await copyFile(args);

    return '\nDone!\n';
}