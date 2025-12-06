'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"README.md": "506ee33c6973e8352149cce462c974da",
"404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "cc6ed891621d686fb46a4606acc19d20",
"index.html": "2ee1eac1c60a927e2200de6dbfedcaca",
"/": "2ee1eac1c60a927e2200de6dbfedcaca",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"flutter_bootstrap.js": "0b582a3b3127a8c51aea49edfb97258e",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4ebe33a4c90e3125616dbe8fd0063c64",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "484327f40278fa8896f3edd5f3307243",
"assets/AssetManifest.bin": "33130f8f37245633e9f325ae23831f1f",
"assets/AssetManifest.bin.json": "40ccdd27edf1f535b100c5790c3d0840",
"assets/fonts/MaterialIcons-Regular.otf": "231d8f39bbcc4282f1af9e13b5f3f9a3",
"assets/FontManifest.json": "1559c98f0595d10de641bb9707a06181",
"assets/assets/images/shop-image.png": "8994d96b89c662aa157defcf2b15d1df",
"assets/assets/images/cloudproject.png": "3d6b280dcfd3c1a843991e1b41c8f533",
"assets/assets/images/Weather.png": "4122fb03870df23f0613d086b891c845",
"assets/assets/images/neocradle_logo.png": "14086bad170e2cd13b6d7b49f8efc53f",
"assets/assets/images/rr_logo.png": "9957b95967243dba60831f28e7bf58c2",
"assets/assets/images/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/assets/images/Keyboard.png": "0ed64efd2e53bc6257d1283a61432536",
"assets/assets/images/ktu.jpg": "3232508afc7746d92b5484f73bc4f453",
"assets/assets/images/coding.gif": "1f835a0beb5d2ee5e72bcc69b51c02b4",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/experience/techm.png": "74bb2f35dc0c904d164ebacc2b4b3c78",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/fss.png": "9b51d3b1ded07bf655518388d592b621",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/sameboat.png": "5c95c1555a530f5f9f818ea50d9c9bc3",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/assets/images/ros.png": "f4a5b32935846d429adf8fedbf48ac16",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/ccm.png": "48493bee1fa1febccfd3f817eed1fad3",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/AssetManifest.json": "cfc3733cf0e88a74a0f65cbec451ca6a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "be7b174b241648e0c7779a7e85f6cc51",
"version.json": "33d70fe2173c74b7267855e215422758",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
".git/packed-refs": "04dbcfbe8fa6f2218316de590a735775",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a82f714693b0151e2545efdbaa6d3379",
".git/logs/refs/heads/main": "a82f714693b0151e2545efdbaa6d3379",
".git/logs/refs/remotes/origin/main": "08b0afc63f4914b9ce948cb928d9f471",
".git/logs/refs/remotes/origin/HEAD": "e820cbcb12e08e0776a1003220e16698",
".git/objects/83/32cad704b53db36ce7a361683b54e137de0628": "969aa3ba60b1ae6d967be2232a326514",
".git/objects/50/9f09984df07b9d77ec19bda9251affbe0ba189": "7d0530f05ab04a499552443bcb703255",
".git/objects/75/717d6cb02abaadcd7060a879a54e69390fbe6c": "496457b10963a5f4524cb5e512a58a81",
".git/objects/ec/d97459a5e9b564d83ae205826060b8750f90a1": "99f8fbfc67d14d16c5c2672963217460",
".git/objects/19/f49169875b90a9b69309634ca1053229825c15": "fbd6faa7c71191cdb7279cbd4caa88ce",
".git/objects/12/84b34ac22b0f883496d99d5748cd43aa9c0ea8": "095c55c16a61b5720c66fae13236c154",
".git/objects/9f/33dbec44f21e5a27226dd55925f45a35308850": "ff62db29c93395aea105bbb6b9a0ad55",
".git/objects/1c/00dd7f355bb2992a4d4f5cd6c61c0a5b755c75": "1199b0e6c654777372a22d50e3eca87a",
".git/objects/b8/2c24b45a1adb8f715d54c133c98f860f4bab75": "05a7db36d1438070cade1271f5525dee",
".git/objects/bb/45edc1a7e62a961097fc7ea0b1154270badd98": "9c48b40f204b7995d8f8cb709389b7da",
".git/objects/pack/pack-4d5459f4f6360413695b4bbeb862bd3527304a2e.pack": "db7ce26108d1cd0a1c2cab0eb1fdb053",
".git/objects/pack/pack-4d5459f4f6360413695b4bbeb862bd3527304a2e.idx": "84a3cbc6d738208127c10a3cb653d81c",
".git/objects/00/d5e445d40563ccd075531951b48c971344a9b7": "dd002311a785d1aac1df55d65bb665e9",
".git/objects/80/5c772d2fef368f774a8f755fbfdcbf40a557ec": "ba24da5f624cc057b182a5e6b0a0f061",
".git/objects/25/02defda90e32e92b80bc1797880beef6978f99": "9f9f6aa655a5c2c0185dbf6c50b1e885",
".git/objects/ad/abec9ad147a6fe646e46000a80ed08850fc2ae": "b7ba73c7b56ea798a625a8462421a1cf",
".git/objects/62/ec48e4b517c37c5284f8604c1da2396900f55b": "260597f80ee57d93f73d6533f759c217",
".git/objects/65/2f43f6543e78a0f8c267da20f8a3ee774c3f4b": "abdc2a49d95ab11aa82ce27d2859d7fe",
".git/objects/64/d36372e3a2f96b98652adc12de4a905424e241": "36a486279ad2a5c24beb3bce2ad4ae01",
".git/objects/c7/37e150ca1726952a9d3b550e68262802891130": "f7b1006d3fdb1eede3fba8aa36ce424a",
".git/objects/ef/810853ed525115c15e7b040272dd89050c435b": "a87f388c3153c19dd6d5bb9ab551039e",
".git/objects/55/76190f5a63a00bac212c0a303d3cc230504f0c": "a189bcfc629d8518b69ba461ce887f53",
".git/objects/ee/806e6258c3bbc222a745f74be21ab023e0f5db": "2fc0f08f5e354c35a2c42841bf37bb71",
".git/objects/16/d9ebcc720bb12cbf06a61746caf6548f16b1aa": "a8d1cafc936624d137db12a7883436fc",
".git/objects/a5/a295d555e094728c30db9b4578d0aa71532513": "bd386a123872926a1b83d7290094c099",
".git/objects/38/59e3ccec092a66c74cbb6bddd8c5dd668d65ca": "a6e8b2c48f8e8b7666d17a67e7b92de6",
".git/objects/30/7bec8482c56d5f096964fb02850b86a7ecddc9": "fa5e6d5c6eee4e76c0d92017a300d027",
".git/objects/a6/86185739b1896453d7b6f56b3d56b505f62580": "e37120a5c5831646815db513539ef56b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a3c5389f5e9f379c3040a2e5e42dff0f",
".git/refs/heads/main": "520d583e913c5b679877d941c3aa2374",
".git/refs/remotes/origin/main": "520d583e913c5b679877d941c3aa2374",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "ad8f00eb70042bcc2c062a6bc2d8e11a",
".git/config": "319baca6589dab7e713e53740adc3ead"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
