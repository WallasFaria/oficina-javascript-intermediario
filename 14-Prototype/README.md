# Prototype

Um protótipo nos permite predefinir propriedades, incluindo métodos.

Vamos definir a função Coworker() e instanciar os objetos c1 e c2.

```js
function Coworker(name) {
  this.name = name;
}

var c1 = new Coworker("João");
var c2 = new Coworker("Maria");
```

Ao adicionar a propriedade status ao objeto prototype ambas as instâncias são atualizadas.

```js
Coworker.prototype.status = "trabalhando"

console.log(c1) // Coworker { name="João", status="trabalhando"}
console.log(c2) // Coworker { name="Maria", status="trabalhando"}
```

A partir desse ponto, a atualização da propriedade de uma das instâncias não afetará a outra.

```js
c1.status = "férias";
console.log(c1) // Coworker { name="João", status="férias"}
console.log(c2) // Coworker { name="Maria", status="trabalhando"}
```

Se, após as modificações citadas acima, você alterar o valor da propriedade do protótipo, os valores da propriedade do protótipo designados individualmente não refletirão a alteração do protótipo.

```js
Coworker.prototype.status = "quase de férias"
console.log(c1) // Coworker { name="João", status="férias"}
console.log(c2) // Coworker { name="Maria", status="quase de férias"}
```
