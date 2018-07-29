if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(param) {
        return this.map(param).reduce((array, items) => array.concat(items), []);
        // recebe array de itens (recebe o cb de notas => notas.itens)
    }

}