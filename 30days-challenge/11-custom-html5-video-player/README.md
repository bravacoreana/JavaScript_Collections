### TextContent vs innerText vs innerHTML

- TextContent
  - An attribute of Node
  - regardless `<script>` or `<style>` tag, the value of the node is read as it is.
    - Even if there are multiple spaces consecutively, they are read as they are.
- innerText
  - The text value shown to the user within the element
  - So if there is text value defined `display: none`, it's not gonna be read with `innerText`
  - If there are consecutive spaces, only one space is read and the rest are ignored.
- innerHTML
  - Attribute of element. HTML or XML can be read

### HTMLElement.dataset

It exposes a map of strings (DOMStringMap) with an entry for each `data-*` attribute.

- In HTML
  The attribute name begins with data-. It can contain only letters, numbers, dashes (-), periods (.), colons (:), and underscores (\_). Any ASCII capital letters (A to Z) are ignored and converted to lowercase.
- In JavaScript
  The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property’s “camelCased” name.

### timeUpdate

The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.

```javascript
const video = document.querySelector("video");

video.addEventListener("timeupdate", (event) => {
  console.log("The currentTime attribute has been updated. Again.");
});
```

offsetX / screenX / clientX / layer X / offsetWidth

mousemove

<!-- # CSS

### flex-basis -->
