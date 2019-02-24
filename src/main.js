const gi = require('../lib/index');
const Gtk = gi.require('Gtk', '3.0');
const Path = require('path');
var fs = require('fs');

gi.startLoop()
Gtk.init()

path = Path.join(__dirname, 'ui/window.glade');
var contents = fs.readFileSync(path, 'utf8');

const builder = Gtk.Builder.newFromString(contents, -1);
const win = builder.getObject('mainWindow');

win.on('show', Gtk.main);
win.on('destroy', () => Gtk.mainQuit())

win.showAll();