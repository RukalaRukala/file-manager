import { sayHello, setUsername } from "../utils/naming.js";
import { __dirname } from "../utils/naming.js";

export function start(arg) {
    setUsername(arg);
    const targetFolder = __dirname()
        .split('\\')
        .splice(0, 3)
        .join('\\');

    process.chdir(targetFolder);

    return sayHello();
}