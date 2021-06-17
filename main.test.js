"use strict";

require(".")();

test('test dependencies', () => {
    ns.deps("types", require("@jamilservices/types-helper"));
    expect(ns.deps()).toBeInstanceOf(Object);
    expect(ns.deps("types")).toBeInstanceOf(Function);
    expect(ns.show().dependencies).toBeInstanceOf(Object);
});
test('test storage', () => {
    ns.storage("name", "test");
    ns.storage("obj", {test: "ok"});
    ns.storage("test.sucess", true);
    expect(ns.storage()).toBeInstanceOf(Object);
    expect(typeof ns.storage("name")).toBe('string');
    expect(typeof ns.storage("obj")).toBe('object');
    expect(typeof ns.storage("obj.test")).toBe('string');
    expect(typeof ns.storage("test.sucess")).toBe('boolean');
    expect(ns.storage("test.sucess")).toEqual(true);
    expect(ns.show().storage).toBeInstanceOf(Object);
});
test('test settings', () => {
    ns.settings("port", 5000);
    ns.settings("server", {name: "test server"});
    ns.settings("test.name", "test name");
    expect(ns.settings()).toBeInstanceOf(Object);
    expect(typeof ns.settings("port")).toBe('number');
    expect(typeof ns.settings("server")).toBe('object');
    expect(typeof ns.settings("server.name")).toBe('string');
    expect(typeof ns.settings("test")).toBe('object');
    expect(typeof ns.settings("test.name")).toBe('string');
    expect(ns.show().settings).toBeInstanceOf(Object);
});

