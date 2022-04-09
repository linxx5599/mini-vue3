const get = createGetter();
const set = createSetter();

export function reactive(raw) {
  return new Proxy(raw, {
    get,
    set
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
