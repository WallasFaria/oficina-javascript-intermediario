const oneIn = (number, callback) => {
  if (parseInt(Math.random() * number) === number - 1) {
    callback()
  }
}

function orderPizza(callback) {
  setTimeout(() => {
    console.log('orderPizza')
    callback({ flavor: 'Portuguêsa' })
  }, 1000);
}

function waitUntilTheyFinishEating(callback) {
  setTimeout(() => {
    console.log('waitUntilTheyFinishEating')
    callback()
  }, 900);
}

function goToTheShow(callback) {
  setTimeout(() => {
    console.log('goToTheShow')
    callback()
  }, 800);
}

function makeCallToMyFriend(callback) {
  setTimeout(() => {
    console.log('makeCallToMyFriend')
    callback()
  }, 700);
}

export {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend,
}