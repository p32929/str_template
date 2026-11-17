# str_template

A tiny string templating library for TypeScript and JavaScript. Write `Hello {name}` once and fill it from an object, in Node or in the browser. It has **no runtime dependencies**, so it adds nothing else to your app and no supply chain to worry about.

On npm: **[str-template-ts](https://www.npmjs.com/package/str-template-ts)**

## Features

1. **Fill `{placeholders}` from an object** with one call.
2. **Pick your own delimiter,** like `[[name]]` or `*#name#*`, when your text already uses curly braces.
3. **Every match is replaced,** not just the first one.
4. **Typed:** written in TypeScript and ships its own types.

## Install

```bash
npm install str-template-ts
# or
yarn add str-template-ts
```

## Use it

```ts
import { StrTemplate } from "str-template-ts"

const text = `Hello {name1}, How is {name2}?`
StrTemplate.format(text, { name1: "Fayaz", name2: "Farhaz" })
// Hello Fayaz, How is Farhaz?
```

With your own delimiter. It must not be empty and must have an even number of characters, so it can be split into an opening and a closing half:

```ts
const text = `Hello [[name1]], How is [[name2]]?`
StrTemplate.format(text, { name1: "Fayaz", name2: "Farhaz" }, "[[]]")
// Hello Fayaz, How is Farhaz?
```

It uses `String.replaceAll`, so it needs Node 15 or newer, or a modern browser.

## Changelog

1. **0.0.2:** fixed the GitHub link in `package.json` for npm.
2. **0.0.1:** first release.

## License

MIT License — Copyright (c) Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make str_template better.

<p><a href="https://p32929.github.io/share/?repo=str_template"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
