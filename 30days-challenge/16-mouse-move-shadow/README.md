## What I found out

```javascript
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  //   let { offsetX: x, offsetY: y } = e;  // using offsetX, offsetY

  //   if (this !== e.target) {        // have to consider moments
  //     x = x + e.target.offsetLeft;  // when event target is not matching to "this"
  //     y = y + e.target.offsetTop;
  //     console.log(x, e.clientX);
  //   }
  let { clientX: x, clientY: y } = e;   // using clientX, clientY


  const xWalk = Math.round((x / width) * walk - walk / 2);  // how does it work exactly?
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0,0,0,0.2),
    ${xWalk * -1}px ${yWalk}px 0 rgba(255,0,0,.3),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,255,0,.3)
  `;
```

- it works exactly same way as I meant and the code seems actually clearer when using `clientX` and `clientY`. As the value of `offsetX` and `offsetY` changes based on actual event targets, there would be more things to consider before using it.


## What I'm not sure yet

- the expression. 🤔


## Good to know

**clientX, pageX, screenX**

**In JavaScript:**

`pageX`, `pageY`, `screenX`, `screenY`, `clientX`, and `clientY` returns a number which indicates the number of physical “CSS pixels” a point is from the reference point. The event point is where the user clicked, the reference point is a point in the upper left. These properties return the horizontal and vertical distance from that reference point.

pageX and pageY:
Relative to the top left of the fully rendered content area in the browser. This reference point is below the URL bar and back button in the upper left. This point could be anywhere in the browser window and can actually change location if there are embedded scrollable pages embedded within pages and the user moves a scrollbar.

screenX and screenY:
Relative to the top left of the physical screen/monitor, this reference point only moves if you increase or decrease the number of monitors or the monitor resolution.

clientX and clientY:
Relative to the upper left edge of the content area (the viewport) of the browser window. This point does not move even if the user moves a scrollbar from within the browser.

[Stack overflow answer](https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y)


[clientX,offsetX,pageX,screenX - KOR](http://megaton111.cafe24.com/2016/11/29/clientx-offsetx-pagex-screenx%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90/?ckattempt=1)

