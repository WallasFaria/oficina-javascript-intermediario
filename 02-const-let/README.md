# Let e Const

## Let

let é considerada uma variável de escopo de bloco, logo seu retorno é válido apenas dentro do bloco a que pertence.

Vejamos o código a seguir:

```js
function exibeValor() {
  let valor = 10
  if(true) {
    let valor = 20
  }
  console.log('Retorno let: ', valor)
})

exibeValor()
```

```
Retorno let: 10
```

## Const

const não pode ser alterada uma vez que já tenha um valor.

```js
const valor = 10;
console.log('Retorno const: ', valor);
valor = 20;
console.log('Retorno segundo const: ', valor);
```

```
Retorno const: 10
/Users/bognar/Documents/Projetos/GitHub/Projetos/blog/JavaScript Variaveis/index.js:25
valor = 20;
      ^

TypeError: Assignment to constant variable.
```