"use strict";

const nameSpaceHelperTest = require("./nameSpaceHelper");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("nameSpaceHelperTest imports", () => {
    it('import is object?', () => {
        equal((typeof nameSpaceHelperTest === "object"), true);
    });
});