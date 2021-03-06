import { Router } from "https://deno.land/x/oak/mod.ts";

import UserController from "./UserController.ts";

const router = new Router();

router
  .get("/user", UserController.index)
  .get("/user/:id", UserController.show)
  .post("/user", UserController.store)
  .patch("/user/:id", UserController.update)
  .delete("/user/:id", UserController.destory);

export default router;
