import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const workersArr=[]
    const res=[]
    for (let index = 0; index < process.env.NUMBER_OF_PROCESSORS; index++) {
        workersArr.push(new Promise((res, rej) => {
            const worker=new Worker('./src/wt/worker.js', {
                workerData:index+10
            })
            worker.on('message', (msg) => {
            res({status:'resolve', 'data': msg})
            })
        }))
    }
    Promise.all(workersArr).then((vals) => {
    console.log(vals)
})
};
performCalculations()