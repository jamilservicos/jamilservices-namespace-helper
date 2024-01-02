"use strict";

/**
 * Stores dependency settings.
 * @private
 * @type {Object}
 * @memberof module:DependencieStoreModule
 */
const dependencieStore = {};

/**
 * Retrieves the keys for all dependencies for a specific prefix.
 *
 * This function returns an array of keys associated with the given prefix in the dependencieStore, if it exists and is not empty.
 *
 * @function showDependencieStore
 * @memberof module:DependencieStoreModule
 * @param {string} prefix - The prefix key for the dependencies to retrieve.
 * @returns {Array<string>} - An array of keys for the dependencies associated with the prefix, or an empty array if not found or on error.
 */
const showDependencieStore = (prefix) => {
    try {
        if (dependencieStore[prefix] && Object.keys(dependencieStore[prefix]).length > 0) return Object.keys(dependencieStore[prefix]);
    } catch(err) {
        console.error("Error on showDependencieStore", prefix);
        console.error(err);
    }
    return [];
};

/**
 * Changes a specific dependency value.
 *
 * This internal function updates the value of a specific key within the dependencieStore.
 *
 * @function changeValue
 * @memberof module:DependencieStoreModule
 * @param {Object} data - The object containing the prefix, key, and new value to set.
 * @param {string} data.prefix - The prefix key for the dependency to update.
 * @param {string} data.key - The key within the dependency to update.
 * @param {*} data.value - The new value to set for the key.
 * @returns {boolean} - True if the operation was successful, false otherwise.
 */
const changeValue = (data) => {
    const {prefix, key, value} = data;
    dependencieStore[prefix][key.toString()] = value;
    return true;
};

/**
 * Sets a dependency key with a specific value.
 *
 * This function sets a key-value pair within the dependencieStore for a given prefix.
 * It can enforce immutability based on the 'mut' flag.
 *
 * @function setDependencieStoreKey
 * @memberof module:DependencieStoreModule
 * @param {Object} data - The object containing the key, value, and other options for setting the dependency.
 * @param {string} data.key - The key to set in the dependency.
 * @param {*} data.value - The value to set for the key.
 * @param {boolean} [data.mut=false] - Determines if the key can be mutated in the future.
 * @param {string} data.prefix - The prefix key for the dependency to update.
 * @returns {boolean} - True if the key was set successfully, false otherwise.
 */
const setDependencieStoreKey = (data) => {
    try {
        const {key, value, mut, prefix} = data;
        if(typeof prefix === "undefined") return false;
        if (typeof dependencieStore[prefix] === "undefined") dependencieStore[prefix] = {};
        if (typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof dependencieStore[prefix][key] === "undefined")
            || (mut && dependencieStore[prefix][key])) {
            return changeValue({prefix, key, value});
        }
    } catch(err) {
        console.error("Error on setDependencieStoreKey:", data);
        console.error(err);
    }
    return false;
};

/**
 * Retrieves the value for a specific dependency key.
 *
 * This function returns the value associated with a given key in the dependencieStore, if it exists.
 *
 * @function getDependencieValue
 * @memberof module:DependencieStoreModule
 * @param {Object} data - The object containing the prefix and key to retrieve the value for.
 * @param {string} data.key - The key to retrieve the value for.
 * @param {string} data.prefix - The prefix key for the dependency to retrieve from.
 * @returns {*} - The value associated with the key, or undefined if not found or on error.
 */
const getDependencieValue = (data) => {
    try {
        const {key, prefix} = data;
        if (prefix) {
            if (typeof dependencieStore[prefix] === "undefined") return undefined;
            if (key && dependencieStore[prefix][key]) return dependencieStore[prefix][key];
        }
    } catch(err) {
        console.error("Error on getDependencieValue:", data);
        console.error(err);
    }
    return undefined;
};

/**
 * Exports the dependency store management functions.
 * These functions are intended for internal use within the application or package.
 *
 * @private
 * @module DependencieStoreModule
 */
exports = module.exports = {
    ...{showDependencieStore},
    ...{setDependencieStoreKey},
    ...{getDependencieValue}
};