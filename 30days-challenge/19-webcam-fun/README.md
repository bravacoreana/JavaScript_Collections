## canplay event listener

These examples add an event listener for the HTMLMediaElement's canplay event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

<script>
const video = document.querySelector("video");

video.addEventListener("canplay", (event) => {
  console.log("Video can start, but not sure it will play through.");
});
</script>
