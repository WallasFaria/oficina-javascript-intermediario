# Operações em Array

## forEach 
### Usado para iterar todos os elementos

Vejamos um exemplo:
```js
const numeros = [1, 2, 3, 4, 5]

numeros.forEach(n => { console.log(n) })
```
```
Exibe: 1 2 3 4 5
```

## map 
### Usado para iterar todos os elementos e fazer algo com seus valores

```js
const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map(n => n * 2)

console.log(dobro)
```

```
Retorna: [2, 4, 6, 8, 10]
```

## filter
### Usado para filtrar os elementos dada uma condição

```js
const numeros = [1, 2, 3, 4, 5]

const maioresQueTres = numeros.filter(n => n > 3)

console.log(maioresQueTres)
```

```
Retorna: [4, 5]
```


## find
### Usado para encontrar um elemento

```js
const pokemons = [
  {numero: '01', nome: 'Bulbassauro', tipo: 'Grama'},
  {numero: '04', nome: 'Charmander', tipo: 'Fogo'}
  {numero: '07', nome: 'Squirtle', tipo: 'Água'},
]

const pokemon = pokemons.find(p => p.numero === '04')

console.log(pokemon)
```

```
Exibe: { numero: '04', nome: 'Charmander', tipo: 'Fogo' }
```


## every
### Usado para verificar se todos os elementos respeitam dada condição

```js
const numeros = [1, 2, 3, 4, 5]

const todosMaiorQueZero = numeros.every(n => n > 0)

console.log(todosMaiorQueZero)
```

```
Retorna: True
```


## some
### Usado para verifica se há pelo menos um elemento que respeita dada condição

```js
const numeros = [1, 2, 3, 4, 5]

const algumMaiorQueQuatro = numeros.some(n => n > 4)

console.log(algumMaiorQueQuatro)
```

```
Retorna: True
```
## reduce
### Reduzir os elementos em um único valor

```js
const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((resultadoAnterior, valorAtual) => resultadoAnterior + valorAtual, 0)

console.log(soma)
```

```
Retorna: 15
```