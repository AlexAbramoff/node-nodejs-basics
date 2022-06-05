import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young',{encoding:'utf8',flag:'wx'}, (err) => {
        if (err) {
            err.message='FS operation failed'
        throw err
        } else {
            console.log('File created!')
        }
    })
};