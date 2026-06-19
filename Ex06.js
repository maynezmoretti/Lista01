// Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
// 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16] ...

console.log("Este programa conta de 30 até 1");
for (i = 30; i >= 1; i--); {

// Marca os números divisíveis por 4 [número]
    if (i % 4 == 0) {
        console.log(`[${i}]`);
    }

// Se não for divisível por 4 exibe sem []
    else {
        console.log(i);
    }
console.log("FIM");
}