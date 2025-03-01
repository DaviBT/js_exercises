// obtém info da localidade
const currenctLocale = Intl.DateTimeFormat().resolvedOptions();
console.log(currenctLocale)
// {
//   locale: 'pt-BR',
//   calendar: 'gregory',
//   numberingSystem: 'latn',
//   timeZone: 'America/Sao_Paulo',
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit'
// }


// exibindo de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
// 01/03/2025

console.log(new Intl.DateTimeFormat("en-US", {day: '2-digit', month: '2-digit', year: 'numeric'}).format(new Date()))
// 03/01/2025