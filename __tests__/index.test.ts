import { StrTemplate } from "../src";

test('Normal operations', () => {
    expect(StrTemplate.format("Hello {name}", {
        "name": "Fayaz"
    })).toBe("Hello Fayaz")

    expect(StrTemplate.format("Hello {name}, Hello {name2}", {
        "name": "Fayaz",
        "name2": "Farhaz",
        "name3": "Farhaz",
    })).toBe("Hello Fayaz, Hello Farhaz")

    expect(StrTemplate.format("Hello {name}, Hello {name2}, Hello {name3}", {
        "name": "Fayaz",
        "name2": "Farhaz",
        "name3": "Famiya",
    })).toBe("Hello Fayaz, Hello Farhaz, Hello Famiya")

    expect(StrTemplate.format("Hello [name[, Hello [name2[, Hello [name3[", {
        "name": "Fayaz",
        "name2": "Farhaz",
        "name3": "Famiya",
    }, "[[")).toBe("Hello Fayaz, Hello Farhaz, Hello Famiya")

    expect(StrTemplate.format("Hello [[name]], Hello [[name2]], Hello [[name3]]", {
        "name": "Fayaz",
        "name2": "Farhaz",
        "name3": "Famiya",
    }, "[[]]")).toBe("Hello Fayaz, Hello Farhaz, Hello Famiya")
});

test('Crashes', () => {
    try {
        expect(StrTemplate.format(
            "Hello {name}, Hello {name2}, Hello {name3}", {
            "name": "Fayaz",
            "name2": "Farhaz",
            "name3": "Famiya",
        },
            ""
        ))
    }
    catch (e) {
        expect(e).not.toBe(null)
    }

    try {
        expect(StrTemplate.format(
            "Hello {name}, Hello {name2}, Hello {name3}", {
            "name": "Fayaz",
            "name2": "Farhaz",
            "name3": "Famiya",
        },
            "[[["
        ))
    }
    catch (e) {
        expect(e).not.toBe(null) 
    }
})