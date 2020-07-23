import { Context } from "https://deno.land/x/oak/mod.ts";

export async function logger(context: Context, next: () => Promise<void>): Promise<void> {
    await next();
    const rt = context.response.headers.get("X-Response-Time");
    console.log(`${context.request.method} ${context.request.url} - ${rt}`);
}
