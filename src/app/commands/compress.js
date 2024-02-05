import {createTwoVariables} from "../utils/createTwoVariables.js";
import fs from "fs";
import * as zlib from "zlib";
import path from "path";

export async function compress(args) {
    const [initFilePath, pathToDestination] = createTwoVariables(args);
    const initFileName = path.basename(initFilePath);
    const readStream = fs.createReadStream(initFilePath);
    const brotliStream = zlib.createBrotliCompress();
    const writeStream = fs
        .createWriteStream(`${pathToDestination}\\${initFileName}.br`);

    await new Promise((resolve) => {
        readStream.pipe(brotliStream).pipe(writeStream);
        resolve();
    });

    return '\nDone!\n';
}