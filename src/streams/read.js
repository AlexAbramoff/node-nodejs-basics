import process from 'process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'),'utf8').pipe(process.stdout)
};
