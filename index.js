// index.js - a minimal gopher implementation using node.js
// Released under the 3 clause BSD license by Matt Croydon <mcroydon@gmail.com> (http://postneo.com)
// Fork by Emma Humphries (https://emmah.net/) for silly IoT tricks

var net =        require('net');
var tessel =     require('tessel');
var climatelib = require('climate-si7020');
var climate =    climatelib.use(tessel.port['A']);
var address =    '192.168.1.101';
var port    =    7000;

climate.on('ready', function() {
    console.log('Connected to climate module.');
    serve();
});

climate.on('error', function(err) {
    console.log('error connecting module', err);
});

function serve() {
    net.createServer(function (socket) {
      socket.setEncoding("ascii");
      socket.on("data", function (data) {
        console.log('data', data);
        if (data === '\r\n') {
            console.log('Serving index.');
            socket.write('0About This Service' + '\t' + 'About' + '\t' + address + '\t' + port + '\r\n');
            socket.write('0Local Temperature' + '\t' + 'Temp' + '\t' + address + '\t' + port + '\r\n');
            socket.write('0Local Humidity' + '\t' + 'Humidity' + '\t' + address + '\t' + port + '\r\n');
            socket.write('.\r\n');
            socket.end();
        }
        else if (data === 'About\r\n') {
            console.log('Serving about file.');
            socket.write('This is a minimal implementation of the gopher protocol using node.js.\r\n');
            socket.write('We\'re bringing the old to the new: Gopher meets IoT. Party time.\r\n');
            socket.end();
        }
        else if (data === 'Temp\r\n') {
            console.log('Reading climate module temp data');
            climate.readTemperature('f', function(err, temp) {
                console.log('Serving climate module temp data');
                socket.write('The current temperature at this device\'s location is ' + temp.toFixed(4) + 'F');
                socket.end();
            });
        }
        else if (data === 'Humidity\r\n') {
            console.log('Reading climate module humidity data');
            climate.readHumidity(function (err, humid) {
                console.log('Serving climate module humidity data');
                socket.write('The current humidity at this device\'s location is ' + humid.toFixed(4) + '%RH');
                socket.end();
            });
        }
        else {
            console.log('Unknown: ' + data);
        }
      });
      socket.on("end", function () {
        console.log('Ending connection.');
        socket.end();
      });
    }).listen(port, address);

    console.log('Server running at ' + address + ':' + port);
}
