/*
This makes it annoying to open and use the browser dev tools.  
I first came across the debugger loop on a piracy site.
*/

// prevent opening dev tools using the context menu and keyboard commands
window.oncontextmenu = () => false
window.onkeydown = ({ key: k, ctrlKey: ctrl, shiftKey: shft }) => {
    switch (true) {
        case k === 'F12':
        case k === 'F7' && shft:
        case k === 'F5' && shft:
        case k === 'U' && ctrl:
        case k === 'I' && ctrl && shft:
        case k === 'C' && ctrl && shft:
        case k === 'E' && ctrl && shft:
        case k === 'J' && ctrl && shft:
        case k === 'Z' && ctrl && shft:
            return false
    }
}

const open = () => !Function('debugger')()
const loop = () => open() && loop()
const perf = () => performance.now()

// (re)starts the debugger loop
setInterval(() => {
    const s = perf()
    open()
    perf() - s < 100 ?? loop()
}, 250)

// repeatedly clears the console
setInterval(() => console.clear(), 100)
setInterval(() => console.log('\n'.repeat(100)), 100)
