let cores = ["azul","rosa"];
cores.push("vermelho");
console.log(cores);

cores.pop();
console.log(cores);

let numeros = [1,2,3,4];
numeros.forEach(numero => {
    console.log(numero);
});

//Percorre o array e retorna um novo array com os valores transformados
let dobrados = numeros.map(numero => numero*2);
console.log(dobrados);

let numeros1 = [1,2,3,4,5,10,20,30,40,50];
let maioresQueDez = numeros1.filter(numero => numero > 10);
console.log(maioresQueDez);

const numeros2 = [1,2,3];
//Criando uma cópia usando spread
const copia = [...numeros2];
console.log("Original: ", numeros2);
console.log("Cópia: ", copia);

const lista1 = [1,2];
const lista2 = [3,4];

//Unindo as arrays com spread
const listaCompleta = [...lista1,...lista2];
console.log(listaCompleta);


