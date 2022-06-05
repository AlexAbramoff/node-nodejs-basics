import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), (err,data) => {
        if (err) {
            err.message='FS operation failed'
            throw err
        } else {
            console.log(data.toString())
        }
    })
};
read()