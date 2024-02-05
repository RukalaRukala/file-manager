import * as os from 'os';

export function cpusFunc() {
    const CPUs = os.cpus()
    for (let cpu of CPUs) {
        cpu['speed (Ghz)'] = cpu.speed/1000;
        delete cpu.speed;
        delete cpu.times;
    }
    console.table(CPUs);
}