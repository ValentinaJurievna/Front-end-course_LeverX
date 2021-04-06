export function request(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
}