import { StrTemplate } from "./../lib/index"

const yourString = `Hello [[name1]], How is [[name2]]?`
const finalString = StrTemplate.format(yourString, {
    name1: "Fayaz",
    name2: "Farhaz"
}, "[[]]")
console.log(finalString) // Hello Fayaz, How is Farhaz?