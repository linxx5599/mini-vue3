const get = createGetter();
const set = createSetter();

export function reactive(raw) {
  return new Proxy(raw, {
    get,
    set
  });
}

export function readonly(raw) {
  return new Proxy(raw, {
    get,
    set(target, key: any, value) {
      console.warn(
        `key:${key} set 失败 因为 target 是 readonly`,
        target,
        `value: ${value}`
      );
      return true;
    }
  });
}

function createGetter() {
  return function get(target, key) {
    const res = Reflect.get(target, key);
    return res;
  };
}

function createSetter() {
  return function set(target, key, value) {
    const res = Reflect.set(target, key, value);
    return res;
  };
}
