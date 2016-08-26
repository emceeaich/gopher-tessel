# gopher-tessel
An obsolete protocol meets the internet of things.

To run this project you'll need a tessel2 board and the climate module as well as the tessel command line tools node package.

Clone the repo, run `npm install`.

You'll need to set up your tessel as an access point, then you can run `t2 run index.js`.

Then on a device on the same network as your tessel's AP, go to gopher://192.168.1.101:7000. Lynx still supports the gopher protocol.

Now try the various links on the gopher.
