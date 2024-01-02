"use strict";

/**
 * Imports the NameSpaceHelper module.
 */
const {NameSpaceHelper} = require("./mods/nameSpaceHelper");

/**
 * Holds the instances of NameSpaceHelper.
 * @private
 * @type {Object}
 * @memberof module:NameSpaceHelper
 */
const instances = {};

/**
 * Initializes and retrieves an instance of NameSpaceHelper based on the given configuration.
 * It can create a new instance, return an existing one, and optionally attach it to the global namespace.
 *
 * @function autoLoaderNameSpace
 * @memberof module:NameSpaceHelper
 * @param {Object} [config={}] - Configuration for creating or retrieving a NameSpaceHelper instance.
 * @param {boolean} [config.mut] - Determines if the NameSpaceHelper should be mutable.
 * @param {string} [config.prefix='ns'] - The prefix to use for the namespace. Defaults to 'ns'.
 * @param {boolean} [config.isolate=false] - If true, the created NameSpaceHelper will not be attached to the global namespace.
 * @returns {NameSpaceHelper|Object} - The initialized NameSpaceHelper instance or an empty object on error.
 */
const autoLoaderNameSpace = (config = {}) => {
    try {
        let prefixGlobal = 'ns';
        let enableGlobal = true;

        const {mut, prefix, isolate} = config;
        if(isolate) enableGlobal = false;
        if (typeof prefix === "string") prefixGlobal = prefix.toString();
        if (typeof instances[prefixGlobal] === "undefined") {
            instances[prefixGlobal] = new NameSpaceHelper({mut, prefix: prefixGlobal});
        }
        if (enableGlobal) global[prefixGlobal] = instances[prefixGlobal];
        return instances[prefixGlobal];
    } catch(err) {
        console.error("Error on init NameSpaceHelper");
        console.error(err);
    }
    return {};
};

/**
 * Exports the autoLoaderNameSpace function.
 * This function is intended for internal use within the application or package.
 *
 * @private
 * @module NameSpaceHelper
 */
exports = module.exports = autoLoaderNameSpace;