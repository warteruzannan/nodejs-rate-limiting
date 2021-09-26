# Rate Limiting - NodeJS ⏳

Este repositório contém uma simples implementação de uma api usando rate limiting.

Rate Limiting é uma técnica bem conhecida que permite limitar o uso de um certo recurso em seu backend. Esse limite pode ser estabelecido de várias formas: número de requests por segundo, número de request dentro de um intervalo de tempo, número de request para uma certa apiKey, entre outras. De forma geral, quando esse limite é ultrapassado, a api retorna um erro 429 (too many requests) indicando que o número máximo de requisições foi atingido.

Por ser um conceito, o rate Limiting pode ser implementado em várias linguagens, ferramentas, bibliotecas, etc. Neste repositório, você vai encontrar uma implementação usando NodeJS e Redis.

A implementação feita aqui se resume a um middleware do express que verifica o momento da última requisição para um determinado ip. É permitido no máximo uma requisição a cada 5 segundos.

### Executando o projeto

Pré-requisitos: <br>

- docker (https://www.docker.com/) <br>
- docker-compose (https://docs.docker.com/compose/)<br>
- nodejs 14+ (https://nodejs.org/en/)
- Make

### Execute

1. Faça clone do repositório
2. Execute `make dev`
3. Acesse `http://localhost:3200`

### TODO

- [ ] Criar factory do middleware.
- [ ] Requisições dentro de um intervalo de tempo
