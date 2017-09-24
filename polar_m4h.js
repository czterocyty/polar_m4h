var usb = require('usb');

var device = usb.findByIds(parseInt('0da4', 16), parseInt('0008', 16));

if (device) {
  device.open();

  console.log(device.interfaces);

  device.close();
}


