
# Longest Increasing Subsequence
## Introducción
Dado un arreglo de números, encontrá el length de la secuencia creciente mas larga posible. Esta secuencia puede saltear números en el arreglo.

#### Ejemplos
**input:** [3,10,4,5]       
La **secuencia es [3,4,5]**  
**output:** 3.


longestIncreasingSubsequence(**[3, 4, 2, 1, 10, 6]**);         
Donde la **secuencia** es: 3, 4, 6   
**output**: 3     


longestIncreasingSubsequence(**[10, 22, 9, 33, 20, 50, 41, 60, 80]**);  
Donde la **secuencia** es: 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)         
**output**: 6

longestIncreasingSubsequence(**[10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]**);  
Donde, la **secuencia** es: 10, 20, 21, 23, 24, 25, 26, 27, 28  
**output**: 9

## Solución
### Primer Alterantiva: Fuerza Bruta
Recorrer todas las posibilidades de subsecuencias y quedarse con la mas grande.

```javascript
function IterativeLIS (nums) {
    const sequences = [[-Infinity]];
    nums.forEach(num => {
        const copySeq = [...sequences];
        copySeq.forEach(sequence => {
            if(sequence.slice(-1)[0] < num) sequences.push([...sequence, num]);
        });
    });
    return sequences.reduce((memo, seq) => {
        if (memo > seq.length) return memo;
        return seq.length;
    }, 1) -1;
}
```

Recorrer todas las posibilidades de subsecuencias incluyendo o no incluyendo ese número
```javascript
function longestIncreasingSubsequence (nums, index = 0, base = -Infinity) {
    // si ya recorrimos todo el arreglo devolver cero ya que termino la secuencia
    if (index === nums.length) return 0;
    // sacar la longitud de la secuencia que llego cuando le numero es excluido
    const whenExcluded = longestIncreasingSubsequence(nums, index + 1, base);
    // fijarse si el numero es menor que el numero que llega en la base
    // si es menor directamente devolver el excluido
    if (nums[index] <= base) return whenExcluded;
    // Tomar el valor cuando es incluido en la secuencia sumandole uno por si mismo
    const whenIncluded = 1 + longestIncreasingSubsequence(nums, index + 1, nums[index]);
    // devolver el mayor entre el incluido y el no incluido
    return Math.max(whenIncluded, whenExcluded);
}
```

#### Complejidad Temporal
La complejidad de tiempo de esta solución es **O(2^n)**.

Pero, siempre que tomamos el **whenIncluded** de un elemento ese valor es siempre el mismo... ¿Por qué no lo guardamos? **Memoization FTW**

### Segunda Alternativa: Solución con Memoization
```javascript
function memoLis (nums, index = 0, base = -Infinity, memo = {}) {
    if (index === nums.length) return 0;
    const whenExcluded = memoLis(nums, index + 1, base, memo);
    if (nums[index] <= base) return whenExcluded;
    let whenIncluded;
    if(memo.hasOwnProperty(index)) whenIncluded = memo[index]
    else {
        whenIncluded = 1 + memoLis(nums, index + 1, nums[index], memo);
        memo[index] = whenIncluded;
    }
    return Math.max(whenIncluded, whenExcluded);
}
```
Fijense que **solo guardamos el whenIncluded**, ya que en el excluido la base puede ser distinta y dar distintos resultados.

#### Complejidad Temporal
En este caso, la complejidad temporal es de **O(n^2)**. ¿Por qué? Porque por cada elemento recorremos solo una vez en todos los elementos.

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KOFI/4).
