// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo qualquer e mostre uma contagem até esse valor:
// - Exemplo: Valor digitado: 26
// Contagem: 1, 2, 3, 4, 5, 6, 7, ... 23, 24, 25, 26 e exiba a mensagem FIM ao final da contagem!

// Instalar o módulo prompt-sync (código de instalação: npm install prompt-sync)
const prompt = require('prompt-sync') ();

número = prompt("Digite um número inteiro e positivo:");

for (i = 1; i <= número; i++) {
  console.log(i);
}

console.log("FIM");