import { TransformStream } from './utils/transformClass.js';
import { getUsername } from "./utils/naming.js";
import {failOperation} from "./utils/failOperation.js";

export async function appRun() {
    const transformStream = new TransformStream();

    process.stdin.pipe(transformStream).pipe(process.stdout);

    return new Promise((resolve, reject) => {
        process.on('SIGINT', () => {
            process.stdout.write(`\nThank you for using File Manager, ${getUsername()} 'goodbye!\n\n`);
            process.stdin.end();
            process.exit();
            resolve();
        });

        process.stdin.on('error', () => {
            failOperation();
        });
    });
}