  // Lectura de archivo Markdown //
  const fs = require ('fs');
  const fileLoad = // al archivo que cargue el usuario //
  const fileLoadMd = fileLoad.lastIndexOf
  
  fs.readFile(fileLoad, 'md', (error, data) => { // en md quiero indicarle que lea solo archivos markdown //
    if (error){
      console.log(`Error ${error}`);
    }else{
      console.log(data);
    }
  });


//funcion para leer un directorio de archivos con las rutas absolutas //
fs.readdir('/home/tjuarez/Documentos/PROYECTOS/MdLinks/MEX008-FE-md-link/READMEPaths.md', (error, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });