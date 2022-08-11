//Dado un arreglo de valores de acciones, 
//encontrar la mayor ganancia posible de comprar a un horario y vender después. 
//acciones: [4, 3, 2, 5, 11] mayor ganancia: 9;

module.exports = function mayorGanancia(arrayAcciones) {
    let viejoMaximo = arrayAcciones[1] - arrayAcciones[0];
    for (let i = 0; i < arrayAcciones.length - 1; i += 1) {
        for (let j = i + 1; j < arrayAcciones.length; j += 1) {
            let gananciaPotencial = arrayAcciones[j] - arrayAcciones[i];
            
            if(viejoMaximo < gananciaPotencial){
                viejoMaximo = gananciaPotencial;
            } 
        }

    }
    return viejoMaximo;
}