import * as fs from "fs";
import {createTwoVariables} from "../utils/createTwoVariables.js";
import * as path from "path";

export async function cp(args) {
    const [sourceFilePath, destinationFolderPath] = createTwoVariables(args);
    const sourceFileName = path.basename(sourceFilePath);
    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(`${destinationFolderPath}/${sourceFileName}`);

    await new Promise((resolve, reject) => {
        readStream.on('end', resolve);
        readStream.on('error', reject);
        readStream.pipe(writeStream);
    });

    return '\nDone!\n';
}