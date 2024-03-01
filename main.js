import entradaDados from 'readline-sync';


let trasejado = " ";
trasejado = trasejado.padEnd(30,"-");

console.log(trasejado+" JOGO DA FORCA "+trasejado);

let nomeUsuario=entradaDados.question("Digite seu nome: ")
console.log(`\nBem vindo ${nomeUsuario}\n`);



