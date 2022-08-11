

# Find Needle
## Introducción
Encontrar el indice de la primera aparición de un string (needle) dentro de otro (haystack).

Es decir, el objetivo del ejercicio es determinar si el primer string, needle, esta dentro del segundo, haystack, y en dicho caso, devolver el indice en el que esto ocurre.    

#### Ejemplos
###### Lo encuentra
**needle**: redux       
**haystack**: react-redux        
**output**: 6       

###### No lo encuentra
**needle**: puntual           
**haystack**: pinky          
**output**: -1             

En este caso, como el needle no se encuentra en el haystack el valor de salida es -1.

#### IMPORTANTE
Para la resolución de este ejercicio no se puede utilizar la función preexistente: <b>indexOf( )</b>


## Solución
### En palabras
1. Visitar cada caracter del haystack
2. Visitar cada caracter del needle, si el primer caracter coincide:  
    1. Comparar el segundo caracter del needle con el siguiente del haystack
    2. Continuar hasta llegar al final del needle o hasta que una comparación no sea igual
        1. Si llegamos al final del needle es que encontramos el indice
3. Si el primer caracter del needle no coincide, avanzo al próximo caracter
4. Llegamos al final del haystack y no encontramos ninguna coincidencia     

### Primer Alternativa
Ahora si, busquemos la forma de traducir lo que ya dijimos en palabras a código.<br/>
Ademas, debemos evaluar la complejidad en tiempo y espacio.
```javascript
const findNeedle = (haystack, needle) => {
    // iteramos sobre el haystack
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
        // comenzamos a iterar sobre el needle
        for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1 ) {
            // comparamos la letra del needle en la que estamos con la letra del haystack
            // cuando no hay match cortamos de comparar el needle
            if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
            // si terminamos de recorrer la needle devolvemos el haystackIndex
            if (needleIndex + 1 === needle.length) return haystackIndex;
        }
    }
                 // una vez que termina el loop y no encontramos match devolvemos -1
                 return -1;
}
```
Considerando **haystack.length = n** y **needle.length = m**

Complejidad temporal | Complejidad espacial
--|--
O(n*m)|O(1)

### Segunda Alternativa
Otra forma de resolver el ejercicio, es utilizando la función slice.

```javascript
function findNeedle2(haystack, needle){
  // iterar sobre el haystack
  for (let i = 0; i < haystack.length; i += 1) {
      // si la substring matchea el neddle podemos devoler el valor de i
      if (haystack.slice(i, i + needle.length) === needle) {
          return i;
      }
  }
  return -1;
}
```
Considerando **haystack.length = n** y **needle.length = m**

Complejidad temporal | Complejidad espacial
--|--
O(n*m)|O(1)


## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/Jc2b/0).
