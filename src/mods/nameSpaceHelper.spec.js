"use strict";

const nameSpaceHelperTest = require("./nameSpaceHelper");

const {describe, it} = require("node:test");
const {equal, strictEqual} = require("node:assert");
describe("nameSpaceHelperTest imports", () => {
    it('import is object?', () => {
        equal((typeof nameSpaceHelperTest === "object"), true);
    });
    it('NameSpaceHelper initializes correctly?', () => {
        const {NameSpaceHelper} = nameSpaceHelperTest;
        const helper = new NameSpaceHelper({ prefix: 'test', mut: true });
        strictEqual(helper["prefix"], 'test', 'Prefix should be "test"');
        strictEqual(helper["mutable"], true, 'Mutable should be true');
        equal((typeof helper.storage === "function"), true);
        equal((typeof helper.deps === "function"), true);
        equal((typeof helper.settings === "function"), true);
    });
});