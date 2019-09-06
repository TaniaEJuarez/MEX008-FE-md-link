
let fs = require('fs');
let file = process.argv[2] // guardar el arreglo en una variable. indicar a partir de que posicion inicia el path //
    // Declarar una variable para guardar el buffer que nos resulta de fs //
    let buf = fs.readFileSync(file);
    let str = buf.toString(); // pasar el buffer reultante a un string //
    console.log(str.match(new RegExp('https://')).length); // colocar a partir de qué signo inicia a leer el path //


  // module.exports = () => {
  // // // Caso 2 .- Ruta relativa con option (validate)
  // mdLinks("./some/example.md", { validate: true })
  //   .then(links => {
  //     // => [{ href, text, file, status, ok }]
  //   })
  //   .catch(console.error);

// // Caso 3 .- Ruta relativa de un directorio sin options
// mdLinks("./some/dir")
//   .then(links => {
//     // => [{ href, text, file, line }]
//   })
//   .catch(console.error);


// Promise //
// prom.calcular(2,3).then((result) => {
//   console.log(result);
// },(error) => {
//   console.log(error);
// });
