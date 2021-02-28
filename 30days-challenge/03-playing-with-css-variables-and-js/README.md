# Playing with CSS variables and JS

keyword: `style.setProperty`, `document.documentElement`

---

## document.documentElement

root element of the document(for example, the `<html>` element for HTML documents)

```javascript
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier is a NodeList of the direct children of the root element
// such as <head> and <body>

for (const child of firstTier) {
  // do something with each direct child of the root element
}
```

## CSSStyleDeclaration.setProperty()

style.setProperty(propertyName, *value, *priority);
→ \*optional
