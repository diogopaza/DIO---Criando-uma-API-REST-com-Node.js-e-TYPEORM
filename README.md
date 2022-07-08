# DIO---Criando-uma-API-REST-com-Node.js-e-TYPEORM

git reset

npm i typescript -D == instala a dependência do Typescript. O -D indica que é uma dependência de desenvolvimento. Não vai para a produção. 

npx tsc --init == inicializa o Typescript na aplicação. 

npm i ts-node-dev -D == instala dependência a qual deixa a aplicação ser capaz de rodar com Typescript.

npm i @types/express -D == dependecia de tipos do express.

Verbos HTTP:

GET
POST
PUT/PATCH
UPDATE 
DELETE

TYPEORM:
Migrations é uma forma automatizada de criar ou alterar tabelas que já existem no banco de dados.
Para criar uma migration foi necessário acrescentar o -d e o local onde seria craido. 
npx typeorm migration:create -d ./src/database/migrations.
Para criar a tabela no banco de dados, segue o comando abaixo:
npm run typeorm migration:run.

Testes unitários:

Biblioteca jest será utilizada para os testes automatizados.
Configurando o jest na aplicação:

npm i jest @types/jest ts-jest -D.

npx jest --init.

Configurações adicionais no arquivo jest.config.ts:

bail: false == definir como falso para sempre rodar todos os testes, senão
os testes param após um número de falhas.
clearMocks: false == definir como falso. 
preset: "ts-jest" == estamos usando o Typescript e instalou a lib ts-jest.
 testMatch: [
    "**/__tests__/**/*.ts",
    "**/*.test.ts"
  ],  == descomentar essas linhas e deixar setado para testar apenas os arquivos .ts

Para executar o necessário configurar o pack

