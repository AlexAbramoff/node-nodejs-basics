import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) {
            err.message='FS operation failed'
            throw err
        } else {
                console.log(files)
        }
    })
};
list()