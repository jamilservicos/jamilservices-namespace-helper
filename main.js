"use strict";

const lodash_get = require('lodash.get');
const lodash_set = require('lodash.set');

const _deps = Object.assign({});
const _storage = Object.assign({});
const _config = Object.assign({});

const handler = {
    set: (target, key, value) => true,
    get: (target, key, receiver) => {
        if(typeof key === "undefined") return target.show;
        const targetValue = Reflect.get(target, key, receiver);
        if (typeof targetValue === "function") return (...args) => targetValue.apply(this, args);
        return undefined;
    }
};

class Namespace {
    /**
     * @param {string} [key]
     * @param {*} [value]
     * @return {*}
     */
    deps = (key, value) => {
        if (key) {
            if (key && value) {
                if ((this.immutable) && (_deps[key])) return true;
                _deps[key] = value;
                return true;
            } else return _deps[key];
        } else return _deps;
    };
    /**
     * @param {string} [key]
     * @param {*} [value]
     * @return {*}
     */
    storage = (key, value) => {
        if (key) {
            if (key && value) {
                if ((this.immutable) && (lodash_get(_storage, key))) return true;
                lodash_set(_storage, key, value);
                return true;
            } else return lodash_get(_storage, key);
        } else return _storage;
    };
    /**
     * @param {string} [key]
     * @param {*} [value]
     * @return {*}
     */
    settings = (key, value) => {
        if (key) {
            if (key && value) {
                if ((this.immutable) && (lodash_get(_config, key))) return true;
                lodash_set(_config, key, value);
                return true;
            } else return lodash_get(_config, key);
        } else return _config;
    };
    /**
     * @return {object}
     */
    show = () => {
        const obj = Object.assign({});
        if(Object.keys(_deps).length > 0) obj['dependencies'] = Object.keys(_deps);
        if(Object.keys(_config).length > 0) obj['settings'] = {..._config};
        if(Object.keys(_storage).length > 0) obj['storage'] = {..._storage};
        return {...obj};
    };
    /**
     * @param {object} [config]
     * @param {boolean} [config.mut]
     */
    constructor(config) {
        this.immutable = !((config) && (config["mut"]));
        Object.defineProperty(this, 'immutable', {enumerable: false});
        Object.defineProperty(this, 'show', {enumerable: false});
        return new Proxy(this, handler);
    }
}
/**
 * @param {object} [config]
 * @param {boolean} [config.mut]
 */
exports = module.exports = (config) => {
    $prefix = 'ns';
    if(config.prefix) $prefix = config.prefix;
    Object.defineProperty(Object.prototype, $prefix, {
        value: new Namespace(config),
        enumerable: false
    });
};