# Next Steps

- Refac the code to instance the use cases on controller layer
- Implement API Gateway and a function serverless to authenticate the client based on `taxvat`
  - Microsoft AD & Azure Functions
- Implement the 



# Fast Food API

Repository ofTech Challenge #02, in the [System Architecture Pós-Tech FIAP course](https://postech.fiap.com.br/). Clean Architecture techniques were used, creating the necessary files to run the application in the Kubernetes environment and creating continuous integration with Github Actions + Dockerhub + AWS.

This project aims to simulate the backend of a cafeteria, it has the CRUD of customers, products and orders. Event listener techniques were also used (sending a message to the customer according to the order status) and integration with the Mercado Pago payment method

## Language and Tools

<p align="left"> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://kubernetes.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a></p>

## Additional Libraries

- fastify
- prisma
- zod
- vitest

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/en) `>= 18.x`
- [yarn](https://yarnpkg.com/) - The version used in this project was `1.22.21`
- [docker](https://www.docker.com/) - The version used in this project was `25.0.2`
- [kubernetes](https://www.docker.com/) (Optional) - The version used in this project was `1.29.1` of kubectl


## Instalation

Follow these steps to install the project:

1. Clone the project
```bash
git clone https://github.com/samirelhassann/fiap-tech-challenge-03-application.git
```

2. Navigate into the project directory:
```bash
cd snack-store-api
```

3. Install the project dependencies:
```bash
yarn install
```

## Configuration

Before running the project, you need to set up your environment:

1. Copy the .env.example file to .env:
```bash
cp .env.example .env
```

2. Fill in the environment variables in the .env file as per instructions. This often includes database connection strings, API keys, etc.


## Usage

### Localy

1. Run the following command on root project to start the database
```bash
docker-compose up -d
```

2. Setup the prisma ORM
```bash
yarn prisma generate && yarn prisma migrate dev
```

3. Start the application
```bash
yarn dev
```

The application will run on route [`http://localhost:3333`](http://localhost:3333).

### Running using kubernetes

1. Enter on deploy folder
```bash
cd deploy/local
```

2. On file deploy/local/db/pv.yaml change for a local folder

3. Run the database k8s yamls:
```bash
kubectl apply -f db
```

4. Run the api k8s yamls:
```bash
kubectl apply -f api
```

5. Check if all deployments are good:
```bash
kub get pods --watch
```

The application will run on [`http://localhost:31100/`](http://localhost:31100/). (Route defined on svc-deployment-api.yaml)


# Documentation

Enter on `/docs` to check the [Redoc Documentation](https://github.com/Redocly/redoc) or `/docs-swagger` to check [Swagger Documentation](swagger.io) padrão.
