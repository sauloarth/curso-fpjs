export const partialize = (fn, ...args) => fn.bind(null, ...args);

export const compose = (...fns) => param =>
    fns.reduceRight((previousReturn, currentFunction) => currentFunction(previousReturn), param);

export const pipe = (...fns) => param =>
    fns.reduce((previousReturn, currentFunction) => currentFunction(previousReturn), param);

// takeUntil é uma variável que recebe uma função
// a função recebe dois parâmetros e retorna outra função
// a função retornada não recebe nenhum parâmetro
// a função retornada lembra-se de time e fn (closure)
// a função retornada executa fn conforme o valor de times.

export const takeUntil = (times, fn) =>
    () => times-- > 0 && fn();

export const debounceTime = (interval, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, interval);
    }
}