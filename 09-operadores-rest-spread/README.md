# Rest e Spread

## Paramentros Rest

```Parâmetros rest``` são usados para criar funções que aceitem qualquer número de argumentos.

Vejamos o exemplo:

```js
function pokemonTrainers(name, ...pokemons) {
    return `${name} contém ${pokemons.length} Pokemons: ${pokemons.join(", ")}`
  }

pokemonTrainers('Cadu', 'Bulbassaur', 'Charmander')
```

Retorno:
```
'Cadu contém 2 Pokemons: Bulbassaur, Charmander'
```

### Obs: O ```...pokemons``` precisa ser o último argumento.

## Operadores Spread

```Operadores Spread``` é usado para passar um array em funções que normalmente esperam uma lista com vários argumentos.

Vejamos o exemplo a seguir utilizando o método Math.max(valor1, valor2, ...). Este método retorna o maior de um ou mais números.

```js
let arr = [3, 5, 1]

console.log( Math.max(...arr))
```

Retorno:
```
5
```

Você também pode combinar ```operados spread``` com valores normais.

Confira o exemplo:

```js
let arr1 = [1, -2, 3, 4]
let arr2 = [8, 3, -8, 1]

console.log( Math.max(1, ...arr1, 2, ...arr2, 25)) 
```

Retorno:
```
25
```

Nós também podemos usar os ```operados spread``` para mesclar arrays.

Confira no exemplo:

```js
let arr = [3, 5, 1]
let arr2 = [8, 9, 15]

let merged = [0, ...arr, 2, ...arr2]

console.log(merged)
```

Retorno:
```
[ 0, 3, 5, 1, 2, 8, 9, 15 ]
```

Podemos usar os ```operados spread``` também para transformar uma string em um array de caracteres.

Vejamos no exemplo:

```js
let str = "Hello"

console.log([...str])
```

Retorno:
```
[ 'H', 'e', 'l', 'l', 'o' ]
```