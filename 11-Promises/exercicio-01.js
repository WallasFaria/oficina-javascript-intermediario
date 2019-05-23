dividir(5, 2)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))

/*
Resultado: 2.5
*/

dividir(5, 0)
  .then(res => console.log(res))
  .catch(err => console.log(err.message))

/* 
Resultado: Não pode dividir 5 por 0
*/