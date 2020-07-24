import { Context } from "https://deno.land/x/oak/mod.ts";

import { ResponseEntity } from "./entities/response_entity.ts";
import { Authentication } from "./entities/authentication.ts";
import { User } from "./entities/user.ts";

export async function get(context: Context) {
    const imp_uid = "";

    const response1 = await fetch("https://api.iamport.kr/users/getToken", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            imp_key: "",
            imp_secret: ""
        }),
    });

    const json1: ResponseEntity<Authentication> = await response1.json();

    const response2 = await fetch(`https://api.iamport.kr/certifications/${imp_uid}`, {
        method: "GET",
        headers: {
            "Conetent-Type": "application/json",
            "Authorization": json1.response.access_token
        }
    })

    const json2: ResponseEntity<User> = await response2.json();
    console.log(json2.response);

    context.response.body = "JSON WEB TOKEN";
}
