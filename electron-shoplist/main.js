const electron  = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

//Listen  for app to be ready
app.on('ready', function(){
    //Create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
   //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //inset menu
    Menu.setApplicationMenu(mainMenu)
});



//create menu template
const mainMenuTemplate = [
    {
        label: 'File', 
        submenu:[
            {
                label: 'add Item'
            },
            {
                label: 'Clear Item'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin'? 'Command+Q':'Ctrl+Q',
                click(){
                        app.quit();
                }
            },
        ]
    }
]