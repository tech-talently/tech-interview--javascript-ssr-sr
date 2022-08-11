
# Multi-Dimensional SumArray
## Introducción
Ya trabajamos con arreglos de una unica dimension, ahora subiremos un escalón e iremos por arreglos de dos dimensiones, es decir, un arreglo de arreglos de enteros.
En este caso, el objetivo es encontrar la suma de todos los elementos del arreglo.

#### Ejemplos
**mdArray**: [1,2,3,4]    
**output**:  10

**mdArraySum**: [ [2,4] , [1], [4,2,1] ]  
**output**:  14

**mdArraySum**: [ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]   
**output**:  26

## Solución
### En palabras
Algunas consideraciones a tener en cuenta antes de implementar una solución.

1. La suma inicial es cero
2. Chequea cada elemento en el arreglo
    1. Si no es un arreglo agrégalo a la suma
    2. Si es un arreglo agrega la suma de todos sus elementos a la suma
3. Devuelve el total

### Primer Alternativa
Podemos empezar a implementar la solución, pero antes tenemos que resolver una pregunta:
###### ¿Cómo podemos calcular la suma en los elementos de un sub-arreglo de un sub-arreglo? La respuesta es ***RECURSIÓN***

```javascript
const mdArraySum = (arr) => {
    // Iniciamos la suma en 0
    let sum = 0;
    // Iteramos sobre el arreglo
    for (let i = 0; i < arr.length; i += 1) {
        // si es un arreglo le sumamos lo que devuelve llamar otra vez la función sobre ese arreglo
        if (Array.isArray(arr[i])) sum += mdArraySum(arr[i])
        // si no le sumamos al total
        else sum += arr[i]  
    }
    // devolvemos el total
    return sum;
}
```
Considerando que **m es la cantidad de elementos en todos los arreglos** y **m el nivel máximo de profundidad** obtenemos los siguientes ordenes de complejidad.

Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(m)

### Segunda alternativa
Veamos una solución one-liner.

```javascript
const mdArraySum2 = arr =>    
arr.reduce((total, elem) => total + (Array.isArray(elem) ? mdArraySum2(elem) : elem), 0)
```

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/Jl9b).
