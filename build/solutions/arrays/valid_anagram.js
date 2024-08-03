"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validAnagram;
function validAnagram(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('');
}
