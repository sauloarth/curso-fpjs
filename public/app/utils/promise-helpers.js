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