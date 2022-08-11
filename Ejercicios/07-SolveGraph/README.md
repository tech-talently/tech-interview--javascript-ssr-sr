

# Solve Graph
## Introducción
Un grafo/graph es un set de vertices conectados entre ellos por aristas.

### Undirected vs. Directed Graphs
<p>
<img src='../../images/graph.png' </img>
</p>

### ¿Qué hay que hacer?
Escribe una función que determine si existe un path entre dos vertices de un graph.   

El graph será representado como un objeto. Cada key representa un vértice. El valor, todos los vertices que pueden ser alcanzados.

El graph, será un *'directed graph'*.

<p><img src='../../images/graph 2.png'</img></p>

Como observamos, en la imagen de la izquierda el nodo 'a' se conecta con el nodo 'b', el nodo 'b' con el nodo 'c' y 'd' y por último, el nodo 'c' con el nodo 'd'.

## Solución
### En palabras
- La solución puede ser un algoritmo **Breadth-First** o **Depth-First**
- Pero... los graphs pueden ser cíclicos
  -  Si empezamos recorriendo el vértice A, eventualmente vamos a llegar al vértice R que apunta devuelta al A.

```javascript
{
    a: ['c'],
    c: ['s', 'r'],
    r: ['a'],
    s: [ ]
}
```
- ¿El problema? Un algoritmo normal de BFS/DFS terminaría en un **loop infinito**.
- Por lo tanto, tu algoritmo tiene que traquear todos los vertices que visitó
- Si un vértice ha sido visitado sabemos que no tenemos que recorrer sus aristas por segunda vez
- El **algoritmo se completa** cuando se ha encontrado el target o cuando todas las posibilidades fueron recorridas.

### Solución depth-first

```javascript
const graph = {
a: ['c'],
b: ['c'],
c: ['s', 'r'],
d: ['a'],
s: ['a', 'c'],
r: ['d'],
z: ['z']
};
function solveGraphDFS(graph, start, end, visited = {}) {
    // nos fijamos si ya visitamos este vértice
    if (visited[start]) return false;
    // lo agregamos a los visitados
    visited[start] = true;
    // iteramos sobre el arreglo de vértices
    for (let i = 0; i < graph[start].length; i += 1) {
        // Si encontramos el target devolvemos true
        if (end === graph[start][i]) return true;
        // si no llamamos recursivamente a la función para ver si sus aristas están conectadas
        else if (solveGraphDFS(graph, graph[start][i], end, visited)) return true
}
// si no devolvemos false
return false;
}

solveGraphDFS(graph, 'a', 'r') // true
solveGraphDFS(graph, 's', 'b') // false
```

Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(n)


### Solución breadth-first approach
```javascript
const graph = {
a: ['c'],
b: ['c'],
c: ['s', 'r'],
d: ['a'],
s: ['a', 'c'],
r: ['d'],
z: ['z']
};
function solveGraphBFS(graph, start, end, visited = {}, queue = []) {
    // nos fijamos si ya visitamos este vértice
    if (visited[start]) return false;
    // lo agregamos a los visitados
    visited[start] = true;
    // iteramos sobre el arreglo de vértices
    for (let i = 0; i < graph[start].length; i += 1) {
    // agregamos todas sus conexiones al queue
    queue.push(graph[start][i]);
}
// comparamos si el siguiente del queue es nuestro target
// sino llamamos recursivamente a la función con el start del siguiente del queue
return queue[0] === end || solveGraphBFS(graph, queue.shift(), end, visited, queue);
}
solveGraphBFS(graph, 'a', 'r'); // true
solveGraphBFS(graph, 's', 'b'); // false
```
Complejidad Temporal | Complejidad Espacial
--|--
O(n)|O(n)

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JuS9).
