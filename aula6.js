const dataAtual = new Date();

console.log(dataAtual);

//Mostra a data manipulada
console.log(dataAtual.getDate());

//Visualizar apenas o mês
console.log(dataAtual.getMonth()+1);

//Pegando o ano completo
console.log(dataAtual.getFullYear());

//Pegando horas, minutos e segundos
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

const data = new Date();

//Criando uma variavel formatada manualmente
const dataFormatada = data.getDate()+" / "+(data.getMonth()+1)+" / "+data.getFullYear()
console.log("Data formatada:", dataFormatada)