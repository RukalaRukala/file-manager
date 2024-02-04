import path from "path";
import {fileURLToPath} from "url";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const getFile = (path) => path.join(__dirname, path);
