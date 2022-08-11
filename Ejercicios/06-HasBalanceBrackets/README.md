

# Has Balance Brackets
## Introducción
Crear un bracket validator. La idea es que chequee que los brackets estén balanceados correctamente.    

Los brackets válidos son los siguientes:  **[ ] ( ) { }**

### Ejemplos

**input:** "{ [ ] ( ) }"    
**output:** true

**input:** "{ [ ( ] ) }"   
**output:** false

**input:** "{ [ }"   
**output:** false

**input:** "{ [ ( [ { ( )[ ]{ } } ] ) ] }"   
**output:** true

## Solución
### En Palabras

1. Tienes:
  *  **"opening"** - **( { [** - y,
  * **"closing"** - **) } ]** - brackets.
2. Cada closing bracket tiene que corresponder con la opening bracket mas cercano que empareje.
3. Cada opening y closing bracket tienen que estar en pareja.

Entonces tienen que ir trackeando los opening brackets y fijarse si cuando encontramos una closing bracket, matchea con la opening bracket mas cercana

##### ¿Qué  estructura de datos podemos utilizar para esto?

### Solución posible
```javascript
const hasBalancedBrackets = (string) => {
    //  Tenemos un diccionario para chequear las opening brackets con sus closing brackets
    const validBrackets = {
        '{' : '}',
        '[' : ']',
        '(' : ')',  
    };
    // creamos un arreglo donde vamos a ir guardando los openBrackets
    const openBrackets = [];
    // iteramos sobre el string
    for (let i = 0; i < string.length; i += 1) {
        // si existe la propiedad significa que es un opening bracket entonces lo guardamos
        if (validBrackets[string[i]]) {
           openBrackets.push(string[i]);
        } else if (validBrackets[openBrackets.pop()] !== string[i]) {
           // Si no nos fijamos que el closing bracket corresponda con el ultimo opening bracket
           return false;
        }
    }
    // una vez que terminamos de recorrer
    // chequeamos que no haya quedado nada en el arreglo
    return !openBrackets.length;
};
```

## Conclusión
* Las estructuras de datos pueden ser muy útiles aunque... no estemos explícitamente creando una.
* Podemos usar arreglos y métodos del arreglo para crear un arreglo que se comporte como un stack/queue

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JsIz).
