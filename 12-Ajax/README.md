# Ajax com Axios

Há diversos momentos quando você está desenvolvendo uma aplicação Web que podem necessitar consumir e exibir dados de uma API. Há várias maneiras de se fazer isso, mas a maneira mais popular é usando axios, um cliente HTTP baseado em Promises.

A API é basicamente um cliente http, funciona em browsers e em servidores nodejs.

Se quiser usar no browser, importe a cdn:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Ou instale utilizando o npm:

```sh
npm install axios
```

Importe o pacote:

```js
// ES5:
var axios = require('axios')

// ES6:
import axios from 'axios'
```

Após instalar, o código abaixo simula uma requisição get na API do Github

```js
axios
  .get('https://api.github.com/users/wallasfaria/repos')
  .then(response => console.log(response.data)) 
```

Para utilizar o método post, possui um parâmetro a mais, indicando o que está sendo enviado para o servidor:

```js
axios
  .post('/save', { firstName: 'Teste', lastName: 'Testes' })
  .then(response => console.log('salvo com sucesso'))
```

## Lidando com Erros
Às vezes, podemos não receber os dados que precisamos da API. Há vários motivos para que nossa chamada assíncrona possa falhar, seguem alguns exemplos:

 - A API está fora do ar.
 - A requisição foi realizada de forma incorreta.
 - A API não retornou as informações da maneira que esperávamos.

Ao realizar a requisição, devemos checar todas essas circustâncias, obtendo informações em todos os casos para que possamos lidar com o problema. Em uma chamada axios, fazemos isso usando `catch`.

```js
axios
  .get('https://api.github.com/users/wallasfaria/repos')
  .then(response => (this.info = response.data))
  .catch(error => console.log(error))
```

## Exercício:

Crie um script que acesse a __`API CoinDesk`__ para exibir os preços do Bitcoin em Dolar, Libra e Euro.

```js
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
```

Deve exibir o seguinte algo como:

```
Atualizado em: 23/05/2019 23:18:00

USD: 7032.45
GBP: 6210.51
EUR: 7863.19
```