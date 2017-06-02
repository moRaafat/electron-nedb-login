const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready',() =>{
    let win = new BrowserWindow({
      width: 1280,
      height: 1024,
      'min-width': 800,
      'min-height': 600,
      frame: true
   });
    win.loadURL(`file://${__dirname}/views/index.html`)
})


