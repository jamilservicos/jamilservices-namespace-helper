"use strict";

const {showGeneralStore, setGeneralStoreKey, getGeneralValue} = require("./generalStore");
const {showDependencieStore, setDependencieStoreKey, getDependencieValue} = require("./dependencieStore");
const {showConfigStore, setConfigStoreKey, getConfigValue} = require("./configStore");
const showAllStores = () => {
    const obj = {};
    obj['dependencies'] = showDependencieStore();
    obj['settings'] = showConfigStore();
    obj['storage'] = showGeneralStore();
    return {...obj};
};
/**
 * NameSpace *
 */
class NameSpace {
    /**
     * Constructs an instance of the NameSpace.
     * @constructor
     * @memberof module:NameSpaceModule
     * @param {Object} config
     */
    constructor(config) {
        const {mut} = config;
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
            value: showAllStores
        });
    }

    storage = (key, value) => {
        if(key && value) return setGeneralStoreKey({key,value, mut: this.mutable});
        if(key) return getGeneralValue(key);
        return showGeneralStore();
    }
    deps = (key, value) => {
        if(key && value) return setDependencieStoreKey({key,value, mut: this.mutable});
        if(key) return getDependencieValue(key);
        return showDependencieStore();
    }
    settings = (key, value) => {
        if(key && value) return setConfigStoreKey({key,value, mut: this.mutable});
        if(key) return getConfigValue(key);
        return showConfigStore();
    }
}

/**
 * @private
 * @ignore
 * @memberof NameSpace
 * @type {Symbol}
 */
Object.defineProperty(NameSpace, Symbol.hasInstance, {
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
    ...{NameSpace}
}