import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export const dbFunctions = {
  // JSON "set" example
  // setObject: async function setObject() {
  //   await Storage.set({
  //     key: "user",
  //     value: JSON.stringify({
  //       id: 1,
  //       name: "Max",
  //     }),
  //   });
  // },
  // JSON "get" example
  // getObject: async function getObject() {
  //   const ret = await Storage.get({ key: "user" });
  //   const user = JSON.parse(ret.value);
  // },

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
