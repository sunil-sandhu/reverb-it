import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export const dbFunctions = {
  // JSON "set" example
  setObject: async function setObject(id, key, val) {
    await Storage.set({
      key: "dictionary",
      value: JSON.stringify({
        id: id,
        [key]: val,
      }),
    });
  },
  // JSON "get" example
  getObject: async function getObject(id) {
    const ret = await Storage.get({ key: id });
    const val = JSON.parse(ret.value);
    return val;
  },

  setItem: async function setItem(key, value) {
    const _value = JSON.stringify(value);
    await Storage.set({
      key: key,
      value: _value,
    });
  },

  getItem: async function getItem(key) {
    const { value } = await Storage.get({ key: key }).then((res) => res);
    return JSON.parse(value);
  },

  // removeItem: async function removeItem() {
  //   await Storage.remove({ key: "name" });
  // },

  keys: async function keys() {
    const { keys } = await Storage.keys().then((res) => res);
    return keys;
  },

  clear: async function clear() {
    await Storage.clear();
  },
};
