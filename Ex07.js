// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
// Exemplo:
// - Primeiro Valor: 3
// - Último Valor: 10
// - Incremento: 2
// - Contagem: 3, 5, 7, 9 e exiba a mensagem FIM ao final da contagem!!
// O programa acima vai ter um problema quando digitarmos o primeiro valor maior que o último. Resolva esse problema com um código que funcione em qualquer situação.

// Usar módulo prompt-sync
const prompt = require('prompt-sync') ();

// Solicitando as informações do usuário
inicial = prompt("Digite o valor inicial: ");
final = prompt("Digite o valor final: ");
incremento = prompt("Digite o incremento: ");

// Exibe as informações ao usuário
console.log(`Valor inicial: ${inicial} Valor final: ${final} Incremento: ${incremento}`);
for (i = inicial; i >= final; i = i + incremento) {
    console.log(i);
}

console.log("FIM");

