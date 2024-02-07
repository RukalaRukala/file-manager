import {createTwoVariables} from "./createTwoVariables.js";
import path from "path";
import fs from "fs";
import fsAsync from "fs/promises";

export async function copyFile(str, status = 'copy') {
    const [sourceFilePath, destinationFolderPath] = createTwoVariables(str);
    const sourceFileName = path.basename(sourceFilePath);
    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(`${destinationFolderPath}/${sourceFileName}`);

    await new Promise((resolve, reject) => {
        readStream.on('error', reject);
        writeStream.on('error', reject);
        writeStream.on('end', resolve);
        readStream.on('end', resolve);
        readStream.pipe(writeStream);
    });
    if (status === 'move') {
        await fsAsync.unlink(sourceFilePath);
    }
}