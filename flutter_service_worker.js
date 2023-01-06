'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"version.json": "33d70fe2173c74b7267855e215422758",
"index.html": "64bb67e00f646d39b63d6f75a0103a2c",
"/": "64bb67e00f646d39b63d6f75a0103a2c",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
"assets/AssetManifest.json": "e9f6ff0537fb8eb339328fe4d5003f22",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b9f0df7abffde85f293515e0649d56e2",
"assets/FontManifest.json": "1559c98f0595d10de641bb9707a06181",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/images/cloudproject.png": "3d6b280dcfd3c1a843991e1b41c8f533",
"assets/assets/images/Keyboard.png": "0ed64efd2e53bc6257d1283a61432536",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/experience/g10.png": "72cfb42177ed5d2eda7b7a4439d56bf6",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/rr_logo.png": "9957b95967243dba60831f28e7bf58c2",
"assets/assets/images/coding.gif": "1f835a0beb5d2ee5e72bcc69b51c02b4",
"assets/assets/images/ktu.jpg": "3232508afc7746d92b5484f73bc4f453",
"assets/assets/images/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/neocradle_logo.png": "14086bad170e2cd13b6d7b49f8efc53f",
"assets/assets/images/shop-image.png": "8994d96b89c662aa157defcf2b15d1df",
"assets/assets/images/Weather.png": "4122fb03870df23f0613d086b891c845",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/NOTICES": "a70dc76bd3d7d59dd6035d77a885d3e8",
"404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
".git/index": "802909c8e1676862c40fee0639257f75",
".git/FETCH_HEAD": "f1e9615a02d834f1d46febed6e4086be",
".git/config": "73fe4e269045c549185120728db0fc09",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.pack": "2a8ada06334223f05eb4de51f1c2665f",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.idx": "3a9493a7fb9b7000bc99d58deeb79f07",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/100184ddf3c1f10151709d3d859a6bd998d1da": "d97420b0e6ece7b2ddc5b246ef64d041",
".git/objects/12/05b9036592f6f5829c1a9a370e1c96488e30a2": "7166c14d0bba7334ed6c3a32ab1188b8",
".git/objects/10/0a6760c76dc479d0a25e354a2a8b2f124ada4c": "322e1debb9e8627bd27b4516b23da377",
".git/objects/39/17ea59a64ac9f7ef4f1066986b522095a03b68": "ecc94d29e8d53420b3e9b91ae20fa800",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "e23d2b6a0ee62230b011723f14f2e326",
".git/logs/refs/heads/master": "2e350067400ba9d6dcc3baf07a88241a",
".git/logs/refs/heads/main": "9ba6e5d1ee4d87cfd456365c9fba18e9",
".git/logs/HEAD": "e9f7afe86a5f1bc489c5489d474390d4",
".git/refs/remotes/origin/main": "5db08174eab7f9a506bef00834d885e7",
".git/refs/heads/master": "0b47494fb1d2d5c42c9dca4d35869013",
".git/refs/heads/main": "5db08174eab7f9a506bef00834d885e7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "2205e48de5f93c784733ffcca841d2b5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4",
"README.md": "96c4e680d1392f3d7404a66972a43de9",
"main.dart.js": "d81db5f467c2ba8836a69b9d8afdd6d7",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
