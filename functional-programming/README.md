# Functional Programming With Deno

## Start

```bash
docker run \
  -it \
  --rm \
  --name node \
  -v "$(pwd)"/:/app:cached \
  metocherry/centos8-node-with-deno
```

## Tasks

### run

Always execute in project root.

```bash
tasks/run.sh [filename]
```

Example, run the map of example

```bash
tasks/run.sh example/map.example.ts
```


## References

[Deno](https://deno.land/)
[Node 제작자가 만든 Deno by Reid](https://blog.ull.im/engineering/2019/04/14/deno-ryan-dahl-2019-04-04.html)
