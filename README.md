# node_agenda


docker compose up --build

# aceder a os contenedores 

```
docker exec -ir agenda-app bash 
```

# editar o usario e seha padron 

em archivo create_ddbb.js al tera la seha 
``` js 
db = db.getSiblingDB("my_database");

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "my_database" }]
});

```

ou entra no contendor de mongodb e altera a seha

# notas
Na pasta mongo há um formulário de exemplo de como o banco de dados mongo db é configurado.