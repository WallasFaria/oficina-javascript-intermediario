# Arrow Function

Possuem uma sintaxe mais curta comparada a sintaxe de função padrão. Não possui seu próprio this, arguments, super e new.target.

Vejamos aguns exemplos:

### Sem Arrow Function

```js
var oldWay = function(name, nickname) {
  return `My name is ${nickname}, ${name}`
}

console.log( oldWay('James Bond', 'Bond'))
```
```
Retorna string: My name is Bond, James Bond
```

### Com Arrow Function

```js
let newWay = (name, nickname) => {
  return `My name is ${nickname}, ${name}`
}

console.log( newWay('James Bond', 'Bond') )
```
```
Retorna string: My name is Bond, James Bond
```

### Com Arrow Function de maneira curta

```js
let newWay2 = (name, nickname) => `My name is ${nickname}, ${name}`

console.log( newWay2('James Bond', 'Bond') )
```
```
Retorna string: My name is Bond, James Bond
```

# Standard Values

É a forma como chamamos o modo de definir argumentos com valores pré-definidos.

Vejamos alguns exemplos:

### Forma antiga Standard Function

```js
var add = function (num1, num2) {
  num1 = num1 || 0 
  num2 = num2 ? num2 : 0 

  return num1 + num2
}

add(12, 32)
```
```
Retorna int: 44
```

### Forma nova com Standard Function  
exemplo 2:

```js
var add = function (num1 = 0, num2 = 0) {
  return num1 + num2
}

add(12, 32)
```
```
Retorna int: 44
```

### Forma nova com Arrow Function

```js
var add = (num1 = 12, num2 = 32) => num1 + num2;
```
```
Retorna int: 44
```