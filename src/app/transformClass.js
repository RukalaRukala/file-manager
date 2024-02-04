import {Transform} from 'stream';

export class TransformStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
}