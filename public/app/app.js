import { log, timeoutPromisse, delay, retry } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from './notas/service.js'
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js'
import { EventEmitter } from "./utils/event-emitter.js";

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
)

const action = operations(() =>
    retry(3, 3000, () => timeoutPromisse(200, service.sumItems('2143')))
    .then(data => EventEmitter.emiter('totalValores', data))
    .catch(console.log)
);

document
    .querySelector('#myButton')
    .onclick = action;