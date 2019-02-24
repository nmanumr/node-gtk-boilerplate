const flatpakBundler = require('flatpak-bundler')


flatpakBundler.bundle({
    id: 'com.boilerplate.node-gtk', // your app id must contain atleast 2 periods
    runtime: 'org.gnome.Platform',
    runtimeVersion: '3.28',
    sdk: 'org.gnome.Sdk',
    files: [
        ['build', 'share/node-gtk/']
    ],
    symlinks: [
        ['/share/node-gtk/app', '/bin/node-gtk'] // Create a symlink in /bin to to app executable
    ],
    finishArgs: [
        '--share=ipc', '--socket=x11', // Allow app to show windows with X11
        '--filesystem=home', // Allow access to users home directory
    ]
}, {
        bundlePath: 'node-gtk.flatpak'
    }, function (error) {
        if (error) {
            console.error('Error building flatpak', error)
            return
        }
        console.log('Flatpak built successfully')
    })