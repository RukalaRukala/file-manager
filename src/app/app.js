import { TransformStream } from './utils/transformClass.js';
import { sayGoodbye } from "./utils/naming.js";
import {failOperation} from "./utils/failOperation.js";

export async function appRun() {
    const transformStream = new TransformStream();

    process.stdin.pipe(transformStream).pipe(process.stdout);

    return new Promise((resolve, reject) => {
        process.on('SIGINT', () => {
            // process.stdout.write(sayGoodbye());
            process.stdin.end();
            process.exit();
            resolve();
        });

        process.on('exit', () => {
            process.stdout.write(sayGoodbye());
            process.stdin.end();
            resolve();
        });

        process.stdin.on('error', () => {
            failOperation();
        });
    });
}