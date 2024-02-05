import * as os from 'os';

export function cpusFunc() {
    const CPUs = os.cpus()
    for (let cpu of CPUs) {
        delete cpu.times;
    }
    console.table(CPUs);
}