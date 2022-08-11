

# Sum Array
## Introducción
En este caso se nos presentan dos elementos: una arreglo **ordenado** de números enteros  y un número entero.    
El objetivo del ejercicio es encontrar si la combinación de dos números cualesquiera del arreglo, suman el número dado.

#### Ejemplos
###### Existen dos valores
**arreglo**: [2,4,5,9]     
**número**: 9        
**return**: true

###### No existen dos valores
**arreglo**: [2,4,5,9]     
**número**: 12        
**return**: false

## Solución
Como todo ejercicio, existen múltiples soluciones para un mismo problema.
En este caso, analizáremos dos alternativas diferentes, luego determináremos cual es mejor.

### En palabras
1. Recorrer el arreglo con dos indices
2. Chequear si la suma de ambas posiciones da el valor pasado por parámetro
  1. Si da, hemos terminado. Encontramos los valores buscados
  2. Si no, seguimos avanzando
3. Si uno de los indices llego al final, hemos finalizado el recorrido y no existen dos valores en el arreglo que logren la suma esperada

### Primer alternativa: Solución naive
```javascript
functionsumArray (arr, n) {
    // Itero sobre el arreglo
    for (let i = 0; i < arr.length - 1; i += 1) {
        // Itero sobre los números siguientes
        for (let j = i + 1; j < arr.length; j += 1) {
            // Veo si son iguales a la suma y devuelvo true
            if (arr[i] + arr[j] === n) return true;
        }  
    }
    // Si termine de recorrer el arreglo devuelvo alse
    return false;
}
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n^2)|O(1)

### Segunda alternativa: Mejor solución
```javascript
function sumArray2 (arr, n) {
    // Creo un puntero para el principio y el final
    let start = 0;
    let end = arr.length - 1;
    // Mientras el puntero del principio sea menor al del final
    while (start < end) {
        // guardo el resultado de la suma
        const sum = arr[start] + arr[end];
        // Si son iguales devuelvo true
        if ( sum === n) return true;
        // Si es menor aumento el puntero de start
        else if (sum < n) start += 1;
        // Si es mayor decremento el puntero de end
        else end -= 1;  
        }
        // Si salimos del for loop significa que no hay coincidencia
        return false;
}
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(1)

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/Jh9N/0).
