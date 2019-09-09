// Identifica y lee los url contenidos en el archivo y devuelve solo el numero de url contenidas.
// Para ejecutar, indicar node searchCount.js (que es el nombre del archivo) y 
// /home/tjuarez/Documentos/PROYECTOS/MdLinks/MEX008-FE-md-link/READMEPaths.md (que es el path del archivo que voy a leer)

let fs = require('fs');
let file = process.argv[2] // guardar el arreglo en una variable. indicar a partir de que posicion inicia el path //  
let buf = fs.readFileSync(file); // Declarar una variable para guardar el buffer que nos resulta de fs //
let str = buf.toString(); // pasar el buffer reultante a un string //
console.log('Numero de direcciones URL encontradas en este archivo...');
console.log(str.match(new RegExp('https://', 'g')).length); // la propiedad match, identifica coincidencias, asi mismo necesita el argumento de la letra g para indicar que quiero me lo busque en todo el archivo //s
