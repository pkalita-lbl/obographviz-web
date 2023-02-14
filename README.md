# obographviz-web

An experiment in using [obographviz](https://github.com/INCATools/obographviz) 
in a browser via [@hpcc-js/wasm](https://hpcc-systems.github.io/hpcc-js-wasm/)

## Prerequisites 

* Node 16+
* [pnpm](https://pnpm.io/)

## Setup

```shell
pnpm install
```

## Run

```shell
pnpm run dev
```

## To Do

* `pnpm build` does not work because `obographviz` imports Node packages (`fs`, `child_process`) from 
files in its `lib` directory. Ideally these would only be used from its `bin` scripts.
