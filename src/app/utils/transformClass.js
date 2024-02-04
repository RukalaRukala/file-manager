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
        const data = chunk.toString();

        const [curCommand, args] = data.startsWith('npm run start -- --username=')
            ? ['start', data.slice(data.indexOf('=') + 1)]
            : [data.split(' ')[0], data.indexOf(' ')];

        try {
            if (commands.has(curCommand)) {
                const result = color.green + commands.get(curCommand)(args) + currentFolder();
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
    }
}