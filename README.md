# Projeto de teste do Next.js

## Comandos utilizados

Criar projeto

```console
npx create-next-app nextjs-app
```
asda

### Typescript

```console
yarn add typescript @types/node @types/react -D 
```

Então trocar arquivos js para tsx.

Limpar pastas

### Executar projeto

```console
yarn dev
```

Na primeira execução, vai detectar e gerar arquivos para o typescript.

O Next.js tem páginas que se eu desabilitar o javascript e recarregar a página, o mesmo conteúdo irá ser renderizado.

Ao criar um arquivo em pages já cria uma rota.

Arquivos com _ antes como _app não é considerado como uma rota.

### Dynamic Routing

Criar arquivo com [slug].tsx para parâmetros de rotas.


### Styled components

```console
yarn add styled-components
yarn add @types/styled-components -D
```

Ir na documentação e procurar server side rendering.

.babelrc = babel.config.js

```console
yarn add babel-plugin-styled-components -D
```

Adicionar babel.config.js e src/_document.tsx para carregar estilos mesmo com f5.


### Json server

```console
json-server server.json --port 3333 -w
npx json-server server.json --port 3333 -w

Com delay de 2 segundos

json-server server.json --port 3333 -w -d 2000 
```

### Build de produção

Para páginas estáticas, ao fazer yarn build, são geradas para a produção. yarn start

Para rodar a build de produção

```console
yarn start
```

### Envs

env.development -> vai para o git

env.local -> gitignore, no client side não funciona.


API_URL=http://localhost:3333 -> não funciona no client side (React.FC em desenvolvimento)
NEXT_PUBLIC_API_URL=http://localhost:3333 -> funcina no client side


```console

```


```console

```


```console

```


```console

```


```console

```

## Readme gerado automaticamente

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
