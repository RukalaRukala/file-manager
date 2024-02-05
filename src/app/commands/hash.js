import { createHash } from 'node:crypto';
import fs from "fs";

export async function hash(pathToFile) {
    const hash = createHash('sha256');
    const stream = fs.createReadStream(pathToFile);

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const sha256Hash = hash.digest('hex');
            resolve(`\n${sha256Hash}\n`);
        });

        stream.on('error', (error) => {
            reject(error);
        });
    });
}