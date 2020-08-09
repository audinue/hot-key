# hot-key

JavaScript hot key event.

## Usage

```js
addEventListener('hot-key', function (e) {
  console.log(e.detail)
  e.preventDefault()
})
```

## Note

The detail is case sensitive. `Control+s` is different from `Control+S`. The latter means `Control+Shift+s`.
