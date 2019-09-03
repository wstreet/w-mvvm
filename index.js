function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    observeProperty(data, key, data[key])
  })
}

function observeProperty(obj, key, value) {

}