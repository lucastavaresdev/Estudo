
//cria um objeto
const nome = {
  nome: 'lucas',
  idade: 70,
};

console.log(nome);

Object.freeze(nome);

nome.idade = 24;

console.log(nome);
