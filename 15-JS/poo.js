/* 
POO

Clases: se refiere a nuestro molde o plantilla para que podamos crear objetos. Utiliza la palabra reservada class.
Constructor: es una función oblogatoria para crear objetos a través de características o atributos específicos.
Objetos: es lo que construimos a través de la clase y ek constructor.
Atributo: Se refiere a las características o propiedades de mi objeto.
Método: lo que hace un objeto.
Instanciación: se refiere a cuando ya creamos la clase, el constructor y el objeto.

principios básicos de POO
Herencia: cuenta con la palabra reservada extends. Permite reutilizar el código de la clase padre en la clase hijo.
Polimorfismo: el comportamiento de cada objeto de la misma clase a un método.
Encapsulamiento: se refiere a encerrar y/o ocultar el código.
Abstracción: se refiere a ser muy específicos con los objetos (resumir).
Modularidad: nos permite reutilizar código, hacer modificaciones, tener orden, entender y mentener el código.

Métodos estáticos: utiliza la palabra reservada static. Nos permite ejecutar una clase sin instanciar al objeto.
Métodos accesores: son funciones que te permiten obtener y establecer los valores de las propiedades de un objeto. Getters para obtener o devolver y Setters para asignar o modificar.  

Principios SOLID: 
Principio de responsabilidad única (SRP): se refiere a que cada que asignamos una clase, objeto, etc. debe ser única.
Principio de abierto y cerrado (OCP): se refiere a que debemos poder extender el código ya existente de ser necesario.
Principio de sustitución de Liskov (LSP): se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo.
Principio de segregación de interfaces (ISP): se refiere a tener distintas interfaces.
Principio de investigación de dependencias (DIP): trabaja a través de la abstracción para que el código no dependa de detalles específicos.

Objetos json
JavaScript Object Notation
Se manejan através de clave-valor y no tienen métodos.

*/

class ch47 { //Clase principal o padre
    constructor(nombre,apellido,email,edad) { //Nos permite crear el objeto
        this.name = nombre; //this nos permite seleccionar el objeto que voy a crear.
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        // this.info = `Hola soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años`
    }

    /* infoIntegrantes(){
        console.log(this.info);
    } */

    get infoIntegrantes(){
        return `Hola soy ${this.name} ${this.lastName}, mi correo es ${this.email} y tengo ${this.age} años`;
    }

    set cambiarNombre(nuevoNombre){
        this.name = nuevoNombre;
    }
}

class instruccion extends ch47 {
    constructor(nombre,apellido,email,edad,escolaridad) {
        super(nombre,apellido,email,edad)
        this.grado = escolaridad;
    }
    static darSesiones(){
        console.log('Hoy no hay sesión');
    }
}

class mentoria extends ch47 {
    constructor(nombre,apellido,email,edad,telefono) {
        super(nombre,apellido,email,edad)
        this.tel = telefono;
    }
    static darMentoria(){
        console.log('Tienes muchos mentees');
    }
}

class participante extends ch47 {
    constructor(nombre,apellido,email,edad,telefono,ciudad) {
        super(nombre,apellido,email,edad)
        this.city = ciudad;
        this.info2 = `Hola ${this.name} ${this.lastName}, eres un participante. Tu correo es ${this.email}tu edad es ${this.age} años y tu ciudad es ${this.city}. Bienvenido a la CH47`
    }
    static infoParticipante(participanteObj){
        console.log(participanteObj.info2);
    }
}

const inte1 = new ch47('Xaxiry','González','xaxiry@gmail.com',27); //Los objetos se deben definir con const
const inte2 = new instruccion('Liliana','Aguirre','lili@gmail.com',30,'Licenciatura');
const inte3 = new mentoria('Eva','Alvarado','eva@gmail.com',35,55833029);
const inte4 = new participante('Cristian','Gamboa','cris.gamboa.99@gmail.com',25,55829918,'México');


console.log(inte1.infoIntegrantes);
instruccion.darSesiones();
mentoria.darMentoria();
participante.infoParticipante(inte4);
inte1.cambiarNombre = "Magaly" 
console.log (inte1.infoIntegrantes);