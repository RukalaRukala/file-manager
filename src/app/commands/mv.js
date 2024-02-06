import {copyFile} from "../utils/copyFile.js";

export async function mv(args) {
    await copyFile(args, 'move');

    return '\nDone!\n';
}