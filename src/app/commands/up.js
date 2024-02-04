import { __dirname } from "../utils/naming.js";

export function up() {
    const upFolderPath = __dirname()
        .split('\\')
        .slice(0, -1)
        .join('\\');
    process.chdir(`${upFolderPath}\\`);

    return '';
}