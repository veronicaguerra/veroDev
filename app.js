/* USO DEL PROMPT

let nombrePrompt = prompt("Ingrese su nombre");

console.log(nombrePrompt);

alert(nombrePrompt);


// tres formas de crear objetos

//1) forma literal
let familia1 =  {
    nombre:'Thais',
    miembro:'mama'
};
console.log(familia1.nombre + " " + familia1.miembro + " " + " 1- Forma literal")
console.log(familia1["nombre"] + " segunda forma de imprimir valor de propiedad de un objeto");
console.log(typeof(familia1));
//2) usando NEW crea una instancia tipo objeto

let familia2 = new Object();
    familia2.nombre2='Matias';
    familia2.miembro2='sobrino';

console.log(familia2.nombre2 + " " + familia2.miembro2 + " " + " 2- Usando NEW")
console.log(typeof(familia2));

//3) crear una variable que contiene una funcion que concatena 

let familiaF = function(nombre3, miembro3){
    var nombreF = nombre3;
    var miembroF = miembro3;
    return nombreF +" "+ miembroF + " ";
};

let familia3 = familiaF("Vincent","sobrino2");

console.log(familia3 + " variable de fx que concatena");
console.log(typeof(familia3));

//4) imprimir dentro de la función

let familiaPrint = function(nombre4,miembro4) {
    var nombreP = nombre4;
    var miembroP = miembro4;
    console.log(nombreP + " " + miembroP + " Impresion desde dentro fx familiaPrint")
};

familiaPrint("Taty","amante");
var familiaX2 = familiaF("Matias","sobrino1") + familiaF("Vincent","sobrino2");
console.log(familiaX2 + " Mostrando variable contiene a familiaFx2")
//console.log(familiaF.nombreF + " " + familiaF.miembroF + " parametro incorrecto en la llamada de la Fx");

//tipos de 
let tipo = new Date();
let yearD = tipo.getFullYear;

console.log(typeof(tipo) + " new date() " + typeof(yearD + " getfullyear property " + typeof(Date()) + " typeof date()"));

console.log(tipo + " new date() " + yearD + " getfullyear property ");

// mutabilidad de valores en objetos

let signo ={
    valor: "",
    vacio: ""
};

//usos de ciclos
while(signo.valor!=="esc"){
signo.valor= prompt("introduce tu signo ");
signo.valor.toLowerCase();
alert("Eres: "signo.valor + " introduce 'esc' si quieres salir")
};

/*let tomateSize = 40;

background(20, 61, 184); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);


fill(242, 231, 116);
noStroke();
triangle(320,276,165,78,73,230);

strokeWeight(20);
stroke(186, 134, 55);
line(80,231,160,73);

noStroke();
fill(224, 40, 7);
ellipse(144,216,tomateSize,tomateSize);
fill(222, 62, 13);
ellipse(197,174,40,40);
fill(222, 62, 13);
ellipse(250,229,40,40);*/

class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  }
  
  const cuadrado = new Rectangulo(10, 10);
  
  console.log(cuadrado.area); // 100