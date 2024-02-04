import * as fs from "fs";

export async function cat(pathToFile) {
    const stream = fs.createReadStream(pathToFile);
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