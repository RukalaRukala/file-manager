import fs from "fs/promises";

export async function rm(fileToPath) {
    await fs.unlink(fileToPath);

    return '\nDone!\n';
}