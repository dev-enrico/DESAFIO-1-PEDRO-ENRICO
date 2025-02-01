// Resolução do DESAFIO 1 do Programa Trilhas Inova Maranhão (Front-End) - Aluno: Pedro Enrico Borgneth Ferraz

// Questão 1 - OBS: Exibi com o "alert" e com o "console.log" em algumas respostas para garantir.

/*let nome = "Pedro Enrico.";
console.log (nome);
alert (nome);*/

// Questão 2 - Idade (25) e altura (1.75m).

/*let idade = 25;
let altura = 1.75;

console.log ("Idade: " + idade + " anos e altura: " + altura + " metros.");
alert ("Idade: " + idade + " anos e altura: " + altura + " metros.");*/

// Questão 3 - Valor 50 só que com o desconto de 20%

/*let preco = 50;
let desconto = 0.2;

let precoComDesconto = preco * (1 - desconto);
console.log ("O valor final, após aplicar os 20% de desconto, é de " + precoComDesconto + " reais.");
alert ("O valor final, " + preco + " reais após 20% de desconto, é de " + precoComDesconto + " reais.");*/

// Questão 4 - "Está calor"/"Está fresco" (funciona trocando por outras temperaturas também).

/*let temperatura = 30;

if (temperatura > 25) {
    console.log ("Está calor!");
    alert ("Está calor!");
} else {
    console.log ("Está fresco!");
    alert ("Está fresco!");
}*/

// Questão 5 - Verificação de idade (funciona trocando por outras idades também).

/*let idade = 18;

if (idade >= 18) {
    console.log ("Você é maior de idade.");
    alert ("Você é maior de idade.");
} else {
    console.log ("Você é menor de idade.");
    alert ("Voce é menor de idade.");
}*/

// Questão 6 - Aprovação, recuperação ou reprovação (funciona trocando por outras notas também).

/*let nota = 10;

if (nota >= 7) {
    console.log ("Aprovado.");
    alert ("Aprovado.");
} else {
    if (nota >= 5) {
        console.log ("Recuperação.");
        alert ("Recuperação.");
    } else {
        console.log ("Reprovado.");
        alert ("Reprovado.");
    }
}*/

// Questão 7 - Números iguais ou diferentes (funciona trocando por outros numéros também).

/*let numero1 = 10;
let numero2 = 10;

if (numero1 == numero2) {
    console.log ("Os números são iguais.");
    alert ("Os números são iguais.");
} else {
    console.log ("Os números são diferentes.");
    alert ("Os números são diferentes.");
}*/

// Questão 8 - Nome e idade (funciona trocando o nome e valor das variáveis citadas também).

/*let nome = "Pedro Enrico";
let idade = 18;

console.log ("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");
alert ("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.");*/

// Questão 9 - Loop de 1 até 10 na tela.

/*let contador = 1;

while (contador < 11) {
    console.log (contador);
    contador++;
}*/

// Questão 10 - Loop até que digite o número 5.

/*let numero;
alert ("Digite um número, o prompt se repetirá até que você digite 5.");
numero = prompt ("Informe um número.");

while (numero != 5) {
    numero = prompt ("Informe um número.");
}*/

// Questão 11 - Tabuada do 7, multiplicando por valor de 1 até 10.

/*let contador = 1;

while (contador < 11) {
    console.log (7 * contador);
    contador++;
}*/

// Questão 12 - Números pares de 0 a 20 (fiz contando o 0 como um número par).

/*let contador = 0;

while (contador < 11) {
    console.log (2 * contador);
    contador++
}*/

// Questão 13 - Função que calcula o círculo, recebe o raio e retorna a área (utilizei metros como unidade padrão de medida).

/*let raio = prompt ("Informe, em metros, o raio do círculo e descubra a área.");

function calculaAreaCirculo(raio) {
    let areaCirculo = 3.14 * raio * raio;
    return console.log ("Esse círculo possui " + areaCirculo + " metros² de área."), alert ("Esse círculo possui " + areaCirculo + " metros² de área.");
}

calculaAreaCirculo (raio);*/

// Questão 14 - Optei por mesclar os conceitos de lógica e função dessa vez.

//As linhas 139 e 140 ditam a tarefa a ser iniciada e informa, previamente, que serão pedidos 2 valores e retornará a soma deles.
/*console.log ("O usuário informará, logo abaixo, os dois valores que serão somados.");
alert ("Informe dois valores e receba a soma deles.");

//A linha 144 declara a variável do primeiro valor, ele será recebido por meio do prompt e transformado em numero por meio do "Number".
//A linha 145 somente deixa o valor informado explícito no console do site.
let valor1 = Number (prompt ("Informe o primeiro valor, por favor."));
console.log ("O primeiro valor foi " + valor1 + ".");

//A linha 149 declara a variável do primeiro valor, ele será recebido por meio do prompt e transformado em numero por meio do "Number".
//A linha 150 somente deixa o valor informado explícito no console do site.
let valor2 = Number (prompt ("Informe o segundo valor, por favor."));
console.log ("O primeiro valor foi " + valor2 + ".");

//Criei uma função para somar, recebendo os dois parâmetros (os dois valores de antes) e retornando o resultado em "console" e em "alert", por meio da variável "soma" dentro da função.
function calcularSoma(valor1, valor2) {
    let soma = valor1 + valor2;
    return console.log ("A soma de " + valor1 + " mais " + valor2 + " resulta em " + soma + "."), alert ("A soma de " + valor1 + " mais " + valor2 + " resulta em " + soma + ".");
}

//Por fim, chamei a função, novamente com aqueles parâmetros, visando sua execução de forma correta e padronizada.
calcularSoma (valor1, valor2);*/

// Questão 15 - Refatoração de código e separação do código em função (tudo está ocorrendo no "console.log" dessa vez).

/*let valor1 = 10;
console.log ("O primeiro valor foi " + valor1 + ".");

let valor2 = 20;
console.log ("O primeiro valor foi " + valor2 + ".");

function calcularSoma(valor1, valor2) {
    let soma = valor1 + valor2;
    return console.log ("A soma de " + valor1 + " mais " + valor2 + " resulta em " + soma + ".");
}
calcularSoma (valor1, valor2);*/