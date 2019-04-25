/*
Crie uma função que receba como primeiro argumento
um numero que será multiplicado pelo somatório do restante
dos argumentos
*/

const somarTodos = require('./exercicio-01.resposta')

console.log(somarTodos(2, 5, 10)) // retorna 30
console.log(somarTodos(10, 20, 30, 40, 5)) // retorna 950
console.log(somarTodos(3, 4)) // retorna 12
console.log(somarTodos(2)) // retorna 0