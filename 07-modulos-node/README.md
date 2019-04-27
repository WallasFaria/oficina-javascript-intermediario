# Módulos em NodeJS

Módulos são cruciais para construção de aplicações em Node, pois eles permitem incluir bibliotecas externas, como bibliotecas de acesso ao banco de dados, e ajudam a organizar seu código em partes separadas com responsabilidades limitadas.

Utilizar módulos em Node é simples, você usa a função require(), que recebe um argumento: o nome da biblioteca do core ou o caminho do arquivo do módulo que você quer carregar.

### Importar
```js
// calculo.js
const circulo = require('./circulo.js');
console.log( 'Um circulo de raio 4 tem area de '
             + circulo.area(4));
```

### Exportar
```js
// circulo.js
const PI = Math.PI

exports.area = function (r) {
  return PI * r * r
}
```

Neste exemplo o módulo círculo.js exportou a função area(), veja abaixo outras maneiras de fazer esta mesma exportação:

```js
const PI = Math.PI

function area(r) {
  return PI * r * r
}

module.exports = { area: area }
```

```js
const PI = Math.PI

exports.area = r => PI * r * r
```