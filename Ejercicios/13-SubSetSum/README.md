
# Subset Sum
## Introducción
Dada una suma objetiva, 'target' y un arreglo de números positivos:
* Devolvé **true** si cualquier combinación de números en el arreglo suma el target.
* Devolvé **false** si los números no pueden ser usados para sumar el target  

##### IMPORTANTE
Cada número en el arreglo solo se puede usar una vez.

#### Ejemplos:
subsetSum( **[1,10,5,3], 9** );    
**output**: true <= 1 + 5 + 3

subsetSum( **[1,10,5,3], 19** );     
**output**:true <= add all 4

subsetSum( **[1,10,5,3], 17** );      
**output**:false

subsetSum( **[1,10,5,3], 2** );      
**output**:false

subsetSum( **[1,10,5,3], 10** );      
**output**:true <= 10 + 0 = 10

## Solución
### Primer alternativa: Iterativa
#### En palabras
Construir un arreglo de todas las sumas posibles:
1. Inicializa el arreglo de sumas con 0
2. Itera sobre el arreglo de números
3. Itera sobre el arreglo de sumas, chequeando si el elemento actual + la suma es igual al target
4. Si la nueva suma es menor que el target
guardalo en el arreglo de sumas

##### Ejemplo:
```javascript
subsetSum(17, [1, 10, 5, 3])
=> set de posibles sumas: [0]
=> agrega 1 a cada suma posible
=> set de posibles sumas: [0, 1]
=> agrega 10 a cada suma posible
=> set de sumas posibles: [0, 1, 10, 11]
=> agrega 5 a cada posible suma
=> set de sumas posibles: [0, 1, 10, 11, 5, 6, 15, 16]
```

#### En código
```javascript
const subsetSum = (nums, target) => {
    const sums = [0];
    return nums.some((num) => {
        const copySums = [...sums];
        return copySums.some(sum => {
            const newSum = sum + num;
            if (target === newSum) return true;
            if (newSum < target) sums.push(newSum);
        })
    })
}
```

### Segunda alternativa: Optimización
Con la alternativa anterior... Podemos estar agregando valores repetidos al arreglo que nos dan el mismo resultado

##### Ejemplo
```javascript
=> 1,2,3,4,5,6     
=> 0,1,2,3,3,4,5,6,4,5,6,7
```

###### ¿Como podemos evitar agregar elementos repetidos sin agregar complejidad? Con UN SET.

#### Solución Iterativa con Set
```javascript
const subsetSumSet = (nums, target) => {
    const sums = new Set([0]);
    return nums.some((num) => {
        const copySums = [...sums];
        for (let sum of copySums) {
            const newSum = sum + num;
            if (target === newSum) return true;
            if (newSum < target) sums.add(newSum);
        }
    })
}
```

### Tercer Alternativa: Solución Recursiva
#### En palabras
También podemos encarar este problema recursivamente.

Por cada elemento del arreglo solo nos importa:

1. Usarlo para construir la suma nos va a ayudar a llegar al target
2. Saltearlo y añadir otros números va a hacernos llegar al target
3. Entonces... por cada elemento, hagamos una llamada recursiva que chequeé estas dos cosas

#### En código
```javascript
const subsetSumRec = (nums, target, index = 0) => {
    if (target === 0) return true;
    if (target < 0) return false;
    if (index > nums.length) return false;
    const whenExcluded = subsetSumRec(nums, target, index + 1)
    const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
    return whenExcluded || whenIncluded
}
```

###### Pero de nuevo estamos creando muchos caminos que se repiten...


#### Optimización de la Solución Recursiva
Con memoization podemos guardar los números que ya tuvimos un resultado y no tener que volver a procesarlos.

```javascript
const subsetSumRecMemo = (nums, target, index = 0, memo = {}) => {
    if(memo.hasOwnProperty(target)) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    if (index > nums.length) return false;
    const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
    const whenExcluded = subsetSumRec(nums, target, index + 1);
    memo[target] = whenExcluded;
    memo[target - nums[index]] = whenIncluded;
    return whenExcluded || whenIncluded ;
}
```
## Complejidad
Todas las soluciones son de complejidad:

Complejidad Temporal | Complejidad Espacial
--|--
O(2^n)|O(2^n)

Aunque algunas sean mas óptimas que otras, en el peor de los casos, hay que recorrer todo el arreglo, y no tener ninguna suma repetida.

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KM8S/4).
