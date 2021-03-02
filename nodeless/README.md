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