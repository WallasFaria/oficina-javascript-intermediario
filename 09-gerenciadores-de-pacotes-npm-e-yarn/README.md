# Gerenciadores de Pacotes NPM E YARN
## NPM (Node Package Manager)

- Repositório online para publicação de projetos de código aberto para o Node.js; 
- Utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento de versão e gerenciamento de dependências.

## YARN

O Yarn é uma maneira que temos de agilizar a instalação de algumas dependências. É uma alternativa ao NPM, um pouco mais rápido.
O Yarn usa o mesmo package.json que já temos no projeto em JavaScript e não adiciona nenhuma outra dependência, vai ser usado exatamente o mesmo repositório que o NPM já roda.

### Qual a vantagem do Yarn?

- Mais rápido
- Tende a resolver alguns conflitos de versão de módulo 
- Cria um cash local

  Ex. caso você já tenha utilizado algum módulo qualquer com Yarn, aquela versão específica do módulo fica salva na sua máquina, caso você precise usar em outro projeto, ele utiliza do cash e não precisa baixar um novo.

 Aqui temos uma pequena lista comparando as operações mais comumente utilizados com npm e yarn.
### Instalar as dependências do projeto 
NPM:
```js
1 npm install
```
YARN:
```js
1 yarn
```
### Adicionar uma dependência
NPM:
```js
1 npm install --save nomePacote
```

YARN:
```js
1 yarn add nomePacote
```

### Remover uma dependência
NPM:
```js
1 npm uninstall nomePacote --save
```

YARN:
```js
1 yarn remove nomePacote
```

### Atualizar as versões das dependências
NPM:
```js
1 npm update --save
```
YARN
```js
1 yarn upgrade
```
### Você pode até mesmo atualizar o yarn com o próprio yarn
```js
1 yarn global add yarn
```