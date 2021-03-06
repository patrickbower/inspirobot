/**
 * Util functions for using local storage
 
 * @param {string} key
 * @param {string} value
 */

export function set(key, value) {
  return localStorage.setItem(key, value);
}

export function get(key) {
  return localStorage.getItem(key);
}

export function remove(key) {
  return localStorage.removeItem(key);
}

export function clear() {
  return localStorage.clear();
}
