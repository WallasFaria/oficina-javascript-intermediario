import {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend
} from '../11-Promises/fluxo-promise'

async function pizzaFlow() {
  let pizza = await orderPizza()
  console.log(`Minha pizza de ${pizza.flavor} está pronta.`)

  await waitUntilTheyFinishEating()
  console.log('Acabaram de comer. Vamos para o show.')

  await goToTheShow()
  console.log('Chegamos')

  await makeCallToMyFriend()
  console.log('Finalmente acabou. Que comece o show!')
}

pizzaFlow().then(() => console.log('O show acabou!'))