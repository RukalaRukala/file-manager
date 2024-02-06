import { __dirname } from "../utils/naming.js";

export function up(args) {
    if (!args) {
        const upFolderPath = __dirname()
            .split('\\')
            .slice(0, -1)
            .join('\\');
        process.chdir(`${upFolderPath}\\`);
    } else {
        throw new Error('Invalid input');
    }

    return '';
}