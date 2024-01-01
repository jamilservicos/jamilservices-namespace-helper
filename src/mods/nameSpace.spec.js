"use strict";

const nameSpaceTest = require("./nameSpace");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("nameSpaceTest imports", () => {
    it('import is object?', () => {
        equal((typeof nameSpaceTest === "object"), true);
    });
});