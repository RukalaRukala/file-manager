import * as fs from "fs/promises";

export async function rn(args) {
    const [initFilePath, changedFilePath] = args
        .replace(/^"|"$/g, '')
        .split('" "');
    await fs.rename(initFilePath, changedFilePath);
    return '\nDone!\n'
}