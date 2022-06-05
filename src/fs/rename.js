import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.access(path.join(__dirname, 'files', 'properFilename.txt'), (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            fs.rename(path.join(__dirname, 'files','wrongFilename.txt'), path.join(__dirname, 'files','properFilename.txt'), (err) => {
                if (err) {
                    err.message='FS operation failed'
                    throw err
                } else {
                    console.log('File renamed')
        }
    })
        }
    })

};
rename()