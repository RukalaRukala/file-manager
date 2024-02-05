import {createTwoVariables} from "../utils/createTwoVariables.js";
import path from "path";
import fs from "fs";
import zlib from "zlib";

export async function decompress(args) {
    const [initFilePath, pathToDestination] = createTwoVariables(args);
    const initFileName = path.basename(initFilePath);
    const readStream = fs.createReadStream(initFilePath);
    const brotliStream = zlib.createBrotliDecompress();
    const writeStream = fs.createWriteStream(`${pathToDestination}\\${initFileName.slice(0, -3)}`);

    await new Promise((resolve) => {
        readStream.pipe(brotliStream).pipe(writeStream);
        resolve();
    });

    return '\nDone!\n';
}