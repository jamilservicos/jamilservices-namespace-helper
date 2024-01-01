"use strict";

const dependencieStore = {};

const showDependencieStore = (prefix) => {
    try {
        if (dependencieStore[prefix] && Object.keys(dependencieStore[prefix]).length > 0) return Object.keys(dependencieStore[prefix]);
    } catch {
        console.error("Error on showDependencieStore", prefix);
    }
    return [];
};

const changeValue = (data) => {
    const {prefix, key, value} = data;
    dependencieStore[prefix][key.toString()] = value;
    return true;
};

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
    } catch {
        console.error("Error on setDependencieStoreKey:", data);
    }
    return false;
};

const getDependencieValue = (data) => {
    try {
        const {key, prefix} = data;
        if (prefix) {
            if (typeof dependencieStore[prefix] === "undefined") return undefined;
            if (key && dependencieStore[prefix][key]) return dependencieStore[prefix][key];
        }
    } catch {
        console.error("Error on getDependencieValue:", data);
    }
    return undefined;
};

exports = module.exports = {
    ...{showDependencieStore},
    ...{setDependencieStoreKey},
    ...{getDependencieValue}
};