# Operações em Array

## forEach
### Usado para iterar todos os elementos

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

numeros.forEach(n => { console.log(n) })
```

Retorno:
```
1
2
3
4
5
```

## forIn
### Usado para iterar todas as propriedades enumeráveis de um objeto ou array

Vejamos um exemplo:

```js
const pokemons = ['Bulbassaur', 'Charmander', 'Squirtle']

for(p in pokemons) {console.log(p)}
```

Retorno:
```
0
1
2
```

## forOf
### Usado para iterar sobre arrays, ao invés de objetos. Desta maneira ele irá iterar sobre qualquer array que tiver uma propriedade

Vejamos um exemplo:

```js
const pokemons = ['Bulbassaur', 'Charmander', 'Squirtle']

for(p of pokemons) {console.log(p)}
```

Retorno:
```
Bulbassaur
Charmander
Squirtle
```


## map
### Usado para iterar todos os elementos e fazer algo com seus valores

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map(n => n * 2)

console.log(dobro)
```

Retorno:
```
[2, 4, 6, 8, 10]
```

## filter
### Usado para filtrar os elementos dada uma condição

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

const maioresQueTres = numeros.filter(n => n > 3)

console.log(maioresQueTres)
```

Retorno:
```
[4, 5]
```


## find
### Usado para encontrar um elemento

Vejamos um exemplo:

```js
const pokemons = [
  {numero: '01', nome: 'Bulbassauro', tipo: 'Grama'},
  {numero: '04', nome: 'Charmander', tipo: 'Fogo'},
  {numero: '07', nome: 'Squirtle', tipo: 'Água'}
]

const pokemon = pokemons.find(p => p.numero === '04')

console.log(pokemon)
```

Retorno:
```
{ numero: '04', nome: 'Charmander', tipo: 'Fogo' }
```


## every
### Usado para verificar se todos os elementos respeitam dada condição

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

const todosMaiorQueZero = numeros.every(n => n > 0)

console.log(todosMaiorQueZero)
```

Retorno:
```
True
```


## some
### Usado para verificar se há pelo menos um elemento que respeita dada condição

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

const algumMaiorQueQuatro = numeros.some(n => n > 4)

console.log(algumMaiorQueQuatro)
```

Retorno:
```
True
```


## reduce
### Reduzir os elementos em um único valor

Vejamos um exemplo:

```js
const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((resultadoAnterior, valorAtual) => resultadoAnterior + valorAtual, 0)

console.log(soma)
```

Retorno:
```
15
```