# str_template

A fast, tiny string templating library written in TypeScript. Fill `{placeholders}` in a string from an object — works the same in Node and in the browser, with a configurable delimiter.

On npm: **[str-template-ts](https://www.npmjs.com/package/str-template-ts)**

## Installation

```bash
npm install str-template-ts
# or
yarn add str-template-ts
```

## Usage
### Example-1
By default, the separator is `{}`

```ts
const yourString = `Hello {name1}, How is {name2}?`
const finalString = StrTemplate.format(yourString, {
    name1: "Fayaz",
    name2: "Farhaz"
})
console.log(finalString) // Hello Fayaz, How is Farhaz?
```

### Example-2
You can change the separator if you want to ( The separator must contain even number of characters and should NOT be empty )

```ts
const yourString = `Hello [[name1]], How is [[name2]]?`
const finalString = StrTemplate.format(yourString, {
    name1: "Fayaz",
    name2: "Farhaz"
}, "[[]]")
console.log(finalString) // Hello Fayaz, How is Farhaz?
```

## Changelog
### 0.0.2
Fixed github URL in package JSON ( for npm )

### 0.0.1
Initial release

## License

MIT License — Copyright (c) Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/str_template/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/str_template/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/str_template/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/str_template/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/str_template/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/str_template/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/str_template/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/str_template/)
