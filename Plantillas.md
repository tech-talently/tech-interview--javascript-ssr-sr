

<h1 align='center'>Nombre ejercicio</h1>

<div>
<p align='center'>Encontrar el indice de la primera apariciónde un string (needle) dentro de otro(haystack)</p>
<hr>


<h4 align='center'>
needle: redux haystack: react-redux output: 5 
</h4>
<h4 align='center'>
needle: puntualhaystack: pinkyoutput: -1
</h4>
</div>

<h3 align='center'>no se puede usar indexOf()</h3>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<h1> Solucion Humana</h1>

- Visitar cada caracter del haystack
- Si empieza con el primer
    - Comparar el segundo caracter del needle con elsiguiente del haystack
    - continuar hasta llegar al final del needle o hastaque una comparación no sea igual
        - Si llegamos al final del needle es qencontramos el indice
- Si no empieza con el mismo caracter q la needleseguir al proximo caracter
- Si llegamos al final del haystack no encontramos elmatch

<br/>
<pre><code>
const findNeedle = (haystack, needle) => {
    // iteramos sobre el haystackfor 
    (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
        // comenzamos a iterar sobre el needle
        for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1 ) {
            // comparamos la letra del needle en la que estamos con la letra del haystack
            // cuando no hay match cortamos de comparar el needle
            if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
            // si terminamos de recorrer la needle devolvemos el haystackIndex
            if (needleIndex + 1 === needle.length) return haystackIndex;
        } 
    }
                 // una vez que termina el loop devolvemos -1
                 return-1;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
</div>
<hr>
<br/>
<h2>Solucion</h2>
<pre><code>
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
    // una vez que termina el loop devolvemos -1
    return-1;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div align="center">
        Complejidad de tiempo
            <p>O(n*m)</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>0(1)</p>
    </div>
</div>

<hr>
<br/>
<h2>Solucion</h2>
<pre><code>
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
    // una vez que termina el loop devolvemos -1
    return-1;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div align="center">
        Complejidad de tiempo
            <p>O(n*m)</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>0(1)</p>
    </div>
</div>

<hr>
<br/>
<h2>Solucion Alternativa</h2>
<pre><code>
function findNeedle2(haystack, needle){
    // iterar sobre el haystack
    for (let i = 0; i < haystack.length; i += 1) {
        // si la substring matchea el neddle podemos devoler el valor de i
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;      
        }  
    }
    return-1;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
</div>

<hr>
<br/>
<h2>Solucion Alternativa</h2>
<pre><code>
function findNeedle2(haystack, needle){
    // iterar sobre el haystack
    for (let i = 0; i < haystack.length; i += 1) {
        // si la substring matchea el neddle podemos devoler el valor de i
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return-1;
}
</code></pre>

<div style="display:grid ;justify-content: space-evenly; grid-template-columns: 400px 400px ;">
    <div align="center">
        Complejidad de tiempo
            <p>???</p>
    </div>
    <div align="center">
        Complejidad de espacio
            <p>???</p>
    </div>
</div>
<hr>
<h4>Soluciones en</h4>
<a style="font-size:20px" href="https://repl.it/Jc2b/0">repl.it</a>


