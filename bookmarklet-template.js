javascript: (function () {
  var newScript = document.createElement('script')
  newScript.src = 'http://exmaple.com/example.js?dummy='
    + Math.random()
  document.body.appendChild(newScript)
})();