
# Curry
## Introducción
¿Que es **currying**? Consiste en **transformar una función** que utiliza múltiples argumentos en una secuencia de funciones que utilizan un único argumento.

#### Ejemplos
```javascript
function calcAllFour(var1, var2, var3, var4) {
    return var1 + var2 - var3 * var4;
}
const curriedDoSomething = curry(calcAllFour); //argumentos -> []
const firstReturn = curriedDoSomething(1); // argumentos -> [1]
const secondReturn = firstReturn(2); // argumentos -> [1, 2]
const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
const fourthReturn = thirdReturn(4); // -9 -> (1 + 2 - 3 * 4)
```

## Solución
### En palabras
Ahora haz el Curry:
- Implementa la función "curry"
- Mantén en mente
    - Tenés que saber cuantos argumentos la función que estas 'curring' toma.
        - La función anterior tenía 4 parámetros
    - La función que devuelvas del "curring" tiene acumuladas los argumentos anteriores.
    - La función debe determinar si los argumentos acumulados son iguales al numero de parámetros que la función original requiere, y devolver lo que la función original devolvería con los argumentos acumulados.

### Primer Alternativa: Solución ES5
```javascript
function curry(fn) {
    return function curriedFn() {
        var args = [].slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
        return function resolver() {
          return curriedFn.apply(null, args.concat([].slice.call(arguments)));
        };
        }
    };
};
```

### Segunda Alternativa: Solución ES6
```javascript
const curry = (fn) => {
    return function curriedFn(...args) {
        if (args.length >= fn.length) return fn(...args);
        else return (...nextArgs) => curriedFn(...args, ...nextArgs);
    };
};
```

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KWvq/1).
