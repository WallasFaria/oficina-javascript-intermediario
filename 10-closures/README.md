# Closures

Um closure é uma função interior que tem acesso a variáveis de uma função exterior - cadeia de escopo.

Uma closure tem 3 cadeias de escopo.

### 1) ele tem acesso ao seu próprio escopo 
### 2) ele tem acesso as variáveis da função exterior
### 3) tem acesso as variáveis globais

### Obs: A função interior tem acesso não somente as variáveis da função exterior, mas também aos parâmetros dela.

Vejamos alguns exemplos:

## Easy

```js
function soma(num1, num2) {
  return num1 + num2
}
soma(20, 40)
```

Retorno:
```
60
```

## Medium

```js
function soma(num1) {
  return function(num2) {
    return num1 + num2
  }
}
soma(20)(40)
```

Retorno:
```
60
```

## Hard

```js
function soma(num1) {
  return { 
    mais: function(num2) {
      return num1 + num2
    }
  }
}
soma(20).mais(40)
```

Retorno:
```
60
```

## Expert

```js
const charmander = () => {
  const hits = {
    smokescreen: {
      efect: 'Lowers the foe\'s accuracy.'
    },
    ember: {
      efect: 'Cause 40 damage'
    }
  }

  return {
    smokescreen: () => 
      `Charmander used smokescreen! ${hits.smokescreen.efect}`,
    ember: () => 
      `Charmander used Ember! ${hits.ember.efect}`
  }
}

charmander().ember()
charmander().smokescreen()
```

Retorno:
```
'Charmander used Ember! Cause 40 damage'
```
```
'Charmander used smokescreen! Lowers the foe\'s accuracy.'
```