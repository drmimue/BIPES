const CACHE_NAME = 'v3.0.13';
const urlsToCache = [
  'ide',
  'ide-en',
  'ide-pt-br',
  'ide-de',
  'ide-es',
  'ide-fr',
  'ide-it',
  'ide-nb',
  'ide-zh-hans',
  'ide-zh-hant',
  
  'static/style.css',
  'static/media/icons.svg',
  'static/media/icon/icon-192x192.png',
  'static/media/manifest.webmanifest',
  'static/libs/bipes.umd.js',
  'static/libs/shortcuts.umd.js',
  'static/libs/codemirror.umd.js',
  'static/libs/muuri.umd.js',
  'static/libs/paho-mqtt.umd.js',
  'static/libs/chart.umd.js',
  'static/libs/xterm.umd.js',
  'static/libs/blockly.umd.js',
  'static/libs/chart-adapter-date-fns.bundle.umd.js',
  'static/libs/dash.umd.js',
  
  'static/page/blocks/blocks.umd.js',
  'static/page/blocks/pythonic.umd.js',
  'static/page/blocks/toolbox.umd.js',
  
  'static/msg/en.js',
  'static/page/blocks/msg/en.js',
  'static/msg/pt-br.js',
  'static/page/blocks/msg/pt-br.js',
  'static/msg/de.js',
  'static/page/blocks/msg/de.js',
  'static/msg/es.js',
  'static/page/blocks/msg/es.js',
  'static/msg/fr.js',
  'static/page/blocks/msg/fr.js',
  'static/msg/it.js',
  'static/page/blocks/msg/it.js',
  'static/msg/nb.js',
  'static/page/blocks/msg/nb.js',
  'static/msg/zh-hans.js',
  'static/page/blocks/msg/zh-hans.js',
  'static/msg/zh-hant.js',
  'static/page/blocks/msg/zh-hant.js',
  
  'static/page/device/media/ESP32C3_XIAO.png',
  'static/page/device/media/Node-MCU-ESP.jpg',
  'static/page/device/media/Wemos-D1-Mini.png',
  'static/page/device/media/Arduino.svg',
  'static/page/device/media/cape-headers.png',
  'static/page/device/media/RPI_Pico.svg',
  'static/page/device/media/microbit.png',
  'static/page/device/media/rpi4.png',
  'static/page/device/media/ESP32-Pinout.jpg',
  'static/page/device/media/ESP32-LoRa.jpg',
  'static/page/device/media/m5stickc.png',
  'static/page/device/media/NUCLEO-F446RE.png',
  'static/page/device/media/esp32-oled.png',
  'static/page/device/media/ESP32.svg',
  'static/page/blocks/images/relay.png',
  'static/page/blocks/images/mpu6050.png',
  'static/page/blocks/images/hcsr04.png',
  'static/page/blocks/images/RC522.jpg',
  'static/page/blocks/images/lcd20x4.jpg',
  'static/page/blocks/images/dcmotor.png',
  'static/page/blocks/images/matrix.png',
  'static/page/blocks/images/max30100.png',
  'static/page/blocks/images/servo.png',
  'static/page/blocks/images/oled.png',
  'static/page/blocks/images/stepper.png',
  'static/page/blocks/images/neopixel.png',
  'static/page/blocks/images/dht.png',
  'static/page/blocks/images/ublox_gps.png',
  'static/page/blocks/images/encoder.png',
  'static/page/blocks/images/st7789.png',
  'static/page/blocks/media/quote0.png',
  'static/page/blocks/media/sprites.svg',
  'static/page/blocks/media/disconnect.ogg',
  'static/page/blocks/media/disconnect.wav',
  'static/page/blocks/media/handclosed.cur',
  'static/page/blocks/media/delete.ogg',
  'static/page/blocks/media/handopen.cur',
  'static/page/blocks/media/click.mp3',
  'static/page/blocks/media/1x1.gif',
  'static/page/blocks/media/click.ogg',
  'static/page/blocks/media/click.wav',
  'static/page/blocks/media/pilcrow.png',
  'static/page/blocks/media/sprites.png',
  'static/page/blocks/media/disconnect.mp3',
  'static/page/blocks/media/dropdown-arrow.svg',
  'static/page/blocks/media/delete.mp3',
  'static/page/blocks/media/handdelete.cur',
  'static/page/blocks/media/delete.wav',
  'static/page/blocks/media/quote1.png',
  
];
let prefix = self.location.pathname.replace('serviceworker.js', '')

let urlsToCacheAbsolute = urlsToCache.map(s => prefix + s)

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCacheAbsolute))
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
  );
});

self.addEventListener('fetch', event => {
let ogn = self.location.origin + prefix
  let req = event.request.url
  if (req.substring(0, ogn.length) === ogn &&
      (urlsToCache.includes(req.substring(ogn.length)) ||
       req.substring(ogn.length,ogn.length + 3) === 'ide')
  ){
   event.respondWith(
      caches.match(event.request, {ignoreSearch: true}).then(response => {
        if (response) {
          return response
        }
        return (
          fetch(event.request)
            .then(response => caches.open(CACHE_NAME))
            .then(cache => {
              cache.put(event.request, response.clone())
              return response
            })
            .catch(response => {
              console.log(`ServiceWorker: Fetch for "${event.request.url}" failed.`)
            })
         )
      })
    )
  } else
    return false


});