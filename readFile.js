
let fs = require('fs');
    fs.readFile('./READMEPaths.md', 'UTF-8', (error, file) => {
        if(error){
            throw error;
        }
        console.log(file);
    });
    console.log('Contenido del archivo...');
