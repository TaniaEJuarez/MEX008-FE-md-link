import { resolve } from "path";
import { rejects } from "assert";

let calculate = (num1, num2) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let sum = num1 + num2;
            if(sum >5){
                resolve(num1+num2);
            }else{
                reject('Error al procesar los datos')
            }
            
        }, 2000);
    });
}

module.exports = {
    calculate   
}