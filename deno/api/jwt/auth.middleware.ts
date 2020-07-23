import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt, Validation,  } from "https://deno.land/x/djwt/validate.ts";

import key from "./key.ts";

const authMiddleware = async (context: Context, next: () => Promise<void>): Promise<void> => {
    console.log("Middleware");

    const headers = context.request.headers;
    const authorization = headers.get("Authorization");

    if (!authorization) {
        context.response.status = 401;
        return;
    }

    const jwt = authorization.split(" ")[1];
    if (!jwt) {
        context.response.status = 401;
        return;
    }

    const validation: Validation = {
        jwt,
        key,
        algorithm: "HS256",
        critHandlers: {
            isThrowing: () => false
        },
    };

    if (await validateJwt(validation)) {
        await next();
        return;
    }

    context.response.status = 401;
    context.response.body = {
        message: "Invalid jwt token"
    };
};

export default authMiddleware;
