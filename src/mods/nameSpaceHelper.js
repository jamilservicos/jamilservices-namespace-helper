"use strict";

/**
 * Imports the required store management functions from various modules.
 */
const {showGeneralStore, setGeneralStoreKey, getGeneralStoreValue} = require("./generalStore");
const {showDependencieStore, setDependencieStoreKey, getDependencieStoreValue} = require("./dependencieStore");
const {showConfigStore, setConfigStoreKey, getConfigStoreValue} = require("./configStore");

/**
 * Shows the combined content from all stores for a specific prefix.
 *
 * This function aggregates and returns the content from dependency, configuration, and general stores.
 *
 * @function showAllStores
 * @param {string} prefix - The prefix key for the content to retrieve from each store.
 * @returns {Object} - An object containing content from all stores for the specified prefix.
 */
const showAllStores = (prefix) => {
    const obj = {};
    obj['dependencies'] = showDependencieStore(prefix);
    obj['settings'] = showConfigStore(prefix);
    obj['storage'] = showGeneralStore(prefix);
    return {...obj};
};

/**
 * NameSpaceHelper is a class for managing namespaces with associated dependencies, settings, and general storage.
 *
 * @class NameSpaceHelper
 * @memberof module:NameSpaceHelperModule
 */
class NameSpaceHelper {
    /**
     * Constructs an instance of the NameSpaceHelper with the specified configuration.
     *
     * @constructor
     * @param {Object} config - Configuration for the namespace helper.
     * @param {boolean} [config.mut=false] - Determines if the namespace is mutable.
     * @param {string} config.prefix - The prefix for the namespace.
     */
    constructor(config) {
        const {mut, prefix} = config;
        this.prefix = prefix;
        this.mutable = (typeof mut === "boolean" && mut === true);
        /**
         * @private
         * @type {Boolean}
         * @name mutable
         * @memberof module:NameSpaceHelperModule
         */
        Object.defineProperty(this, 'mutable', {enumerable: false});/**
         * @private
         * @type {string}
         * @name prefix
         * @memberof module:NameSpaceHelperModule
         */
        Object.defineProperty(this, 'prefix', {enumerable: false});
        /**
         * @private
         * @type {SymbolConstructor}
         * @name instanceOf
         * @memberof module:NameSpaceHelperModule
         * @description Name of the instance type, typically the name of the class.
         */
        Object.defineProperty(this, 'instanceOf', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: new.target.name
        });
        /**
         * @private
         * @type {SymbolConstructor}
         * @name show
         * @memberof module:NameSpaceHelperModule
         */
        Object.defineProperty(this, 'show', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: () => showAllStores(this.prefix)
        });
    }

    /**
     * Manages general storage with the ability to set, get, and show values.
     *
     * @param {string} [key] - The key to set or get in the general store.
     * @param {*} [value] - The value to set for the key in the general store.
     * @returns {*} - The result from setting or getting the value, or all values if no key is provided.
     */
    storage = (key, value) => {
        if (key && value) return setGeneralStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getGeneralStoreValue({
            prefix: this.prefix, key
        });
        return showGeneralStore(this.prefix);
    }
    /**
     * Manages dependencies with the ability to set, get, and show values.
     *
     * @param {string} [key] - The key to set or get in the dependency store.
     * @param {*} [value] - The value to set for the key in the dependency store.
     * @returns {*} - The result from setting or getting the value, or all values if no key is provided.
     */
    deps = (key, value) => {
        if (key && value) return setDependencieStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getDependencieStoreValue({
            prefix: this.prefix, key
        });
        return showDependencieStore(this.prefix);
    }
    /**
     * Manages settings with the ability to set, get, and show values.
     *
     * @param {string} [key] - The key to set or get in the configuration store.
     * @param {*} [value] - The value to set for the key in the configuration store.
     * @returns {*} - The result from setting or getting the value, or all values if no key is provided.
     */
    settings = (key, value) => {
        if (key && value) return setConfigStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getConfigStoreValue({
            prefix: this.prefix, key
        });
        return showConfigStore(this.prefix);
    }
}

/**
 * Defines custom `instanceof` behavior for the NameSpaceHelper.
 *
 * @private
 * @ignore
 * @memberof module:NameSpaceHelperModule
 */
Object.defineProperty(NameSpaceHelper, Symbol.hasInstance, {
    /**
     * Getter function for the custom `instanceof` behavior.
     *
     * @private
     * @function
     * @memberof module:NameSpaceHelperModule
     * @returns {function(*): boolean} A function that takes an instance and returns a boolean indicating
     * whether the instance's constructor name matches its `instanceOf` property.
     */
    get: () => (instance) => instance.constructor.name === instance.instanceOf
});

/**
 * Exports the NameSpaceHelper for managing namespaces with associated dependencies, settings, and general storage.
 *
 * @private
 * @module NameSpaceHelperModule
 */
exports = module.exports = {
    ...{NameSpaceHelper}
}