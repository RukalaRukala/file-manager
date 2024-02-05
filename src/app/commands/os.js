import * as os from 'os';

function cpusFunc() {
    const CPUs = os.cpus()
    for (let cpu of CPUs) {
        delete cpu.times;
    }
    console.table(CPUs);
}

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
    }
    return `\nDone!\n`
}