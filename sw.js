importScripts('/assets/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtify",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/assets/app.18a0ec5c688ced5848f0.js",
    "revision": "749ac598bf683e3baa0141ebfd3d85b6"
  },
  {
    "url": "/assets/app.1ebbbf3545a2137bee1114f9be28bbfe.css",
    "revision": "1ebbbf3545a2137bee1114f9be28bbfe"
  },
  {
    "url": "/assets/layouts_default.5a0b7b8d431291d9538e.js",
    "revision": "8c5dcb0262648866559f250a2d7bc5c2"
  },
  {
    "url": "/assets/manifest.58685bca7c6430f6ddc6.js",
    "revision": "2747b7888e00b63407a0de0912321266"
  },
  {
    "url": "/assets/pages_index.f2dfe8f54d8b16685285.js",
    "revision": "2086568475eff9c47c408b9a04707f26"
  },
  {
    "url": "/assets/pages_inspire.37f926be8cf6dbdeb35d.js",
    "revision": "06cdbc6654e4025b9fc5686bb1ee6267"
  },
  {
    "url": "/assets/vendor.0f15e2c1d6f9d81378be.js",
    "revision": "d419947fd95d89a7e72025a88565fd4e"
  },
  {
    "url": "/assets/vendor.ad884b973c0c02ec54198028f374dce0.css",
    "revision": "ad884b973c0c02ec54198028f374dce0"
  }
])


workboxSW.router.registerRoute(new RegExp('/assets/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*|/assets/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

