# Gerenciadores de Pacotes NPM E YARN
## NPM (Node Package Manager)

- Repositório online para publicação de projetos de código aberto para o Node.js; 
- Utilitário de linha de comando que interage com este repositório online, que ajuda na instalação de pacotes, gerenciamento de versão e gerenciamento de dependências.

### Instalação
O NPM vem instalado com o Node.js. Para verificar sua versão:
```js
node -v
npm -v
```
### Package.json
O package.json é um arquivo utilizado para gerenciar dependêcias e escrever scripts.

**Instalando o Package.json**
Primeiro vá à pasta principal do seu projeto.
Você pode cria-lo através do comando:
```js
npm init
```

Ele pede alguns dados como nome do autor, descrição, etc. Você pode simplesmente pressionar Enter para os padrões.

![Drag Racing](https://cdn-images-1.medium.com/max/800/1*eVUQ3mjwZSlcFzRfJYMpZg.gif)

Para criar rapidamente um arquivo package.json. Você pode usar o comando:
```js
npm init -y
```
### Comandos Básico de NPM

**Instalando pacotes**

Locally: 
Um pacote instalado localmente pode ser acessado somente na pasta da qual você fez o download.
```js
npm install <package_name>
```

É possível instalar somente os pacotes necessários apenas ao desenvolvimento:
```js
npm install <package_name> --save-dev
```
Globally:
Um pacote instalado globalmente funciona em qualquer lugar da máquina. Para instalar pacotes globais, basta adicionar a flag *-g*
```js
npm install -g <package_name>
```
### Atualizando Pacotes
Todos os pacotes
```js
npm update 
```
Pacotes Locais
```js
npm update <package_name>
```
Pacotes Globais
```js
npm update <package_name> -g
```

### Desinstalando Pacotes
Pacotes Locais
```js
npm uninstall <package_name> 
```
Pacotes Globais
```js
npm uninstall <package_name> -g
```

### Instalando de package.json:
É possível compartilhar o projeto sem os módulos do node. Para isso será necessário compartihar o *package.json.*
Além de fazer download, o contribuinte deverá instalar os pacotes:
```js
npm install
```
### Lista de Pacotes Instalados
```js
npm list
```
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