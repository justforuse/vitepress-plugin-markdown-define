<p align="center">
  <img src="https://vitejs.dev/logo.svg" height="150">
</p>

<h1 align="center">
vitepress-plugin-markdown-define
</h1>

<p align="center">
Doc for vitepress-plugin-markdown-define.
<p>


<p align="center">
  <a href="https://www.npmjs.com/package/vitepress-plugin-markdown-define"><img src="https://img.shields.io/npm/v/vitepress-plugin-markdown-define" alt="npm"></a>
</p>

## Install

```sh
npm install vitepress-plugin-markdown-define -D
```


## How to use

In your `config.ts`

```ts
import useDefinePlugin from 'vitepress-plugin-markdown-define'

const CONSTS = {
  __custom_variable__: 'your value'
}

export default defineConfig({
  markdown: {
    config(md) {
      useDefinePlugin(md, CONSTS)
    },
  },
})
```