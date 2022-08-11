

# Clock minute adder
## Introducción
Dada una hora en string en **formato HH:MM**, y un número de minutos.
Devolver la nueva hora pasados esos minutos.

##### IMPORTANTE
El reloj es de 12 horas y tiene que devolverse en el formato HH:MM. Recuerda que no existen las 00hs.

##### Ejemplos:
clockMinuteAdder (**'09:00', 20**);   
**ouput**: '09:20'    

clockMinuteAdder (**'01:30', 30**);    
**ouput**: '02:00'     

clockMinuteAdder (**'12:05', 100**);      
**ouput**: '01:45'

## Solución
```javascript
const clockMinuteAdder = (time, minutesToAdd) => {
    // Separo las horas y los minutos
    const [hours, minutes] = time.split(':');

    // agrego el total de minutos y el total de horas
    const totalMinutes = (minutesToAdd + parseInt(minutes));
    const totalHours = Math.floor(totalMinutes/60) + parseInt(hours);

    // saco las nuevas horas y minutos
    const newHours = ((totalHours - 1) % 12) + 1 ; // para que no quede 0hrs
    const newMinutes = totalMinutes % 60;

    // le agrego formato de ceros adelante si es necesario
    const formatHours = newHours > 9 ? newHours : `0${newHours}`;
    const formatMinutes = newMinutes > 9 ? newMinutes : `0${newMinutes}`;

    //devuelvo la nueva hora
    return `${formatHours}:${formatMinutes}`;
};
```

## Código
Pueden encontrar las soluciones recién mencionadas en el siguiente [link](https://repl.it/KEvy/3).
