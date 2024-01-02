"use strict";

const dependencieStoreTest = require("./dependencieStore");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("dependencieStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof dependencieStoreTest === "object"), true);
    });
});