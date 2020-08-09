addEventListener('keydown', function (e) {
  var key
  switch (e.key) {
    case 'Meta':
    case 'Control':
    case 'Shift':
    case 'Alt':
      key = e.key;
      break;
    default:
      key = (e.metaKey ? 'Meta+' : '')
        + (e.ctrlKey ? 'Control+' : '')
        + (e.shiftKey && e.key.toUpperCase() !== e.key ? 'Shift+' : '')
        + (e.altKey ? 'Alt+' : '')
        + e.key
  }
  var event = new CustomEvent('hot-key', {
    detail: key,
    bubbles: true,
    cancelable: true
  })
  e.target.dispatchEvent(event)
  if (event.defaultPrevented) {
    e.preventDefault()
  }
})
