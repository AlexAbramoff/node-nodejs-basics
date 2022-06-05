import process from 'process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const writeStr=fs.createWriteStream(path.join(__dirname,'files','fileToWrite.txt'))
    process.stdin.pipe(writeStr)
};
write()