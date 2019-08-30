// module.exports = () => {
//   // ...
// };


// const prueba = () => {
//   console.log('hola');
//   return 'Hola del return'
// }

// module.exports = prueba

const mdLinks = require("md-links");

// Caso 1 .- Ruta relativa sin options
mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file, line }]
  })
  .catch(console.error);

// Caso  .- Ruta relativa con option (validate)
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

// Caso 3 .- Ruta relativa de un directorio sin options
mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file, line }]
  })
  .catch(console.error);