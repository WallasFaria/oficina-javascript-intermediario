import {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend
} from './fluxo-promise'

orderPizza()
  .then((pizza) => {
    console.log(`Minha pizza de ${pizza.flavor} está pronta.`)
    return waitUntilTheyFinishEating()
  })
  .then(() => {
    console.log('Acabaram de comer. Vamos para o show.')
    return goToTheShow()
  })
  .then(() => {
    console.log('Chegamos')
    return makeCallToMyFriend()
  })
  .then(() => {
    console.log('Finalmente acabou. Que comece o show!')
  })
  .catch((err) => console.log('Xiiii... a casa caiu.', err.message))