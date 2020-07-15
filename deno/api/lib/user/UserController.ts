import { RouterContext } from "https://deno.land/x/oak/mod.ts";

export default {
  index(context: RouterContext) {
    const user = {
      name: "jinseok",
      email: "metocherry@gmail.com",
    };
    context.response.body = user;
  },

  show(context: RouterContext) {
    context.response.body = context.params.id;
  },

  async store(context: RouterContext) {
    const { value } = await context.request.body();

    context.response.type = "application/json; charset=utf-8";
    context.response.status = 201;
    context.response.body = value;
  },

  update(context: RouterContext) {
  },

  destory(context: RouterContext) {
  },
};
