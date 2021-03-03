# Node.js AWS Lambda

Video: Serverless com NodeJS e AWS Lambda | Diego Fernandes

```console
npm install serverless -g

serverless create --template aws-nodejs --path nodeless
```

## IAM

Usuário AdministratorAccess 

```console
serverless config credentials -o --provider aws --key=<key> --secret <secret>

serverless deploy -v
```

Executa função hello e lista operações feitas.

```console
serverless invoke -f hello -l
```

Para redirecionamento de imagem

```console
npm install sharp
```

```console
npm run deploy
```

Criar arquivo uploads no S3

Adicionar arquivo a pasta irá executar o lambda para criar arquivo reduzido na pasta compressed no S3

Para remover da aws

```console
serverless remove
```