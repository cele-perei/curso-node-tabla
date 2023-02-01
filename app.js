const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
//console.log(argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
//console.log('hello'.rainbow);
crearArchivo(argv.base, argv.listar, argv.hasta)
.then ( nombreArchivo => console.log(`Todo salió bien, ${nombreArchivo} creado.`.blue))
.catch ( err => console.log(err));