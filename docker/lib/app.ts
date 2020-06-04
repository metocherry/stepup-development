import { Application, Router, RouterContext } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const HOST = "http://localhost";
const PORT = 8000;

const router = new Router();

router.get("/", (context: RouterContext) => {
  context.response.status = 200;
  context.response.body = "Hello Deno";
});

app.use(router.routes());

console.log(`server is started at ${HOST}:${PORT}`);

await app.listen({ port: PORT });