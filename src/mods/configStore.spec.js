"use strict";

const configStoreTest = require("./configStore");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("configStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof configStoreTest === "object"), true);
    });
});