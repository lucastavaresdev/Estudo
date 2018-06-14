const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let addWindow;

//Listen  for app to be ready
app.on('ready', function () {
    //Create new window
    mainWindow = new BrowserWindow({});

    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));
    //Quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    })

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //inset menu
    Menu.setApplicationMenu(mainMenu)
});


// handle create add window

function createAddWindow() {
    //Create new window
    addWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'add Shopping List Item'
    });

    //Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    //garbage collection handle
    addWindow.on('close', function () {
        addWindow = null;
    })

}


//create menu template
const mainMenuTemplate = [
    {},
    {
        label: 'File',
        submenu: [
            {
                label: 'add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Item',
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            },
        ]
    }
]

//if mac, add empyt object to menu

if (process.plataform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// add developer tools item if not in prod
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        submenu: [{
            label: 'DevTools',
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        },
        {
            role: 'reload'
        }
        ]
    })
}