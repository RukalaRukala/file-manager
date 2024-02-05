import * as os from 'os';
import {cpusFunc} from "../utils/cpusFunc.js";

export function osFunc(arg) {
    switch (arg.trim()) {
        case '--EOL':
            return `\n${os.EOL === '\r\n' ? '\\r\\n' : os.EOL === '\n' ? '\\n' : '\\r'}\n`;
        case '--homedir':
            return `\n${os.homedir()}\n`;
        case '--username':
            return `\n${os.userInfo().username}\n`;
        case '--architecture':
            return `\n${os.arch()}\n`;
        case '--cpus':
            cpusFunc();
            break;
        default:
            throw new Error('Invalid input');
    }
    return `\nDone!\n`
}