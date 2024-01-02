"use strict";

const generalStoreTest = require("./generalStore");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("generalStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof generalStoreTest === "object"), true);
    });
});