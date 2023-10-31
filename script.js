let n1 = prompt("Digite o primeiro numero: ");
let n2 = prompt("Digite o segundo número: ");

n1 = Number(n1);
n2 = Number(n2);

let soma = n1 + n2;
let subtração = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;
let resto = n1 % n2


alert(` a soma é: ${soma}`)
alert(` a subtração é: ${subtração}`)
alert(` a multiplicação é: ${mult}`)
alert(` a divisão é: ${div.toFixed(2)}`)
alert(` o resto é: ${resto}`)

if (soma % 2 == 0){
    alert(`a soma dos numeros é par: ${soma}`)
} else {
    alert(`a soma dos numeros é impar: ${soma}`)
};

if (n1 == n2) {
    alert("Os numeros digitados são iguais")
} else {
    alert("os numéros digitados são diferentes")
}