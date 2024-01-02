"use strict";

const generalStoreTest = require("./generalStore");

const {describe, it} = require("node:test");
const {equal, strictEqual} = require("node:assert");

const prefix = 'testPrefix';
const key = 'testKey';
const value = 'testValue';
const {showGeneralStore, setGeneralStoreKey, getGeneralStoreValue} = generalStoreTest;

describe("generalStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof generalStoreTest === "object"), true);
    });
    it('setGeneralStoreKey should successfully set a value and return true', () => {
        const result = setGeneralStoreKey({ prefix, key, value });
        strictEqual(result, true, 'Expected the function to return true on successful set');
    });
    it('getGeneralStoreValue should retrieve the correct value for a given key and prefix', () => {
        const result = getGeneralStoreValue({ prefix, key });
        strictEqual(result, value, 'Expected to retrieve the value that was set');
    });
    it('showGeneralStore should return an object for a valid prefix', () => {
        const result = showGeneralStore(prefix);
        strictEqual(typeof result, 'object', 'Expected an object to be returned');
        strictEqual(result[key], value, 'Expected the key to have the correct value');
    });
});