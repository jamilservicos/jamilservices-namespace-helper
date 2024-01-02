"use strict";

/**
 * Stores general settings or values.
 * @private
 * @type {Object}
 * @memberof module:GeneralStoreModule
 */
const generalStore = {};

/**
 * Retrieves the content for a specific prefix from the general store.
 *
 * This function returns the object associated with the given prefix in the generalStore if it exists and is not empty.
 *
 * @function showGeneralStore
 * @memberof module:GeneralStoreModule
 * @param {string} prefix - The prefix key for the content to retrieve.
 * @returns {Object} - The object associated with the prefix, or an empty object if not found or on error.
 */
const showGeneralStore = (prefix) => {
    try {
        if (generalStore[prefix] && Object.keys(generalStore[prefix]).length > 0) return {...generalStore[prefix]};
    } catch {
        console.error("Error on showGeneralStore", prefix);
    }
    return {};
};

/**
 * Changes a specific value in the general store.
 *
 * This internal function updates the value of a specific key within the generalStore.
 *
 * @function changeValue
 * @memberof module:GeneralStoreModule
 * @param {Object} data - The object containing the prefix, key, and new value to set.
 * @param {string} data.prefix - The prefix key for the value to update.
 * @param {string} data.key - The key within the store to update.
 * @param {*} data.value - The new value to set for the key.
 * @returns {boolean} - True if the operation was successful, false otherwise.
 */
const changeValue = (data) => {
    const {prefix, key, value} = data;
    generalStore[prefix][key.toString()] = value;
    return true;
};

/**
 * Sets a key with a specific value in the general store.
 *
 * This function sets a key-value pair within the generalStore for a given prefix.
 * It can enforce immutability based on the 'mut' flag.
 *
 * @function setGeneralStoreKey
 * @memberof module:GeneralStoreModule
 * @param {Object} data - The object containing the key, value, and other options for setting the content.
 * @param {string} data.key - The key to set in the store.
 * @param {*} data.value - The value to set for the key.
 * @param {boolean} [data.mut=false] - Determines if the key can be mutated in the future.
 * @param {string} data.prefix - The prefix key for the store to update.
 * @returns {boolean} - True if the key was set successfully, false otherwise.
 */
const setGeneralStoreKey = (data) => {
    try {
        const {key, value, mut, prefix} = data;
        if(typeof prefix === "undefined") return false;
        if (typeof generalStore[prefix] === "undefined") generalStore[prefix] = {};
        if (typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof generalStore[prefix][key] === "undefined")
            || (mut && generalStore[prefix][key])) {
            return changeValue({prefix, key, value});
        }
    } catch {
        console.error("Error on setGeneralStoreKey:", data);
    }
    return false;
};

/**
 * Retrieves the value for a specific key from the general store.
 *
 * This function returns the value associated with a given key in the generalStore, if it exists.
 *
 * @function getGeneralValue
 * @memberof module:GeneralStoreModule
 * @param {Object} data - The object containing the prefix and key to retrieve the value for.
 * @param {string} data.key - The key to retrieve the value for.
 * @param {string} data.prefix - The prefix key for the store to retrieve from.
 * @returns {*} - The value associated with the key, or undefined if not found or on error.
 */
const getGeneralValue = (data) => {
    try {
        const {key, prefix} = data;
        if (prefix) {
            if (typeof generalStore[prefix] === "undefined") return undefined;
            if (key && generalStore[prefix][key]) return generalStore[prefix][key];
        }
    } catch {
        console.error("Error on getGeneralValue:", data);
    }
    return undefined;
};

/**
 * Exports the general store management functions.
 * These functions are intended for internal use within the application or package.
 *
 * @private
 * @module GeneralStoreModule
 */
exports = module.exports = {
    ...{showGeneralStore},
    ...{setGeneralStoreKey},
    ...{getGeneralValue}
};