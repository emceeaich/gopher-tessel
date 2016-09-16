# gopher-tessel

An obsolete protocol meets the internet of things.

A couple of months ago, a friend sent a link to [a history of the Gopher information server](https://www.minnpost.com/business/2016/08/rise-and-fall-gopher-protocol). And I had a little nostalgia for the days of trying out Gopher, WAIS and the WWW from my academic VAX account at the University of Wisconsin.

And I wondered, "has anyone implemented Gopher in Node?" Turns out that [someone did](https://gist.github.com/mcroydon/485609). And I had a tessel2 board, which runs Node, in search of a project.  

Gopher was overshadowed by the Web, partially because the University of Minnesota wanted to charge for the server software, and also because the Web's linking (and embedded images) were more appealing. But I still have fond memories of Gopher, so here's a little remembrance. Tiny computers running old protocols, and talking to the physical world.

---

To run this project you'll need a tessel2 board and climate module as well as the tessel command line tools npm package.

Attach the climate board, power up and provision your tessel. Clone the repo and, run `npm install`.

You'll need to set up your tessel as an access point, then you can run `t2 run index.js`.

Then on a device on the same network as your tessel's AP, go to gopher://192.168.1.101:7000.

Lynx still supports the gopher protocol. You will need to run it with `lynx -cache=0 gopher://192.168.1.101:7000/`.

Try the links on the gopher.

If you want to expand the list of resources you serve, [the Gopher rfc](https://tools.ietf.org/html/rfc1436) covers the format of the menu you serve to clients. 
