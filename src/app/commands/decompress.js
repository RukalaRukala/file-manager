import {createTwoVariables} from "../utils/createTwoVariables.js";
import path from "path";
import fs from "fs";
import zlib from "zlib";
import {compressingStreamEvents} from "../utils/compressingStreamEvents.js";

export async function decompress(args) {
    try {
        const [initFilePath, pathToDestination] = createTwoVariables(args);
        const initFileName = path.basename(initFilePath);
        const destinationFilePath = `${pathToDestination}\\${initFileName.slice(0, -3)}`;
        const readStream = fs.createReadStream(initFilePath);
        const brotliStream = zlib.createBrotliDecompress();
        const writeStream = fs.createWriteStream(destinationFilePath);

        return compressingStreamEvents(readStream, brotliStream, writeStream);

    } catch (err) {
        throw new Error('Operation failed');
    }
}