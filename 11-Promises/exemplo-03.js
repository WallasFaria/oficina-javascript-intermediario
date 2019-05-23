import {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend
} from './fluxo-promise'

orderPizza()
  .then(waitUntilTheyFinishEating)
  .then(goToTheShow)
  .then(makeCallToMyFriend)
  .catch(handleError)



function handleError(err) {
  console.log('Xiiii... a casa caiu.', err.message)
}