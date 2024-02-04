import { TransformStream } from './transformClass.js';

export async function appRun() {
    const transformStream = new TransformStream();

    process.stdin.pipe(transformStream).pipe(process.stdout);

    return new Promise((resolve, reject) => {
        process.on('SIGINT', () => {
            console.log('\nПроцесс прерван. Поток process.stdin закрыт.');
            process.stdin.end();
            process.exit();
            resolve();
        });

        process.stdin.on('error', (error) => {
            reject(error);
        });
    });
}