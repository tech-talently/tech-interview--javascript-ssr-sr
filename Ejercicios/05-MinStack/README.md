

# Min Stack
## Introducción
Para poder comprender el objetivo de esta actividad necesitamos saber **¿Qué es un stack?** Un stack, también conocido como pila es **LIFO** (Last-In First-Out), es decir, el último en entrar es el primero en salir.       

En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:
1. **push(value) :** añadir el elemento, value, al stack.
2. **pop ( ) :** sacar un elemento del stack.
3. **min ( ) :** obtener el elemento con el valor mínimo.

#### Importante
* **TODOS** los métodos mencionados anteriormente deben ser de O(1).
* Para la resolución del ejercicio no se puede utilizar **ningún** *Array method*

## Solución
### En palabras

1. Implementar un stack normal
2. Luego, implementar un stack con un requisito mas > encontrar el mínimo

##### Importante

**NO PUEDES** guardar el valor mínimo y cada vez que agregas un nuevo valor compararlo **¿POR QUÉ?**
**( ! ) IDEA:** Tener una estructura separada para guardar el mínimo por cada nodo que se agrega, y cuando sacamos el nodo removemos ese mínimo

### Primer aproximación
Una primer aproximación para la resolución de este ejercicio es realizar un stack común.

```javascript
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;  
    }
}

class Stack{
    constructor(value) {
        this.top = null;  
    }  
    
    push(val) {
        if(!this.top) this.top = new Node(val);
        else {
            const newTop = new Node(val);      
            newTop.next = this.top;
            this.top = newTop;    
            }  
    }  

    pop() {
            const oldTop = this.top;
            this.top = oldTop && oldTop.next;
            return oldTop && oldTop.value;  
    }  
    
    peek() {
            return this.top && this.top.value  
    }
}
```

### Extendemos el stack
Luego, mejoramos la resolución previamente presentada. Extendemos el stack para agregarle el mínimo

```javascript
class MinStack extends Stack{
    constructor() {
        super();
        this.minimum = new Stack();   
        }  
    
    push(val) {
        if(!this.top) {
            this.top = new Node(val);
            this.minimum.push(val);    
        }
        else {
            const newTop = new Node(val);      
            newTop.next = this.top;
            this.top = newTop;
            if(this.minimum.peek() > val) this.minimum.push(val);
            else this.minimum.push(this.minimum.peek());    
        }  
    }  
    
    pop() {
        const oldTop = this.top;
        this.top = oldTop && oldTop.next;
        this.minimum.pop();return oldTop && oldTop.value;  
    }  
    
    min() {
        return this.minimum.peek();  
    }
}
```

## Complejidad Espacial
La complejidad espacial del ejercicio sigue siendo de O(n) con la diferencia que ahora almacenamos el doble de la información, O(2n)

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/JqWw).
