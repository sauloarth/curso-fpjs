const events = new Map();

export const EventEmitter = {

    on(event, listener) {
        if (!events.get(event)) events.set(event, []);
        events.get(event).push(listener);

    },

    emiter(event, data) {
        const listeners = events.get(event);
        if (listeners)
            listeners.forEach(listener => listener(data))
    }

}