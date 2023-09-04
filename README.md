# str_template
A fast and simple string templating library, written in TypeScript

# Installation

```
npm install str_template
```

or

```
yarn add str_template
```

# Usage
### Example-1
By default, the separator is {}

```
const yourString = `Hello {name1}, How is {name2}?`
const finalString = StrTemplate.format(yourString, {
    name1: "Fayaz",
    name2: "Farhaz"
})
console.log(finalString) // Hello Fayaz, How is Farhaz?
```

### Example-2
You can change the separator if you want to ( The separator must contain even number of characters and should NOT be empty )

```
const yourString = `Hello [[name1]], How is [[name2]]?`
const finalString = StrTemplate.format(yourString, {
    name1: "Fayaz",
    name2: "Farhaz"
}, "[[]]")
console.log(finalString) // Hello Fayaz, How is Farhaz?
```

## License

```
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```