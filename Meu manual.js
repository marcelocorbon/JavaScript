// Meu manual de JavaScript Marcelo Corbon

// Variáveis
// Para guardar informações em JavaScript, eu preciso criar variáveis. Para criar uma variável, eu uso as palavras "let" ou "var" seguido do nome que eu escolher.
// Exemplo:
let idade = 25;
var nome = "Maria";

// Operadores
// Operadores são usados para realizar cálculos em JavaScript. Os operadores básicos incluem: adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%).
// Exemplo:
let soma = 2 + 3; // resultado: 5
let subtracao = 5 - 2; // resultado: 3
let multiplicacao = 2 * 3; // resultado: 6
let divisao = 10 / 2; // resultado: 5
let modulo = 10 % 3; // resultado: 1

// Estruturas de Controle
// As estruturas de controle são usadas para controlar o fluxo de execução do meu código. As estruturas de controle incluem: if, else if, else, switch, while, do while e for.
// Exemplo:
if (idade >= 18) {
  console.log("Eu sou maior de idade");
} else {
  console.log("Eu sou menor de idade");
}

// Funções
// As funções são blocos de código que podem ser reutilizados. Para criar uma função, eu preciso usar a palavra "function" seguido do nome da função e dos parâmetros que ela recebe. Depois, eu incluo o bloco de código que eu quero que a função execute. Eu posso chamar a função quando quiser usar o código que está dentro dela.
// Exemplo:
function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3); // resultado: 5

// Objetos
// Os objetos são uma forma de agrupar informações relacionadas. Eu posso criar um objeto com informações que eu quero guardar e depois acessar essas informações usando a notação de ponto ou de colchetes.
// Exemplo:
let pessoa = {
  nome: "Maria",
  idade: 25,
  cidade: "São Paulo"
};

console.log(pessoa.nome); // resultado: Maria
console.log(pessoa["idade"]); // resultado: 25

// Arrays
// Os arrays são usados para guardar listas de informações. Eu posso criar um array com as informações que eu quero guardar e depois acessar essas informações usando a notação de colchetes.
// Exemplo:
let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // resultado: 1
console.log(numeros[2]); // resultado: 3
