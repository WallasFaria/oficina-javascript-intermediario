# Template String

Template String é a "nova" forma de manipular strings inserida no ES6.
Com ela você pode gerar strings multi-linhas e fazer interpolações.

## Interpolação

```js
function aluno (aluno, serie){
  return `O aluno ${aluno} está na ${serie} série.`
};
aluno("Bruno"," oitava");
```

```
Retorno string: O aluno Bruno está na oitava série.
```

## Multi-linha

```js
function resumoDaCompra(produto, valor){
    return `
      <table style='width:100%'>
        <tr>
          <th>Produto</th>
          <th>Valor da Compra</th>
        </tr>
        <tr>
          <td>${produto}</td>
          <td>${valor}</td>
        </tr>
      </table>`
}
```
```
Retorno string:
      <table style='width:100%'>
        <tr>
          <th>Produto</th>
          <th>Valor da Compra</th>
        </tr>
        <tr>
          <td>${produto}</td>
          <td>${valor}</td>
        </tr>
      </table>
```