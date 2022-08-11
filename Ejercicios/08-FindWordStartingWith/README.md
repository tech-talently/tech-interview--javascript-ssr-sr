

# Find Word Starting With
## Introducción
Dado un "libro" y un string para buscar,  devolver todos los indices donde la palabra empieza con ese string.   

El libro vendrá con dos cosas: un id y un texto. **La búsqueda tiene que ser case insensitive.**

#### Ejemplo
```javascript
const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
}
```

findWordsStartingWith **(book, 'de')**   
**output:** [23]

findWordsStartingWith **(book, 'un')**   
**output:** [ 6, 14, 43]


## Solución
### Primer alternativa
Una alternativa, **naive**, es iterar a través del texto.
```javascript
const findWordsStartingWithNaive = (book, query) => {
        const separators = {
            ' ': true,
            '.': true,
            ',': true,
        }
        const text = book.text.toLowerCase();
        const finds = [];
        for (let i = 0; i < text.length; i += 1) {
            if (i !== 0 && !separators[text[i-1]]) continue;
            for (let j = 0; j < query.length; j += 1) {
                if (query[j] !== text[i + j]) {
                    i += j;
                    break;
            }   
            if (j === query.length - 1){
                finds.push(i);
                i += j;
            }
        }
    }
    return finds;
}
```
**Complejidad temporal:** O(n)

### Segunda Alternativa
Otra alternativa, es utilizar un **trie**. Pero ... ¿Que es un trie?

#### Ejemplo
```javascript
{
    [char]: {
        data: data,
        [nextChar]: {
            data: data,
            // ...
        }
    }
}
```
###### ¿Podes encontrar el mensaje secreto?

```javascript
const trie = {
    t: {
        indexes: [0, 5],
        o: {
            indexes:[0, 5],
            n: {
                indexes: [0, 5],
                i: {
                    indexes: [0]
                },
                t: {
                    indexes: [5],
                    o:{
                        indexes: [5]
                    }
                }
            }
        }
    }
}
```
###### Equivale a:
```javascript
buildTrie('Toni tonto')
```

#### ¿Por qué?
Porque **repetir la ejecución va a ser mucho mas rápido con un árbol**.


### Paso 1: Haz el TRIE
```javascript
const buildTrie = (text) => {
    const trie = {};
    const separators = {
    ' ': true,
    '.': true,
    ',': true,
    }
    for (let i = 0; i < text.length; i += 1) {
        let currentLetter = trie;
        const startingIndex = i;
        while(text[i] && !separators[text[i]]) {
            currentLetter[text[i]] = currentLetter[text[i]] || { indexes: [] }
            currentLetter = currentLetter[text[i]];
            currentLetter.indexes.push(startingIndex);
            i++;
        }
    }
    return trie;
};
```
### Paso 2:
Una vez que el TRIE es creado todo lo que necesitas hacer es **iterar a través del largo del string**, **recorrer los nodos hasta** que llegues al **final** y luego, **retornar el arreglo de indices en ese punto**.

```javascript
const tries = {};
const findOrCreateTrie = ({ id, text }) => {
    tries[id] = tries[id] || buildTrie(text);
    return tries[id];
};

const findWordsStartingWith = (book, query) => {
    const trie = findOrCreateTrie(book)
    let currentLetter = trie;
    query = query.toLowerCase();
    for (let i = 0; i < query.length && currentLetter; i++) {
        currentLetter = currentLetter[query[i]]
    }
    return currentLetter ? currentLetter.indexes: [];
}
```

## Complejidad
### Buscar si hay que construir el TRIE
Complejidad Temporal | Complejidad Espacial
--|--
O(n+m)|O(1)

### Buscar si el TRIE ya fue construido
Complejidad Temporal | Complejidad Espacial
--|--
O(m)|O(1

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JvdR/9).
