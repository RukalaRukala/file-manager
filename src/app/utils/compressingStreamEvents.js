export async function compressingStreamEvents(readStream, compressStream, writeStream) {
    return new Promise((resolve, reject) => {
        readStream.on('error', (error) => {
            writeStream.destroy();
            reject(error);
        });

        writeStream.on('error', (error) => {
            reject(error);
        });

        compressStream.on('error', (error) => {
            writeStream.destroy();
            reject(error);
        });

        writeStream.on('finish', () => {
            resolve('\nDone!\n');
        });

        readStream.pipe(compressStream).pipe(writeStream);
    });
}