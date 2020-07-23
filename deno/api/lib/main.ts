import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import { logger } from "./middlewares/logger.ts";

import * as iamport from "./iamport/route.ts";

// import notFound from "./error/404.ts";
// import userRouter from "./user/UserRouter.ts";

const env = config();

const HOST = env.APP_HOST;
const PORT = Number.parseInt(env.APP_PORT);



const router = new Router();
router.get("/", iamport.get);

const app = new Application();

// Logger
app.use(logger);

// app.use(userRouter.routes());
// app.use(notFound);


app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server is started at ${HOST}:${PORT}`);

await app.listen({ port: PORT });
