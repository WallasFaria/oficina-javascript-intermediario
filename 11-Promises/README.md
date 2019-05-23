# Promise

Promise é um objeto usado para processamento assíncrono.  
Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

## Sintaxe
```js
new Promise(/* executor */ function(resolve, reject) { ... })
```

Uma função que recebe dois argumentos resolve e reject. Esta função é executada imediatamente pela implementação do Promise, passando as funções resolve e reject. O executor é chamado antes que o construtor de Promise retorne o objeto criado.

As funções resolve e reject, quando chamadas, resolvem (em caso de sucesso) ou rejeitam (quando ocorre um erro) a promessa, respectivamente. O executor começa o trabalho assíncrono que, quando concluído, chama uma das funções resolve ou reject para definir o estado da promessa.

## Veio para resolver o callbacks hell

Exemplo de um fluxo de funções assíncronas usando callbacks:

```js
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
```

Acredite, esse é um dos mais simples exemplos possíveis do famoso callback hell. As coisas poderiam ficar muito piores do que isso (e geralmente ficavam)

## fluxos assíncronos de forma sequencial

A ideia das promises é representar fluxos assíncronos de forma sequencial/vertical/top-down, além de favorecer o tratamento de exceções.

```js
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
```

Sem toda aquela indentação piramidal, ficou muito mais fácil de entender cada passo desse fluxo

Para tratar exceções em cadeias de `then()`, você pode usar o método `catch()`

```js
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
```