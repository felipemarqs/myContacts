Comandos Docker 
docker pull <image> - Baixa imagem
docker rmi <image> - Remove imagem
docker ps - Lista os containers rodando
docker ps -a - Lista os containers parados
docker run --name <containerName> -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres - Cria um container e utiliza a imagem (As flags -e são variáveis de ambiente)
docker start <container> - Inicia o container
docker stop <container> - Para o container
docker container rm <container> - Deleta o container
docker exec -it <container> bash - Executa o container




Comandos Postgres
psql -U root - Loga no banco de dados utilizando o usuário criado
\l - Listar base de dados
\c <database>- conectar a base de dados
\dt - Lista as tabelas na base de dados

Comandos SQL

CREATE DATABASE IF NOT EXISTS; - Cria um banco de dados


