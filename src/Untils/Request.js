export default (url, method, data) => {
  return fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });
}
