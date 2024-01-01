"use strict";

const mainTest = require("./main");

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("mainTest imports", () => {
    it('import is function?', () => {
        equal((typeof mainTest === "function"), true);
    });
});
describe("mainTest global mode", () => {
    it('nsGlobalModeTest is set?', () => {
        mainTest({prefix: 'nsGlobalModeTest'});
        equal((typeof global["nsGlobalModeTest"] === "object"), true);
    });
});
describe("mainTest isolate mode", () => {
    it('nsIsolateModeTest is undefined as global?', () => {
        mainTest({prefix: 'nsIsolateModeTest', isolate: true});
        equal((typeof global["nsIsolateModeTest"] === "undefined"), true);
    });
});

describe("mainTest isolate mode on global mode", () => {
    it('nsGlobalModeTest sets nsIsolateModeTest as dependency?', () => {
        const isolateModeInstance = mainTest({prefix: 'nsIsolateModeTest', isolate: true});
        global["nsGlobalModeTest"].deps("nsIsolateModeTest", isolateModeInstance);
        equal((typeof isolateModeInstance === "object"), true);
        equal((typeof global["nsGlobalModeTest"].deps("nsIsolateModeTest") === "object"), true);
    });
});