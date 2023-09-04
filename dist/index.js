"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrTemplate = void 0;
class StrTemplate {
}
exports.StrTemplate = StrTemplate;
StrTemplate.format = (text, obj) => {
    console.log(`captions.ts :: format :: `);
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (var i = 0; i < keys.length; i++) {
        text = text.replaceAll(`{${keys[i]}}`, `${values[i]}`);
    }
    return text;
};
