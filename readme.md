# Node Gtk Boilerplate

A boilerplate to build gnome native applications using nodejs.

## Developers

```bash
# get locally
git clone https://github.com/nmanumr/node-gtk-boilerplate.git

# install npm modules
npm install

# install flatpak
sudo apt install flatpak

# install flatpack runtime
flatpak install flathub org.gnome.Platform//3.28 org.gnome.Sdk//3.28

# bundle flatpak
npm run pack

# install bundle
npm run flatpak:install

# run bundle
npm run flatpak:run
```

## References

* [node-gtk](https://github.com/romgrk/node-gtk#documentation)
* [pkg docs](https://github.com/zeit/pkg/blob/master/README.md)
* [flatpak-bundler](https://github.com/endlessm/flatpak-bundler#flatpak-bundler--)