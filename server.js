import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

// GET, POST, PUT, DELETE

server.post("/videos", (request, reply) => {
  database.create({
    title: "Video 01",
    description: "Esse é o video 01",
    duration: 180,
  });

  console.log(database.list());

  return reply.status(201);
});

server.get("/videos", () => {
  return "Hello World!";
});

// Router Parameter
server.put("/videos/:id", () => {
  return "Hello World!";
});

server.delete("/videos/:id", () => {
  return "Hello World!";
});

server.listen({
  port: 3333,
});
