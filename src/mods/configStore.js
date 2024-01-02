"use strict";

/**
 * Stores configuration settings.
 * @private
 * @type {Object}
 * @memberof module:ConfigStoreModule
 */
const configStore = {};

/**
 * Retrieves the configuration for a specific prefix.
 *
 * This function returns the configuration object associated with the given prefix, if it exists and is not empty.
 *
 * @function showConfigStore
 * @memberof module:ConfigStoreModule
 * @param {string} prefix - The prefix key for the configuration to retrieve.
 * @returns {Object} - The configuration object associated with the prefix, or an empty object if not found or on error.
 */
const showConfigStore = (prefix) => {
    try {
        if (configStore[prefix] && Object.keys(configStore[prefix]).length > 0) return {...configStore[prefix]};
    } catch(err) {
        console.error("Error on showConfigStore", prefix);
        console.error(err);
    }
    return {};
};

/**
 * Changes a specific configuration value.
 *
 * This internal function updates the value of a specific key within the configuration store.
 *
 * @function changeValue
 * @memberof module:ConfigStoreModule
 * @param {Object} data - The object containing the prefix, key, and new value to set.
 * @param {string} data.prefix - The prefix key for the configuration to update.
 * @param {string} data.key - The key within the configuration to update.
 * @param {*} data.value - The new value to set for the key.
 * @returns {boolean} - True if the operation was successful, false otherwise.
 */
const changeValue = (data) => {
    const {prefix, key, value} = data;
    configStore[prefix][key.toString()] = value;
    return true;
};

/**
 * Sets a configuration key with a specific value.
 *
 * This function sets a key-value pair within the configuration store for a given prefix.
 * It can enforce immutability based on the 'mut' flag.
 *
 * @function setConfigStoreKey
 * @memberof module:ConfigStoreModule
 * @param {Object} data - The object containing the key, value, and other options for setting the configuration.
 * @param {string} data.key - The key to set in the configuration.
 * @param {*} data.value - The value to set for the key.
 * @param {boolean} [data.mut=false] - Determines if the key can be mutated in the future.
 * @param {string} data.prefix - The prefix key for the configuration to update.
 * @returns {boolean} - True if the key was set successfully, false otherwise.
 */
const setConfigStoreKey = (data) => {
    try {
        const {key, value, mut, prefix} = data;
        if(typeof prefix === "undefined") return false;
        if (typeof configStore[prefix] === "undefined") configStore[prefix] = {};
        if (typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof configStore[prefix][key] === "undefined")
            || (mut && configStore[prefix][key])) {
            return changeValue({prefix, key, value});
        }
    } catch(err) {
        console.error("Error on setConfigStoreKey:", data);
        console.error(err);
    }
    return false;
};

/**
 * Retrieves the value for a specific configuration key.
 *
 * This function returns the value associated with a given key in the configuration store, if it exists.
 *
 * @function getConfigStoreValue
 * @memberof module:ConfigStoreModule
 * @param {Object} data - The object containing the prefix and key to retrieve the value for.
 * @param {string} data.key - The key to retrieve the value for.
 * @param {string} data.prefix - The prefix key for the configuration to retrieve from.
 * @returns {*} - The value associated with the key, or undefined if not found or on error.
 */
const getConfigStoreValue = (data) => {
    try {
        const {key, prefix} = data;
        if ((prefix) && (typeof configStore[prefix] === "undefined")) return undefined;
        if (key && configStore[prefix][key]) return configStore[prefix][key];
    } catch(err) {
        console.error("Error on getConfigValue:", data);
        console.error(err);
    }
    return undefined;
};

/**
 * Exports the configuration store management functions.
 * These functions are intended for internal use within the application or package.
 *
 * @private
 * @module ConfigStoreModule
 */
exports = module.exports = {
    ...{showConfigStore},
    ...{setConfigStoreKey},
    ...{getConfigStoreValue}
};