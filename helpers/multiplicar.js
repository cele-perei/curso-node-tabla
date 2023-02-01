const fs = require('node:fs');
const colors = require('colors');
/*const crearArchivo = (base = 5) => {  //solución con promesa

    return new Promise ( (resolve, reject) => {
        let salida = `===============================\n         Tabla del ${base}\n===============================\n`;
        for (let i = 1; i < 11; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        //console.log(`Tabla-${base} creada.`);
        resolve(`Tabla-${base}`)
        reject ("No existe");
    });
}
*/
const crearArchivo = async (base = 5, listar = false, hasta = 10) => { //solución con async
    try {
        let consola = `===============================         
        Tabla del ${base}\n===============================\n`.blue;
        let salida = `===============================         
        Tabla del ${base}\n===============================\n`;
    for (let i = 1; i < hasta+1; i++) {
        consola += `${base} ${'x'.blue.bold} ${i} ${'='.blue.bold} ${base*i}\n`.white;
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    if (listar)
        console.log(consola);
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return`Tabla-${base}`
    } catch (err) {
        throw err;
    }
}
    

module.exports = {
    crearArchivo : crearArchivo
}