# Módulos no ES6

A especificação ES2015 (ES6) introduziu um sistema de módulos baseado na sintaxe import e export


## Strict Mode

A quinta edição da especificação ECMAScript introduziu o Modo Estrito, que cria uma camada de constantes no JavaScript com o propósito de proteger você de aspectos perigosos da própria linguagem.
Ele é ativado por padrão quando trabalhamos com módulos ES6.

    - Variáveis não podem ficar sem declaração
    
    - Parâmetros de funções devem ter nomes únicos (ou então são considerados erros de sintaxe)
    
    - with é proibido
    
    - Tentar atribuir um valor para uma variável read-only lança um erro
    
    - Números octais (como 00840) são erros de sintaxe
    
    - Tentativas de deletar (usando delete) propriedades não removíveis lançam um erro
    
    - Delete prop é considerado um erro de sintaxe, ao invés de ser resolvido automaticamente para delete global[prop]
    
    - eval não inclui novas variáveis no escopo
    
    - eval e arguments não podem ser atribuídos ou sofrer bind
    
    - arguments não observa “magicamente” mudanças nos parâmetros do método
    
    - arguments.callee lança um TypeError, não mais suportado

    - arguments.caller lançando um TypeError também não é mais suportado
    
    - O contexto passado como this em invocações de métodos não é mais forçado a se tornar um Object
    
    - Não é mais possível usar fn.caller ou fn.arguments para acessar a stack do JavaScript
    
    - Palavras reservadas (como protected, static, interface) não podem sofrer bind

## Exportar

No ES6, os módulos são arquivos que dão export uma API (basicamente igual ao CommonJS). 
As declarações, variáveis, funções e qualquer coisa daquele módulo existem apenas no escopo do módulo. 
Por isso, para que estejam disponíveis, deverão ser exportados explicitamente com parte da API e importados posteriormente em outros módulos.


```js
    export default = 1
    export default = NaN
    export default = 'foo'
    export default = { foo: 'bar' }
    export default = [ 'foo', 'bar' ]
    export default = function foo () {}
    export default = () => {}
```
*Ao contrário dos módulos no CommonJS, declarações export só podem ser colocadas no top level do código, e não em qualquer parte dele*.


### Exports Nomeados

No CommonJS podemos simplesmente criar bindings de variáveis direto no module.exports que então teremos as propriedades sendo atualizadas em tempo real:
```js
    export var foo = 'bar'
```

### Exportando listas
É possivel exportar listas de membros nomeados:
```js
    var foo = 'bar'
    var bar = 'foo'
    export { foo, bar }
```
Também é possível nomear exportar com nome diferente: 
```js
    var foo = 'bar'
    export { foo as fuz }
```

## Importar
O import é a contraparte do export, ele pode ser usado para carregar um módulo a partir de outro.
```js
    import _ from 'lodash'
```
### Importando exports nomeados
```js
    import { map, reduce } from 'lodash'
```