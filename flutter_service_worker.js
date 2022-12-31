'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
"index.html": "64bb67e00f646d39b63d6f75a0103a2c",
"/": "64bb67e00f646d39b63d6f75a0103a2c",
"version.json": "33d70fe2173c74b7267855e215422758",
"main.dart.js": "365e2b9636bc9e629d23e390b76d19e9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/rr_logo.png": "9957b95967243dba60831f28e7bf58c2",
"assets/assets/images/neocradle_logo.png": "14086bad170e2cd13b6d7b49f8efc53f",
"assets/assets/images/coding.gif": "1f835a0beb5d2ee5e72bcc69b51c02b4",
"assets/assets/images/cloudproject.png": "3d6b280dcfd3c1a843991e1b41c8f533",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/assets/images/Weather.png": "4122fb03870df23f0613d086b891c845",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/ktu.jpg": "3232508afc7746d92b5484f73bc4f453",
"assets/assets/images/experience/g10.png": "72cfb42177ed5d2eda7b7a4439d56bf6",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/images/Keyboard.png": "0ed64efd2e53bc6257d1283a61432536",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/shop-image.png": "8994d96b89c662aa157defcf2b15d1df",
"assets/assets/images/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "e9f6ff0537fb8eb339328fe4d5003f22",
"assets/FontManifest.json": "1559c98f0595d10de641bb9707a06181",
"assets/shaders/ink_sparkle.frag": "b9f0df7abffde85f293515e0649d56e2",
"assets/NOTICES": "a70dc76bd3d7d59dd6035d77a885d3e8",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"README.md": "96c4e680d1392f3d7404a66972a43de9",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "70e25924a186aaee9ea2f136a8477aff",
".git/COMMIT_EDITMSG": "1290673b3371fa7db7cf50a95e8a3520",
".git/objects/57/600f6bbff15f47cdb5bbe366b36a7c03c8a4d0": "98ce7c2acf219c5f37c72bf6d717f369",
".git/objects/01/28e008c0d41e410c8b77d171c8357037eca42f": "1cf8d7a37d58fbfb2c39cdaa0b741b94",
".git/objects/17/676ee9d7d58c2ff6947260707531087b4b2418": "8d635ad7ff88e86514cb001d165b3215",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/3b/6e56d63aa872c348ed4da85135ae488fc0c871": "ce64990fcd83b92e96cafd2a7c45e426",
".git/objects/d8/8d30fc6b73d83e7d2925c7d0aaae4881927ce4": "c9414dbceff6b3acc2428e15d894c776",
".git/objects/35/c94af4b44cfa3320ef508c845554038c48a61b": "dc3fd6e3392f03462c33e186a3f8b436",
".git/objects/67/546c7ab2f6c59edd0bf16cac2be78b6df4b742": "8167d5cf977526e00f432d7054ae67c8",
".git/objects/19/750cb287fb9eba34570dce0b23a5cf0a8a1af5": "3e817b2d60b7762b625c8fd8b71123e3",
".git/objects/32/84188e1b4da07b74b0667430412d700301f0c1": "05e078107a1eea29d7ca291a5fffdf8a",
".git/objects/eb/ec3437c49c87cf2209de7c9b87aba774f52738": "a1c095da1fe4a3e8681f66b273fbb787",
".git/objects/88/09ff5dfc141dc3c1a23c77fe5dcf37e5b7e29e": "1e4cd4cf1920703a73cd4b9aae5778b7",
".git/objects/03/af31c7c84b2308ba82ecfca42d1029de5d6d1b": "8338e64d77a921574ce3f37d55659fdf",
".git/objects/pack/pack-21214816c36e0930d21394fd36d1e9195d80fcb9.pack": "7bb5167ee5d79442072ed50ad578d26f",
".git/objects/pack/pack-21214816c36e0930d21394fd36d1e9195d80fcb9.idx": "c53a8b5f3a94617fc0763fbf3f6e6f83",
".git/objects/75/db6953b908782beb70dd07673ed00ea993bb4c": "64d2a7fd839195bb59688a6df4ed1f3d",
".git/objects/d9/311bac6150a30d0ef08b93e2084b5d4e3ecc1f": "e23c7b14ca48fb415f028d6a50b9610b",
".git/objects/24/f0f1674cc2dfe2596379f67956e29f2bc10be2": "aab4c9aae59f57ae3332f144cb01330a",
".git/index": "2128776af2948e7e574827b2fc867fc9",
".git/refs/remotes/origin/main": "1505a19d5ea41d290800c306172b0c08",
".git/refs/heads/master": "70e25924a186aaee9ea2f136a8477aff",
".git/refs/heads/main": "1505a19d5ea41d290800c306172b0c08",
".git/config": "eed88c84b777bc0e6d954924edb4cf19",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/FETCH_HEAD": "ff4063c8477b1c641ec9e2e40b9dccf2",
".git/logs/refs/remotes/origin/main": "734bfa9633c461d9c8f6e512c5dad155",
".git/logs/refs/heads/master": "81d61babe05a1a62adea22f016141ca0",
".git/logs/refs/heads/main": "750908e30acf89ca857aa01eabdd8494",
".git/logs/HEAD": "a5f998934c3f86ad40112afa1d07f9d1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4"
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
