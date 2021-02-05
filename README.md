# Teste técnico Front-end
Tecnologia: Javascript/Typescript
Framework: Angular 11 (com ng cli)
Design: Material Design

## Problema
Realizar o cadastro de clientes de uma loja, obrigatoriamente todo cliente deve ter nome, telefone e documento e opcionalmente o endereço (uf, município, cep, rua e complemento). Realizar o vínculo de um cliente a itens, os itens devem ter pelo menos nome, preço e código.

Precisamos de uma interface que resolva as seguintes questões abaixo:
1. Lista de clientes
2. Cadastro de cliente
3. Editar um cliente
4. Apagar um cliente
5. Visualizar o detalhe de um cliente com os itens

## Serviços utilizados
- API Estados - https://servicodados.ibge.gov.br/api/v1/localidades/estados
- API Municipios por UF - https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
- API CEP - http://viacep.com.br/

## API Fake
Foi utilizado para desenvolvimento a lib [json-server](https://link) com o json [db.json](./db.json)

# Iniciar o projeto
Fazer o clone do projeto

```
git clone https://github.com/LuizGMiranda/crud-angular11.git
```

Entrar e instalar pacotes

```
cd crud-angular11
npm install
```

Iniciar o projeto
```
npm run start
```
Acessar a url [localhost:4200](http://localhost:4200)
