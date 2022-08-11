

# Decimal to Binary
## Introducción
En el caso anterior transformábamos números binarios en decimales. En este caso hay que **hacer una función que tome un numero decimal y lo devuelva en binario**

## Solución
### En palabras
1. Tomá el número y sacá su modulo en 2
2. Guardá el resultado en un string
3. Dividí el número por 2 y redondealo para abajo
4. Continúa el proceso hasta que el número sea igual a 0
5. Devuelve el string

### Primer alternativa
```javascript
const decimalToBinary = (num) => {
    let binary = '';
    while(num) {
        binary = num % 2 + binary;
        num = Math.floor(num / 2);
    }
    return binary
}
```
### Segunda alternativa
En este caso, se propone una **solución recursiva**.
```javascript
const decimalToBinaryRec = (num) => {
    if (num) {
        return decimalToBinaryRec(Math.floor(num / 2)) + num % 2
    }
    return '';
}
```
## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KDLz/1).
