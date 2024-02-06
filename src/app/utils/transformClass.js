import {Transform} from 'stream';
import {color} from "./color.js";
import {currentFolder} from "./naming.js";
import {failOperation} from "./failOperation.js";
import {commands} from "./commands.js";

export class TransformStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        (async () => {
            try {
                const data = chunk.toString();
                const curCommand = data.split(' ')[0].trim();
                const args = data.slice(data.indexOf(' ')).trim();

                    if (data.trim() === '.exit') {
                        process.exit();
                    }

                    if (commands.has(curCommand)) {
                        const commandResult = await commands.get(curCommand)(args);
                        const result = color.green + commandResult + currentFolder();
                        this.push(result);
                    } else {
                        throw new Error('Invalid input');
                    }
            } catch (err) {
                failOperation(err.message === 'Invalid input'
                ? 'Invalid input'
                : 'Operation failed');
            }

            callback();
        })()
    }
}