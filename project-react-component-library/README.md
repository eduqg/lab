# Test project to create react component library


## Comandos utilizados

Inicialização do projeto

```console
npm init
git init
```

Adicionar react

```console
npm i --save-dev react react-dom @types/react
```

Adicionar arquivos iniciais de configuração [link](https://blog.harveydelaney.com/creating-your-own-react-component-library/), [repo](https://github.com/HarveyD/react-component-library)

Typescript

```console
npm i -D typescript
```

```console
npm run build
```

obs.: Error: PostCSS plugin tailwindcss requires PostCSS 8. [Solução](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)

Storybook

```console
npm install --save-dev @storybook/react @babel/core babel-preset-react-app babel-loader sass-loader
```
obs: Error, mudar "sass-loader": "^11.0.1", para "sass-loader": "^10.1.1"

Jest e React Testing Library

```console
npm i --save-dev jest ts-jest @types/jest identity-obj-proxy @testing-library/react @testing-library/jest-dom
```


```console
npm run test:watch
```
obs: npm install ts-node --save-dev

NPM

```console
npm login
npm publish
```

Usar em outro projeto

```console
npm install --save project-react-component-library
```