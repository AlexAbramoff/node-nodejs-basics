import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.readdir(path.join(__dirname, 'files'), (err,files) => {
        if (err) {
            err.message='FS operation failed'
            throw err
        } else {
            fs.mkdir(path.join(__dirname, 'files_copy'), (err) => {
                if (err) {
                    err.message='FS operation failed'
                    throw err
                } else {
                    files.forEach((file) => {
                        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files_copy',file), (err) => {
                            if (err) {
                                err.message='FS operation failed'
                                throw err
                            }
                        })
                    })
                    console.log('Files copied')
                }
            })
        }
    })
};