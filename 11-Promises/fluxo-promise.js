const oneIn = number => parseInt(Math.random() * number) === number - 2

function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('orderPizza')
      resolve({ flavor: 'Portuguêsa' })
    }, 1000);
  })
}

function waitUntilTheyFinishEating() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('waitUntilTheyFinishEating')
      resolve()
    }, 900);
  })
}

function goToTheShow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('goToTheShow')
      resolve()
    }, 800);
  })
}

function makeCallToMyFriend() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('makeCallToMyFriend')
      resolve()
    }, 700);
  })
}

export {
  orderPizza,
  waitUntilTheyFinishEating,
  goToTheShow,
  makeCallToMyFriend,
}