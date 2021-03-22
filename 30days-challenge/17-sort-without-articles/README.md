

## regular expressions cheatsheet


```js
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}
```

1. write the regular expression in between `/`.
2. `^` Start of string, or start of line in multi-line pattern
3. `(a|b)` a or b
4. gave a blank in each word to find articles only
5. `i` Case-insensitive(upper-case && lower-case letter)
