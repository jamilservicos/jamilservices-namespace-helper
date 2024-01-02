"use strict";

const dependencieStoreTest = require("./dependencieStore");

const {describe, it} = require("node:test");
const {equal, strictEqual} = require("node:assert");

const prefix = 'testPrefix';
const key = 'testKey';
const value = 'testValue';
const {showDependencieStore, setDependencieStoreKey, getDependencieStoreValue} = dependencieStoreTest;

describe("dependencieStoreTest imports", () => {
    it('import is object?', () => {
        equal((typeof dependencieStoreTest === "object"), true);
    });
    it('setDependencieStoreKey should successfully set a value and return true', () => {
        const result = setDependencieStoreKey({ prefix, key, value });
        strictEqual(result, true, 'Expected the function to return true on successful set');
    });
    it('getDependencieStoreValue should retrieve the correct value for a given key and prefix', () => {
        const result = getDependencieStoreValue({ prefix, key });
        strictEqual(result, value, 'Expected to retrieve the value that was set');
    });
    it('showDependencieStore should return an array of keys for a valid prefix', () => {
        const result = showDependencieStore(prefix);
        strictEqual(Array.isArray(result), true, 'Expected an array to be returned');
        strictEqual(result.includes(key), true, 'Expected the array to contain the correct key');
    });
});