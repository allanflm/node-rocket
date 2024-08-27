/*import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.write("Hello World");

  return response.end();
});

server.listen(3333);
*/

import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
  return "Hello World!";
});
server.get("/node", () => {
  return "Hello Node!";
});
server.get("/rockeseat", () => {
  return "Hello Rockseate!";
});

server.listen({
  port: 3333,
});
