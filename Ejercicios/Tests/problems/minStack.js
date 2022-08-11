// Un stack o Pila es LIFO (last in first out), 
// osea el ultimo que entro es el primeor en salir. 
// Necesitas implementar un stack que tenga los siguientes métodos: 
// - push(value) // para añadir elementos 
// - pop() // para sacar un elemento 
// - min () // ver el elemento con el valor minimo Todas estas funciones tienen que correr en 0(1) 
// No se puede usar ningún array method 
// Idea: Tener una estructura separada para guardar el minimo 
// de cada nodo que se agrega, 
// y cuando sacamos el nodo removemos ese minimo.

//dos clases, una con metodos pop,push,min

class Node {
    constructor(value) {
        this.valor = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.primero = null;
    }

    push(elemento) {
        if(!this.primero){
            this.primero = new Node (elemento);
        }

        else {
            const nuevoNodo = new Node(elemento);
            nuevoNodo.next = this.primero;
            this.primero = nuevoNodo;
        }
    }

    pop() {
        const primeroSalir = this.primero;
        this.primero = primeroSalir && primeroSalir.next;
        return primeroSalir && primeroSalir.valor;
    }

    min(){
        return this.primero && this.primero.valor;
    }
}


