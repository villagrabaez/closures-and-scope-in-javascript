# Closures y scope en Javascript

## Que es un closure

Es la combinación de una función y el ámbito léxico en la cual ha sido declarada dicha función. Un closure recuerda el ámbito en el cual ha sido creado.

El closure recuerda la asignación del valor anterior porque queda en la memoria, al pasarle un nuevo valor nos dará como resultado la suma de estos elementos porque estamos usando la asignación de adición.

    const moneyBox = () => {
      var saveCoins = 0;
      const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
      }
      return countCoins;
    }
    
    let myMoneyBox = moneyBox();
    
    myMoneyBox(4); // 4
    myMoneyBox(6); // 10
    myMoneyBox(8); // 18
    myMoneyBox(2); // 20

### Ambito lexico en closures

El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento.

Esto significa que podemos acceder al valor `count` dentro de la función porque es el alcance donde está asignado.

Podemos tener varias formas de manejar la constante `buildCount`, significa que la podemos asignar a `myCount` y `myOtherCount`. Trabajaremos con el scope (alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.

    const buildCount = (i) => {
      let count = i;
      const displayCount = () => {
        console.log(count++);
      }
      return displayCount;
    }
    
    const myCount = buildCount(1);
    myCount();
    myCount();
    myCount();
    
    const myOtherCount = buildCount(10);
    myOtherCount();
    myOtherCount();
    myOtherCount();

### Cómo crear variables privadas con closures

Javascript por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.

    const person = () => {
      var saveName = 'Name';
      return {
        getName: () => {
          return saveName;
        },
        setName: (name) => {
          saveName = name;
        }
      }
    }
    
    newPerson = person();
    console.log(newPerson.getName());
    newPerson.setName('new Name');
    console.log(newPerson.getName());

### Loops

Podemos crear Closures de diferentes formas y también de forma involuntaria, esto significa que no tenemos control de lo que estamos creando, tenemos que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera nosotros no controlemos muchas veces sucede porque no establecimos nuestros elementos correctamente.

Con el uso del Scope y los Closures podemos optimizar nuestros proyectos sin ningún problema.

    const anotherFunction = () => {
      for (var i = 0; i < 10; i++) {
        setTimeout(() => {console.log(i)}, 1000);
      }
    }
    
    anotherFunction();

## ¿Qué es el hoisting?

Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser interpretado por el navegador.

De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido declarado dentro de esta estructura.

El ‘levantamiento’ del que hablan es mas a fines didácticos y está bien, pero no es tan así, no es que FISICAMENTE levanta las declaraciones y las pone al principio como muchos explican. Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración(todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, JS va a asignarle referencias a cada una.
Si es:

var : asigna la referencia undefined (si de acá viene el famoso undefined)

let/const: asigna la referencia uninitialized(declarado pero no inicializado)

función: guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)

    a = 2;
    var a;
    console.log(a); // 2
    
    // -------------------
    
    nameOfDog('Betty');
    
    function nameOfDog(name) {
      console.log(name);
    }
    
    // Betty

## Que es el scope

El scope se define como el alcance que va a tener una variable dentro del codigo. Pueden ser globales y locales.

### Scope global

Las variables definidas en el scope global podran ser accedidas desde cualquier parte del codigo.

    var hello = 'hello';
    let world = 'Hello World';
    const helloWorld = 'Hello World!';

    const anotherFunction = () => {
      console.log(hello);
      console.log(world);
      console.log(helloWorld);
    }

    anotherFunction();

Hay que tener especial cuidado cuando se trabaja en el scope global ya que es muy comun cometer de reasignacion de variables definidas con `var`.

    var hello = "Hello";
    var hellos = "Hello +";

Este es un problema que se da muy frecuentemente cuando usamos la palabra reservada `var` de Javascript. Por eso se recomienda el uso de `let` para la asignacion de variables.

### Scope local

El scope local nos permite acceder una variable en un bloque de código o estructura como las funciones. Por lo tanto el scope global no puede acceder a las variables dentro de un bloque de código.

Si se anida una función dentro de otra, las variables de la primera función van a poder ser accedidas dentro de la segunda.

    const helloWorld = () => {
      const hello = 'Hello World!';
      console.log(hello);
    }

    helloWorld();

Como vemos, la variable `hello` esta definida dentro de una funcion lo que significa que no esta disponible en el scope global, de manera que si nostros intentaramos acceder a ella, Javascript nos retornaria un error.

### Scope de una funcion

Estando dentro de la estructura de una funcion, podemos reasignar valores de variables definidas con la palabra reservada `var`, mientras que las que son definidas con la plabra reservada `let` no pueden ser reasignadas en el scope local.

> Se recomienda evitar el uso de `var` para asignar variables, ya que esto nos ayuda a evitar error de reasignacion en nuestro programa. Usemos `let` y `const` en nuestros proyectos.

### Scope de un bloque de codigo

Cuando declaramos una variable tipo `var` dentro de una función su scope va a poder ser accedido desde cualquier bloque dentro de la función por otro lado `let` y `const` solo funcionaran dentro del bloque declarado.

    const fruits = () => {
      if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'orange';
      }
      console.log(fruit1);
      console.log(fruit2);
      console.log(fruit3);
    }

    fruits();

    // apple
    // error
    // error


## Debugging

