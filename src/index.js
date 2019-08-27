var w = new Worker('./worker.js')
w.onmessage = e => console.log(e.data)
setInterval(() => w.postMessage('test'), 1000)
