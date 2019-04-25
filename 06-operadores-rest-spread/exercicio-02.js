/*
Execute a funçao exibeInformacoesDeContato passando o objeto 
contato e informando o telefone no momento da chamada da função
sem alterar o objeto contato
*/

const contato = {
  nome: 'Diogo Viana',
  telefone: null,
  email: 'diogoviana@gmail.com',
  facebook: 'https://facebook.com/giogoviana',
  instagram: 'https://instagram.com/giogoviana'
}

function exibeInformacoesDeContato(contato) {
  return `Contato:
    nome: ${contato.nome}
    telefone: ${contato.telefone}
    email: ${contato.email}`
}
