import {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend
} from './fluxo-callback'

orderPizza((pizza) => {
  console.log(`Minha pizza de ${pizza.flavor} está pronta.`)

  waitUntilTheyFinishEating(() => {
    console.log('Acabaram de comer. Vamos para o show.')

    goToTheShow(() => {
      console.log('Chegamos')

      makeCallToMyFriend(() => {
        console.log('Finalmente acabou. Que comece o show!')
      })
    })
  })
})