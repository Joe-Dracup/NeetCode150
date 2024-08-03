"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = containsDuplicate;
function containsDuplicate(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
}
