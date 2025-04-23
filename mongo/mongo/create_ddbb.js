db = db.getSiblingDB("my_database");

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "my_database" }]
});
