// module.exports = () => {
//   // ...
// };

// ejemplo para exportar e imprimir en consola //
const prueba = () => {
  console.log('Hi Tania');
  return 'Greeting'
}

module.exports = prueba

// Ejemplo del tutorial node.js 7 file system//
fs.readFile('README.md', 'utf-8', (error, data) => {
  if (error){
    console.log(`Error ${error}`);
  }else{
    console.log(data);
  }
});

// // Caso 1 .- Ruta relativa sin options
// mdLinks("./some/example.md")
//   .then(links => {
//     // => [{ href, text, file, line }]
//   })
//   .catch(console.error);

// // Caso  .- Ruta relativa con option (validate)
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