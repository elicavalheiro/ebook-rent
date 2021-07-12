import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Eli", age: 26 });
      server.create("user", { name: "Iza", age: 23 });
    },

    routes() {
      this.namespace = "api";
      this.timing = 1500;

      this.get("/users", (schema) => {
        return schema.users.all();
      });
    },
  });

  return server;
}
