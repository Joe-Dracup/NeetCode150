"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contains_duplicate_1 = __importDefault(require("./solutions/arrays/contains_duplicate"));
const two_sum_1 = __importDefault(require("./solutions/arrays/two_sum"));
const valid_anagram_1 = __importDefault(require("./solutions/arrays/valid_anagram"));
console.log((0, contains_duplicate_1.default)([1, 2, 3, 5]));
console.log((0, valid_anagram_1.default)('racecar', 'carrace'));
console.log((0, two_sum_1.default)([5, 5], 10));
