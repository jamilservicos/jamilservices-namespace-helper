"use strict";

const configStoreTest = require("./configStore");

const {describe, it} = require("node:test");
const {equal, strictEqual} = require("node:assert");

const prefix = 'testPrefix';
const key = 'testKey';
const value = 'testValue';
const {showConfigStore, setConfigStoreKey, getConfigStoreValue} = configStoreTest;

describe("configStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof configStoreTest === "object"), true);
    });
    it('setConfigStoreKey should successfully set a value and return true', () => {
        const result = setConfigStoreKey({ prefix, key, value });
        strictEqual(result, true, 'Expected the function to return true on successful set');
    });
    it('getConfigStoreValue should retrieve the correct value for a given key and prefix', () => {
        const result = getConfigStoreValue({ prefix, key });
        strictEqual(result, value, 'Expected to retrieve the value that was set');
    });
    it('showConfigStore should return an object for a valid prefix', () => {
        const result = showConfigStore(prefix);
        strictEqual(typeof result, 'object', 'Expected an object to be returned');
        strictEqual(result[key], value, 'Expected the key to have the correct value');
    });
});