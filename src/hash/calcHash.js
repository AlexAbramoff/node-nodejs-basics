import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { createHmac } from 'node:crypto';

export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf8', (err, data) => {
        if (err) {
            throw err
        } else {
            const hash = createHmac('sha256', data).digest('hex')
            console.log(hash)
        }
    })
};
