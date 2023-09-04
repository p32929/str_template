export class StrTemplate {
    static format(
        text: string,
        obj: {
            [key: string]: string;
        },
        separator = "{}"
    ) {
        if (separator.length === 0) throw "Separator should not be empty"
        if (separator.length % 2 !== 0) throw "Separator should contain even number of characters. Example: {} or {{}} or [] or [[]] or *##* etc"
        const [firstHalf, secondHalf] = this.splitStringInMiddle(separator)

        const keys = Object.keys(obj)
        const values = Object.values(obj)
        for (var i = 0; i < keys.length; i++) {
            text = text.replaceAll(`${firstHalf}${keys[i]}${secondHalf}`, `${values[i]}`)
        }
        return text
    }

    private static splitStringInMiddle(input: string): [string, string] | null {
        const length = input.length;
        const middle = length / 2;
        const firstHalf = input.slice(0, middle);
        const secondHalf = input.slice(middle);

        return [firstHalf, secondHalf];
    }
}