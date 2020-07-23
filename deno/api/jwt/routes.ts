import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts";

import key from "./key.ts";
import users from "./users.ts";


const payload: Payload = {
    iss: "joe",
    exp: setExpiration(new Date().getTime() + 60000),
};

const header: Jose = {
    alg: "HS256",
    typ: "JWT"
};

export const login = async (context: Context) => {
    const { value } = await context.request.body();
    console.log(value);

    for (const user of users) {
        if (value.username === user.username && value.password === user.password) {
            const payload: Payload = {
                iss: user.username,
                exp: setExpiration(new Date().getTime() + 60000),
            };

            const jwt = makeJwt({ key: key, header: header, payload: payload });
            if (jwt) {
                context.response.status = 200;
                context.response.body = {
                    id: user.id,
                    username: user.username,
                    jwt,
                };
            }
        }
        else {
            context.response.status = 500;
            context.response.body = {
                message: "Internal server error"
            };
        }

        return;
    }

    context.response.status = 422;
    context.response.body = {
        meesage: "Invalid username or password",
    };
};

export const guest = async (context: Context) => {
    context.response.body = "Guest Success";
};

export const auth = async (context: Context) => {
    context.response.body = "Auth Success";
};

