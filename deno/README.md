# Deno

You can find modules you want in https://deno.land/x/

## Command Lines

### run

```bash
deno run <file_name>
```

with server:

```bash
deno run --allow-net <file_name>
```

- `--allow-net` : Allow network access

with server:

redownload

```bash
deno run --allow-net --reload <file_name>
```


### fmt

Format source files

```bash
deno fmt <file_name>
```


## Pacakges

- [oak](https://deno.land/x/oak) : middleware framework for Deno's http server, including a router middleware.
