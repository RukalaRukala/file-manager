import * as os from 'os';
import {color} from "./color.js";

export function cpusFunc() {
    const CPUs = os.cpus()
    for (let cpu of CPUs) {
        cpu['speed (Ghz)'] = cpu.speed/1000;
        delete cpu.speed;
        delete cpu.times;
    }
    process.stdout.write(`${color.green}\nAmount of CPUs: ${os.cpus().length}${color.reset}\n`);
    console.table(CPUs);
}