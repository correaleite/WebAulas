let texto1 = "Bom";
let texto2 = "Dia";
let texto3 = texto1.concat(" ",texto2);
console.log(texto3);

let texto = "Maçã,Banana,Maracuja";

let parte1 = texto.slice(5,10);
console.log(parte1);
let parte2 = texto.substring(7,13);
console.log(parte2);
let parte3 = texto.substr(7,6);
console.log(parte3);
let upper = texto.toUpperCase();
console.log(upper);
let lower = texto.toLowerCase();
console.log(lower);

let texto4 ="          Agora é com trim...    ";
let trim1 = texto4.trim();
console.log(trim1);

let resultado = texto1.repeat(4);
console.log(resultado);
let textoAtual = "Faculdade Fiap TDS";
let textoNovo = textoAtual.replace("Faculdade", "Curso");
console.log(textoNovo);
let texto5 = "Eu amo Cachorro e Gato, mas Cachorro é insano";
let textoNovo1 = texto5.replaceAll("Cachorro", "Gato");
console.log(textoNovo1);
let texto6 = "Por favor, localize no texto";
let index = texto6.indexOf("localize");
console.log(index);
let x = 2;
let exponente =  x.toExponential(2);
console.log(exponente);