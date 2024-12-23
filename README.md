﻿# PhisicalStore

# Projeto de Lojas Físicas

Este projeto é uma API em Node.js que permite encontrar lojas físicas Renner próximas a um CEP específico no Brasil. A aplicação usa Express para a criação de rotas, MongoDB para o armazenamento de dados de lojas, e APIs externas para obter informações geográficas e de endereços.

## Funcionalidades

- Cadastrar e armazenar lojas físicas no MongoDB.
- Buscar lojas físicas a um raio de 100 km de um CEP informado.
- Consultar informações de localização usando as APIs OpenCageData e ViaCEP.
- Exibir os dados das lojas encontradas para o usuário de forma amigável.
- Log de operações usando Winston.

## Estrutura do Projeto

phisicalstore/
├── src/
│   ├── config/
│   │   └── database.js 
│   ├── controllers/
│   │   └── lojaControllers.js
│   ├── models/
│   │   └── lojaModels.js
│   ├── routes/
│   │   └── lojaRoutes.js
│   ├── services/
│   │   ├── distanciaService.js
│   │   ├── opencageService.js
│   │   └── viacepService.js
│   ├── logs/ 
│   │   └── logs.json   
│   ├── app.js
│   └── .env
└── README.md

## Tecnologias Utilizadas

- **Node.js** - Plataforma para construção do servidor.
- **Express** - Framework para gerenciar rotas e requisições HTTP.
- **MongoDB** - Banco de dados NoSQL para armazenar informações das lojas.
- **Axios / node-fetch** - Biblioteca para realizar requisições HTTP às APIs externas.
- **OpenCageData API** - Converte CEP em coordenadas de latitude e longitude.
- **ViaCEP API** - Busca informações de endereço com base no CEP.
- **Winston** - Biblioteca de logging para gravar logs em JSON.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Conta na [OpenCageData](https://opencagedata.com/) para acessar a API de geocodificação
- API ViaCEP (não requer autenticação)

## Configuração do Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/nome-do-repositorio.git
   cd nome-do-repositorio/phisicalstore
Instale as dependências:

npm install
Configure o MongoDB no arquivo .env:

Crie o arquivo .env no diretório phisicalstore/
Adicione a URI de conexão do MongoDB:

MONGO_URI=sua-uri-do-mongo

Configure o OpenCageData:

Adicione a chave da API no .env:

OPENCAGE_API_KEY=sua-chave-opencage

Uso
Inicie o servidor:

npm start
Acesse a API em http://localhost:3000 (ou a porta configurada).

Endpoints Principais
Cadastrar uma Loja
POST /stores
Descrição: Cadastra uma nova loja no MongoDB.
Exemplo de JSON de requisição:

{
  "name": "Loja Exemplo",
  "cep": "12345-678",
  "endereco": "Rua Exemplo",
  "numero": "123",
  "cidade": "São Paulo",
  "estado": "SP"
}

Buscar Lojas Próximas

GET /stores/near/:cep
Descrição: Retorna lojas num raio de 100 km do CEP fornecido.
Parâmetro:
cep - CEP de referência para a busca (ex: 12345-678).

Estrutura do Log

Os logs de operações da API são salvos em logs/logs.json e contêm informações de requisições, respostas e erros.

Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License.
