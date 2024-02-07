import * as fs from "fs";
import path from "path";
import { __dirname } from "../utils/naming.js";

export async function cat(pathToFile) {
    const stream = fs.createReadStream(path.resolve(__dirname(), pathToFile));
    console.log(path.resolve(__dirname(), pathToFile));
    let result = ''

    await new Promise((resolve, reject) => {
        stream.on('data', (chunk) => {
            result += chunk.toString();
        });

        stream.on('end', () => {
            stream.destroy();
            resolve();
        });

        stream.on('error', (error) => {
            reject(error);
        });
    });
    return `\n${result}\n`;
}