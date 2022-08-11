
# spyOn
## Introducción
Implementa tu propia versión de la función **spyOn** que hace lo siguiente:
- Toma una función como parámetro
- Devuelve una función spy que toma cualquier numero de argumentos
- spy llama a la función y devuelve lo que ella devuelve
- spy tiene los siguientes métodos:
    - **.getCallCount()**: Devuelve la cantidad de veces que el spy fue llamado
    - **.wasCalledWith(val)**: devuelve true si la función fue alguna vez llamada con ese valor, else false
    - **.returned(val)**: devuelve true si alguna vez devolvió ese valor.

#### Ejemplos:
```javascript
function adder(n1, n2) { return n1 + n2; }

const adderSpy = spyOn( adder );

adderSpy.getCallCount(); // 0

adderSpy(2, 4); // returns 6
adderSpy.getCallCount(); // 1

adderSpy(3, 5); // returns 8
adderSpy.getCallCount(); // 2
adderSpy.wasCalledWith(2); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(6); // true
adderSpy.returned(9); // false
```

## Solución
```javascript
const spyOn = (fn) => {
    let callCount = 0;
    const calledWith = new Set();
    const returns = new Set();
    const spy = (...args) => {
        callCount += 1;
        args.forEach(arg => calledWith.add(arg));
        const result = fn(...args);
        returns.add(result);
        return result;
    }
    spy.getCallCount = () => callCount;
    spy.wasCalledWith = (val) => calledWith.has(val);
    spy.returned = (val) => returns.has(val);
    return spy;
}
```

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KUom).
