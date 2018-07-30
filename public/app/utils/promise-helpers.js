export const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}

export const timeoutPromisse = (interval, promise) => {

    const timer = new Promise((resolve, reject) => {
        setTimeout(() =>
            reject(`Limite de tempo excedido: ${interval}`), interval);
    })

    return Promise.race([
        timer, promise
    ])
}

export const delay = interval => data =>
    new Promise((resolve, reject) => setTimeout(() => resolve(data), interval));

export const retry = (retries, interval, fn) =>
    fn().catch(err => {
        console.log(retries);

        return delay(interval)().then(() =>
            retries > 1 ?
            retry(--retries, interval, fn) :
            Promise.reject(err))

    });