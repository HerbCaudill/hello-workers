self.onmessage = e => self.postMessage(e.data + ' from worker')
