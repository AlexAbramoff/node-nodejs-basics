import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const unzip = zlib.createUnzip()
    const archive = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
    const unzipFile = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'),'utf8');
    archive.pipe(unzip).pipe(unzipFile)
};
