# Async Await

Se dois dos intuitos originais das promises eram clareza de código e manutenibilidade, o JavaScript deu um passo adiante em ambos os aspectos com as async functions.

Diferentemente da transição de callbacks para promessas, que envolve uma nova forma de pensar em fluxos assíncronos, migrar de promessas para async functions é um caminho notavelmente mais simples.

As async functions fazem código assíncrono parecer síncrono.

Vamos direto ao código:

```js
async function pizzaFlow() {
  let pizza = await orderPizza();
  console.log(`Minha pizza de ${pizza.flavor} está pronta.`);

  await waitUntilTheyFinishEating();
  console.log('Acabaram de comer. Vamos para o show.');

  await goToTheShow();
  console.log('Chegamos');

  await makeCallToMyFriend();
  console.log('Finalmente acabou. Que comece o show!');
}
```

Como você pode ver, o código ficou muito mais enxuto, flat e fácil de entender à primeira vista. O que a função orderPizza e as outras três invocadas com await retornam? Promises, baby. Async functions são altamente integráveis com promessas. Tanto, que até retornam promessas:

```js
pizzaFlow().then(() => console.log('O show acabou!'));
//=> Minha pizza de bacon está pronta.
//=> Acabaram de comer. Vamos para o show.
//=> Chegamos
//=> Finalmente acabou. Que comece o show!
//=> O show acabou!
```

É importante frisar que só se pode usar await dentro de funções marcadas como async.

Ao encontrar uma declaração await, a instrução seguinte não será executada até que a promessa em andamento seja resolvida. Isso é possível graças à magia dos generators, outro importante recurso do ES2015.

## Desafio!

Como tratar as exeções usando essa abordagem de async/await?

## Exercício

 1. Use a função de dividir do exercício de promise com aync/await
 2. Refaça o exercício de Ajax com aync/await