import { handleStatus } from "../utils/promise-helpers.js";
import { partialize, pipe } from "../utils/operators.js";


const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(notas => notas.itens); //devolve uma função que recebe notas e faz um $flatMap
const filterItemsByCode = (code, itens) => itens.filter(item => item.codigo == code);
const sumItemsValue = itens => itens.reduce((total, item) => total + item.valor, 0);


export const notasService = {

    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch(err => {
                console.log(err);
                return Promise.reject("Não foi possivel carregar notas.");
            })
    },

    sumItems(code) {

        const filterItems = partialize(filterItemsByCode, code);
        const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue);

        return this.listAll().then(sumItems);
    }

}