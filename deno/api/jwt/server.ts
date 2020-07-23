import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

import { login, guest, auth } from "./routes.ts";
import authMiddleware from "./auth.middleware.ts";

const router = new Router();

router
    .post("/login", login)
    .get("/guest", guest)
    .get("/auth", authMiddleware, auth);


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


app.listen({ port: 8000 });
