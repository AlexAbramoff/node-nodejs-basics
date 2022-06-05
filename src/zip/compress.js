import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const gzip=zlib.createGzip()
    const srcFile = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
    const acrhiveFile = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    srcFile.pipe(gzip).pipe(acrhiveFile)
};
