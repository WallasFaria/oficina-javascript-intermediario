# Arrow Function

Possuem uma sintaxe mais curta comparada a sintaxe de função padrão. Não possui seu próprio this, arguments, super e new.target.

Vejamos alguns exemplos:

### Sem Arrow Function

```js
const oldWay = function(name, nickname) {
  return `My name is ${nickname}, ${name}`
}

console.log( oldWay('James Bond', 'Bond'))
```

Retorno:
```
My name is Bond, James Bond
```

### Com Arrow Function

```js
let newWay = (name, nickname) => {
  return `My name is ${nickname}, ${name}`
}

console.log( newWay('James Bond', 'Bond') )
```

Retorno:
```
My name is Bond, James Bond
```

### Com Arrow Function de maneira curta

```js
let newWay2 = (name, nickname) => `My name is ${nickname}, ${name}`

console.log( newWay2('James Bond', 'Bond') )
```

Retorno:
```
My name is Bond, James Bond
```

# Standard Values

É a forma como chamamos o modo de definir argumentos com valores pré-definidos.

Vejamos alguns exemplos:

### Forma antiga Standard Function

```js
const add = function (num1, num2) {
  num1 = num1 || 0 
  num2 = num2 ? num2 : 0 

  return num1 + num2
}

add(12, 32)
```

Retorno:
```
44
```

### Forma nova com Standard Function  
exemplo 2:

```js
const add = function (num1 = 0, num2 = 0) {
  return num1 + num2
}

add(12, 32)
```

Retorno:
```
44
```

### Forma nova com Arrow Function

```js
const add = (num1 = 12, num2 = 32) => num1 + num2;
```

Retorno:
```
44
```