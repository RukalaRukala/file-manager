import * as fs from "fs";
import { __dirname } from "../utils/naming.js";
import { promisify } from 'util';
import * as path from "path";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

export async function ls() {
    const files = await readdir(__dirname());
    const result = await Promise.all(files.map(async file => {
        const statFile = await stat(path.join(__dirname(), file));
        return {
            name: file,
            type: statFile.isFile() ? 'file' : 'directory'
        }
    }));
    console.table(result);
    return 'Done!\n';
}