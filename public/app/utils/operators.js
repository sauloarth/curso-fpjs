export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => param =>
    fns.reduceRight((previousReturn, currentFunction) => currentFunction(previousReturn), param);

export const pipe = (...fns) => param =>
    fns.reduce((previousReturn, currentFunction) => currentFunction(previousReturn), param);