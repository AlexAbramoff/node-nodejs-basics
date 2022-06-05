export const parseArgs = () => {
    process.argv.forEach((arg, i,args) => {
        if (i > 1) {
            if (arg.startsWith('--')) {
                console.log(arg.slice(2),' is ',args[i+1])
            }
        }
    })
};
