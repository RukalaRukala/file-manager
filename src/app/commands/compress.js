import {createTwoVariables} from "../utils/createTwoVariables.js";
import fs from "fs";
import * as zlib from "zlib";
import path from "path";

export async function compress(args) {
    try {
        const [initFilePath, pathToDestination] = createTwoVariables(args);
        const initFileName = path.basename(initFilePath);
        const destinationFilePath = `${pathToDestination}\\${initFileName}.br`;
        const readStream = fs.createReadStream(initFilePath);
        const brotliStream = zlib.createBrotliCompress();
        const writeStream = fs.createWriteStream(destinationFilePath);

        return new Promise((resolve, reject) => {
            readStream.on('error', (error) => {
                writeStream.destroy();
                reject(error);
            });

            writeStream.on('error', (error) => {
                reject(error);
            });

            brotliStream.on('error', (error) => {
                writeStream.destroy();
                reject(error);
            });

            writeStream.on('finish', () => {
                resolve('\nDone!\n');
            });


            readStream.pipe(brotliStream).pipe(writeStream);
        });

    } catch (err) {
        throw new Error('Operation failed');
    }
}