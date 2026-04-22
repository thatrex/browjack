/*
Google doesn't like this, which is funny because this only seems to work in Chrome browsers.
- https://developers.google.com/search/blog/2026/04/back-button-hijacking

The following should work when hosted:
    ```js
    (sessionStorage.r ||= 1) && location.replace(location.href) // clear back history
    window.onpopstate = () => history.go(0) // reload on back
    ```
*/

window.onbeforeunload = () => 0 // alert on page close
window.onpopstate = () => history.forward() // go forward on back

const push = () => !history.pushState(0, 0, '')
const loop = () => history.length < 12 && push() && loop()

loop() // flood history
