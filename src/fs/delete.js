import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.rm(path.join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
        if (err) {
            err.message='FS operation failed'
            throw err
        } else {
            console.log('File deleted')
        }
    })
};