

# Max Value
## Introducción
Se nos presenta un arreglo de enteros, estos representan el valor de una acción con el pasar del tiempo. ¿El objetivo del ejercicio? Encontrar cuál es la máxima ganancia posible de comprar a un horario y vender a otro después.


#### Ejemplo
**acciones**: [4, 3, 2, 5, 11]   
**mayor ganancia**: 9   

Esta ganancia la obtenemos comprando la acción cuando su valor es de 2 y vendiéndola cuando a 11.

## Solución

### Primer alternativa: Solución Fuerza Bruta
```javascript
const maxValue = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // iteramos sobre cada posibilidad de compra
    for (let i = 0; i < stocks.length - 1; i += 1) {
        // e iteramos sobre cada posibilidad de venta
        for (let j = i + 1; j < stocks.length; j += 1){
            // sacamos ganancia potencial
            const potential = stocks[j] - stocks[i];
            // y deducimos si nos quedamos con el potencial o con el viejo máximo      
            max = potential > max ? potential : max;    
        }  
    }
    // devolvemos el máximo
    return max;
};
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n^2)|O(1)


### Segunda alternativa: Solución Optima
```javascript
const maxValue2 = (stocks) => {
    // guardamos la primer diferencia
    let max = stocks[1] - stocks[0];
    // guardamos el precio mínimo hasta el momento
    let minPrice = stocks[0];
    // iteramos sobre las stocks
    for (let i = 1; i < stocks.length; i += 1) {
        // sacamos la ganacia potencial
        const potencial = stocks[i] - minPrice;
        // Nos quedamos con el mayor valor    
        max = Math.max(max, potencial);
        // nos quedamos con el precio mínimo    
        minPrice = Math.min(minPrice, stocks[i]);
    }
    // devolvemos el máximo
    return max;
};
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(1)

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JjYI).
