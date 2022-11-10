'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "64bb67e00f646d39b63d6f75a0103a2c",
"/": "64bb67e00f646d39b63d6f75a0103a2c",
"assets/shaders/ink_sparkle.frag": "b9f0df7abffde85f293515e0649d56e2",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/cloudproject.png": "3d6b280dcfd3c1a843991e1b41c8f533",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/assets/images/Keyboard.png": "0ed64efd2e53bc6257d1283a61432536",
"assets/assets/images/moviex.png": "24f2e5327a4276496c14cd99515c843f",
"assets/assets/images/shop-image.png": "8994d96b89c662aa157defcf2b15d1df",
"assets/assets/images/coding.gif": "1f835a0beb5d2ee5e72bcc69b51c02b4",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/images/ktu.jpg": "3232508afc7746d92b5484f73bc4f453",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/rr_logo.png": "9957b95967243dba60831f28e7bf58c2",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/experience/g10.png": "72cfb42177ed5d2eda7b7a4439d56bf6",
"assets/assets/images/Weather.png": "4122fb03870df23f0613d086b891c845",
"assets/assets/images/neocradle_logo.png": "14086bad170e2cd13b6d7b49f8efc53f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a70dc76bd3d7d59dd6035d77a885d3e8",
"assets/AssetManifest.json": "e9f6ff0537fb8eb339328fe4d5003f22",
"assets/FontManifest.json": "1559c98f0595d10de641bb9707a06181",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "917e17ed31b40ca0d5435a18965bedd5",
".git/config": "eed88c84b777bc0e6d954924edb4cf19",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/7240ea8193065dbafa8b6473565c60d736b6bd": "1d7845cffcaddee5876785afb7f71333",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4e/9e9d1af3a83a0770e601312198e39af38e20d8": "e2b38d4d6f87422541abb7321b79d94a",
".git/objects/0f/9972f4f0e8c84f8523dad67fa8accb0cbd37f9": "5a6671665fa4ca0c98c3c050c9ce064e",
".git/objects/70/090069f03b93067683e1fb83f07c5c28182421": "818be4fec1d45a0b2181a089008c80be",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/246e34327aa819a2d96c803d27747313222b69": "bd3189ae52cd6d940c10e67708f763e9",
".git/objects/6e/69259102a5a5061aac8681933f99c22b872706": "121de34d7d45e2946f571fc805f440f5",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/43/0ec164ca1a49f1e351d79a676fd0846cb9a78a": "4cc608493c5ec55e1fb4eb770f77084e",
".git/objects/43/3db0eacf9ad47bafd6034962aea8fd35f5f172": "1f1f1929d6106f3b35581cc60cb2039f",
".git/objects/49/f2ec2fff86651f57efe34a24ebced7923c9a73": "b121a00b8754b75418f3b16d8ed63eb7",
".git/objects/ce/8a26c569bf36713942c6eb4bea4674577d056e": "69adfa8a6c15a30a833ae5675f912ed6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/708d8fe6ed25db2744ca5df6517358cf145825": "c61e0558c98a7cf147680da16a806f03",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/48864bf3b3955b1900a79255bdc87a061913c9": "a4d7adaa1c25fca97298faa9b99b760d",
".git/objects/e4/7a313967051e74b8ee4ced66777209a4a3eca0": "457f461f3b5e95d8c95412d2403eea53",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/e9/df5db41f6699ef0e23189fcb79e492340b4335": "dad97dde7862f2557428810b2718b836",
".git/objects/pack/pack-d871d8dc328b43e7d5f26dff5cf33cd1c8f6cd13.idx": "130ca075eeeca1d79d7b5a3bfd8eddb5",
".git/objects/pack/pack-d871d8dc328b43e7d5f26dff5cf33cd1c8f6cd13.pack": "16560a420e2e5eaf8f6d6eb36a6504c5",
".git/objects/04/e8269031f4470957e319baed7b964843f66c02": "d900da4b19523678d16e9469d847ea9d",
".git/objects/af/39c20ef4242f6d9876104bfe51d00698d9087f": "49ac1b970f38528114eb5602d96c01ee",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/83/9ec594b3a6fd4a3b6cb88f1e877c8584b27a07": "f2bce90f057717e14478e6a295e6d59c",
".git/objects/60/2f8a25e1f463a3768c5706ec39b92898ed900d": "93f857d0775a334d3a7172ea8e982100",
".git/objects/c2/8610f591a8c1097434555c97f095202da37ae4": "c47f400767434c0f39af70a72ae5c8c2",
".git/objects/65/20e7c424281f9fa253e9ba59a7b53c57a325fd": "3cd8f5b7f0681e0946f5b83cc6e606ab",
".git/objects/7e/cd6cc39f5eb5fc7c4dc71d4546af2632c87e4b": "e1fa19bffd4bb51d988bad824f5bcd68",
".git/objects/2c/7bb1e387b018215497f84e1856c3013847d3aa": "1b81ea23a59d7469005ba906377eaf48",
".git/objects/32/e1b046e389d94d1bad50c25fec2ba12bd26235": "1d18d62e0bc359170b1678ed19f06579",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/89/280b1c611a7df15c9bc733503d90a94cc64e48": "1c5cde4fce866c6b2e6812ef1c7f6043",
".git/objects/20/f66d2a84a046d3c604d36067d22d975ba7468f": "e7b3dd654cc2560b371c24f866d0593c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/c24f370d7d81bcfbbd7709cfbc3bfd2b513b8d": "43c50d3699143fb16e8c8ac8159b8d94",
".git/objects/b3/51933fd78d0f44586846f02670ce1deeef03b5": "66fd43507f3db983fdf7ec887dbc3155",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/f4/5ca9a88308b79b13ee6a738cc9a6f1e6a75658": "7ed2316a96286056aa82cdbdbda26fa5",
".git/objects/f4/168dc821cfeb038716d21abecf34fb6e7629bd": "1ca4b6ef4ed9ef7453fccb6086aba6ca",
".git/objects/1b/adbf595d28aab0f879430db4b7ea0b315f1e66": "f4be49b9fb91554d83d0bfb532bcf52c",
".git/objects/31/f328cb8f692d351c596e201d424d53eb55e56b": "2b28349dc67db5cc9adfacc08901b81a",
".git/objects/2b/cc7e25d9540c720babae12daa6ffaafb7d1b5e": "bba04d2e5d24b18ea76e9e2d9222a594",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/d1102eef667ff93f6e972e32321ecc68d4b33e": "5cdd7c0d0569cb9093e9707bf900f282",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/4a/667991bc9739dca165f5c1542e90ee4b977e79": "7039ba15deb7ce27e026ca68f37a066c",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/45/2bf5e8c81d147a788a114cdf9473a7738405f3": "541fc5c1a98267c4466b4c0302ba45cc",
".git/objects/36/c12094c28b8991c3464b52ade94858513734c9": "2c367c412491789c40cc87ac9c55c6c2",
".git/objects/d6/3e4cb67b21946ebf88ee7c59c4735663f3781b": "ab72732258ad8b1a1eee31f98e78c5f8",
".git/objects/d6/f3371559990bdabad5c48eb4194cc2462ddc82": "620fe484b67b896d533355db602fba5c",
".git/objects/b9/bea9dc365ae41e69b52f43125f672bbc36ebee": "045706a8b830b1d086d3cd1ab06362d2",
".git/objects/55/2258e7c71ee91c3b024353beb18fe96979510c": "2be060ee1497bcb2a858fe55838adffb",
".git/objects/0c/4f1d99b00b244c83015af8b150bde424d6aff7": "8d253e7953afd18875f51610a41ebdbb",
".git/objects/0c/c1f2da3bf6b77a8d6f4e4c879804025e515c88": "d4394868fa29358be521322389c4fbe4",
".git/objects/c8/76234f3274f14ea4dafb7272744b390b0d0bfe": "153db8e330fb9f3d9a622b629c808712",
".git/objects/c7/00685b7bd7bd62be17108fc9aad9caaded8b2b": "01222a7fc1255505b361923a106634ee",
".git/objects/ab/1e59c48c765a27b1d7748b7470125b97798df7": "a5af50e8c26d6f92e477bdd0b4a99599",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/17/8dbe99060fab32ee528965c2bccf4665a8c535": "65354e6ebf2db418534a11eb8432ad6e",
".git/objects/9f/26049cdaf21a30ff43e62726fe15ca7ece07cf": "a858de721e1927bd000900b35f43e2c6",
".git/objects/05/261dac95cbaae485748d758f4341314b454f26": "61ed97a5ac115534ff25f9a14b33586e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/836b5f43661baa3082897c99c5f7fe997cc267": "9bb2c71690dbcd63f4a5ef3e99c0d56f",
".git/objects/b0/a664ba0706d1461188bd48548c29d861def7b1": "45c7de341b2da5f560ace80704abd20e",
".git/objects/6f/ac377647046b37c5badb0863b7ae98088d0463": "ef2da4ce59499bc2d32b25996f580efe",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/d4/f135fa0bc8e32aa04505d16a528765841f071a": "0dffd7721fc06973c25eee72234397bc",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2d/6b76c41bd77d762d78ab3904442f2359fd90d2": "9a9a42cca9d7fcdbfb798113e2bfbb15",
".git/objects/15/bdc907219c9e478224216d0b76254e5c4d3345": "5c0172bb4bea325cb12ab153e43cbaa0",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/64/e7b5075979b3cbed7f8c37db83afa966a71d19": "e0a529725a719a13ac41ffba84562118",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/f8/acd81f0ae0f0a2191610b6f827aa66d6928380": "33feefc2f93b2a8af50a6ce10d8cc762",
".git/objects/b1/49cb07773c545bf81b92059f6c2f1032ef7652": "8cacbd90b8a8120e596f5b8a15902915",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/logs/refs/remotes/origin/main": "b3166ceeb28783e3cb37db291de4939d",
".git/logs/refs/heads/main": "b81d561df61af82fc164aa45321b8622",
".git/logs/HEAD": "0520c0fa9a7b84571bea087e695039e6",
".git/ORIG_HEAD": "92b873f81b824fb2ddab5a837ef28bd3",
".git/refs/remotes/origin/main": "963c62cc1be18c53bfa37871226a1de1",
".git/refs/heads/main": "963c62cc1be18c53bfa37871226a1de1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "eba32f76e14f5bb709a776fc5baf3a7a",
".git/FETCH_HEAD": "619cd39673c93d852d809c82dda60e9c",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"main.dart.js": "327bade46550b8e9bf04c5398cbbe363",
"README.md": "96c4e680d1392f3d7404a66972a43de9",
"version.json": "33d70fe2173c74b7267855e215422758",
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
