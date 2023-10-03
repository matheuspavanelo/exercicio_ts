// Função Multiplicação
function multiplica(a: number, b: number): number {
    return a * b;
}

// Teste 1
const resultado1 = multiplica(5, 3);
console.log(resultado1);

// Teste 2
const resultado2 = multiplica(-4, 6);
console.log(resultado2);

// Teste 3
const resultado3 = multiplica(2.5, 4); 
console.log(resultado3);


//Função Saudação
function saudacao(nome: string): string {
    return `Olá, ${nome}`;
}

const nomeDaPessoa: string = "Matheus";
const mensagemDeSaudacao: string = saudacao(nomeDaPessoa);

console.log(mensagemDeSaudacao);

