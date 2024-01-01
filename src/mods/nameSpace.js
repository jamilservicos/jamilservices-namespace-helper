"use strict";

const {showGeneralStore, setGeneralStoreKey, getGeneralValue} = require("./generalStore");
const {showDependencieStore, setDependencieStoreKey, getDependencieValue} = require("./dependencieStore");
const {showConfigStore, setConfigStoreKey, getConfigValue} = require("./configStore");
const showAllStores = (prefix) => {
    const obj = {};
    obj['dependencies'] = showDependencieStore(prefix);
    obj['settings'] = showConfigStore(prefix);
    obj['storage'] = showGeneralStore(prefix);
    return {...obj};
};

/**
 * NameSpace *
 */
class NameSpaceHelper {
    /**
     * Constructs an instance of the NameSpaceHelper.
     * @constructor
     * @memberof module:NameSpaceModule
     * @param {Object} config
     */
    constructor(config) {
        const {mut, prefix} = config;
        this.prefix = prefix;
        this.mutable = (typeof mut === "boolean" && mut === true);
        /**
         * @private
         * @type {Boolean}
         * @name mutable
         * @memberof module:NameSpaceModule
         */
        Object.defineProperty(this, 'mutable', {enumerable: false});
        /**
         * @private
         * @type {SymbolConstructor}
         * @name instanceOf
         * @memberof module:NameSpaceModule
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
         * @memberof module:NameSpaceModule
         */
        Object.defineProperty(this, 'show', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: () => showAllStores(this.prefix)
        });
    }

    storage = (key, value) => {
        if (key && value) return setGeneralStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getGeneralValue({
            prefix: this.prefix, key
        });
        return showGeneralStore(this.prefix);
    }
    deps = (key, value) => {
        if (key && value) return setDependencieStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getDependencieValue({
            prefix: this.prefix, key
        });
        return showDependencieStore(this.prefix);
    }
    settings = (key, value) => {
        if (key && value) return setConfigStoreKey({
            key, value, mut: this.mutable, prefix: this.prefix
        });
        if (key) return getConfigValue({
            prefix: this.prefix, key
        });
        return showConfigStore(this.prefix);
    }
}

/**
 * @private
 * @ignore
 * @memberof module:NameSpaceModule
 * @type {Symbol}
 */
Object.defineProperty(NameSpaceHelper, Symbol.hasInstance, {
    /**
     * Getter function for the custom `instanceof` behavior.
     *
     * @private
     * @function
     * @memberof module:NameSpaceModule
     * @returns {function(*): boolean} A function that takes an instance and returns a boolean indicating
     * whether the instance's constructor name matches its `instanceOf` property.
     */
    get: () => (instance) => instance.constructor.name === instance.instanceOf
});

/**
 * Exports the NameSpace.
 *
 * @private
 * @module NameSpaceModule
 */
exports = module.exports = {
    ...{NameSpaceHelper}
}