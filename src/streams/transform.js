import process from 'process';
import { Transform } from 'stream';

export const transform = async () => {
    const transStr = new Transform()
    transStr._transform=(chunk,encoding,callback) => {
        const res = chunk.toString('utf8').split('').reverse().join('')
        callback(null, res);
    }
    process.stdin.pipe(transStr).pipe(process.stdout)
};
