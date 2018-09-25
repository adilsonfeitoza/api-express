# API - Adilson Feitoza

## Dependências

Para rodar corretamente o projeto os recursos listados abaixo precisam estar instalados em sua máquina:

- [Visual Studio Code](https://code.visualstudio.com/download)

## Rodando o projeto

Executando projeto com `VS Code`

```bash
# acessa a pasta da API  
$ npm start

```
O projeto é iniciado na porta `:3000`

## Endpoints
#### Siblings
**Request**

    http://localhost:3000/api/v1/siblings/789

**Return** 
``` json
{
  987
}
```

#### Minha CDN
**Post**

    http://localhost:3000/api/v1/logs
    
``` json
{
"sourceUrl": "url",
"targetPath": "url"
}
```

**Return** 
``` json
OK
```