import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import notFound from "./lib/error/404.ts";
import userRouter from "./lib/user/UserRouter.ts";

const app = new Application();

const env = config();

const HOST = env.HOST ?? "http://localhost";
const PORT = env.PORT ? Number.parseInt(env.PORT) : 8000;

app.use(userRouter.routes());
app.use(notFound);

await app.listen({ port: PORT });

console.log(`server is started at ${HOST}:${PORT}`);
