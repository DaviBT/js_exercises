// pacote dayJS
const dayjs = require('dayjs');
require('dayjs/locale/pt-br')

const agora = dayjs();
const data = dayjs('2014-09-21');

const dataFormatada = data.locale('pt-br').format('DD MMMM YYYY');

console.log(dataFormatada);
// output: 21 setembro 2014