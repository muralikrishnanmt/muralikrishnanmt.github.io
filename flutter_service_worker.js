'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"README.md": "152452e4e2f48e64940b03ce01e3c276",
"404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "6a5c15ffe0f6d9d0efb576061b7d04a8",
"index.html": "64bb67e00f646d39b63d6f75a0103a2c",
"/": "64bb67e00f646d39b63d6f75a0103a2c",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
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
"assets/assets/images/experience/g10.png": "72cfb42177ed5d2eda7b7a4439d56bf6",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/fss.png": "9b51d3b1ded07bf655518388d592b621",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/AssetManifest.json": "5808da6e8d4ce635d40b7e8ce42f7794",
"assets/NOTICES": "8cafd19b70cfc7b954cd463636425bf2",
"version.json": "33d70fe2173c74b7267855e215422758",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "750e3da2afe1e078f3a136bb2a03a16e",
".git/logs/refs/heads/main": "421ec2a86326685d1ebb05930f2a7bb8",
".git/logs/refs/heads/master": "2e350067400ba9d6dcc3baf07a88241a",
".git/logs/refs/remotes/origin/main": "2e26dd9ad9cc6dd4ace447bf3a3c6842",
".git/objects/6f/7cbd620cacb241c239f7f832984b496b1a8be6": "e71069e75695d13c56682648618e7424",
".git/objects/20/0bf1daa32435f04761b3bf0f551fd65d0c174a": "fc8dec93b6bd9fafd9ac95730c0e9c4c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/dd/d8a2b51138dc95d6e0fdcd303d982715be044b": "de6215cdb55012c9405e2c95cdf5d796",
".git/objects/01/a5574ce56f76c00fbfe84a686180e3c516513b": "0ec1f85d997c1fe8a320b73d501ec310",
".git/objects/26/006dfbf57e939858169add45600111d91597da": "a69d77fa5f341c48703a333158456f61",
".git/objects/69/8d3c4046c4fe06a1dcecd112336d3e0defe754": "1560a784ebaedd2f5eaef2fdb12df4c2",
".git/objects/90/535f47639401d09103de749ca1f6085323a9fc": "3a77c70e322d671a247d9f03f3a36b58",
".git/objects/12/05b9036592f6f5829c1a9a370e1c96488e30a2": "7166c14d0bba7334ed6c3a32ab1188b8",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/3e/e0e69f8a29cb1d68e97d57ecb7639c8ad9eb90": "8990d242126a09fa0b93bd5d6fb5a624",
".git/objects/51/0914eda542e31b9c59797fb8defe8236341336": "2d9bf012e5a71715e89ad83bca761416",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/45/5e615ef690e7a5d4f0c7205b842abe1d46de52": "85fa000420a565092a03eb1e09bede4b",
".git/objects/54/7aaa931cdf6118ced47cf6a6d4e5b48cdf58e3": "17259360cb979b7c7e2fa7678df7fa41",
".git/objects/54/100184ddf3c1f10151709d3d859a6bd998d1da": "d97420b0e6ece7b2ddc5b246ef64d041",
".git/objects/15/8273f3e6a1349b70025dd88c6420f43245eeb4": "0914515deed0c0cc39f2c70b9f1fc3bf",
".git/objects/79/75130c435b73d2ed1ba9c9c440a5fcb575bfbf": "9a9d722fdfa4f0cbdb1ae2dce21c8238",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.idx": "3a9493a7fb9b7000bc99d58deeb79f07",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.pack": "2a8ada06334223f05eb4de51f1c2665f",
".git/objects/f5/481ba38a5ca44b1ef26db3a3852b7369e0bc0d": "4d1f687ea406412ec0404a2b1f7eab32",
".git/objects/1d/b96b47d7d2ef50e4d2675a50797ac5d8e5ab40": "7955c3e61e8b5b199965240cd2fb3afc",
".git/objects/1d/1fa0b992c9e26a656a7ab2bf464662c08f4b3b": "1739f60880228cdf36ad3a13b570e708",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/72/ef495e7969eb40034346182a5a2309baaffba0": "d369bc2a4caea2fb74e785e2c9fa9d37",
".git/objects/28/e46f2c4e2c271672bfe9f69986d78add0f5ddc": "1b1fdb3a8aaeb7953fe0cf059d0bca10",
".git/objects/40/9db3a02e86cf60fd5ef71f16fd91fc19220687": "66a35c3f302899d39e4bded67f532f1b",
".git/objects/e4/22266871a919edda9b9df0719e05be728e1faa": "05efdf0bccb9d540ebbe644e2fc2124b",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/10/0a6760c76dc479d0a25e354a2a8b2f124ada4c": "322e1debb9e8627bd27b4516b23da377",
".git/objects/10/aca2a356e6da03325a3085f36ac01f2624f978": "73179960f7bd9312917161d9c205a6f3",
".git/objects/ab/80c15d607e530b4951a5194a84f6db3d4aaf9c": "5eea96db0f3426d9e57a7700d8570a07",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/3d/f1ec47047232347f99a4c186568eb9e1a864f9": "bcf47213a783f3991b6459b9d54b7805",
".git/objects/ed/b8c30b7c1c7801b7666d77eceb14bbb02cbab0": "b6f8605a892626bbcaa7b252615d14a3",
".git/objects/6e/1e3df0f4a1697d7d52fa7a659401465387136c": "3472a346c89b5b35f04ab61cff4c9757",
".git/objects/60/4a82c00d0dc6982aab11495b49f943eb19a3f5": "73adb718d76c17949a13547b7a4edef2",
".git/objects/ef/d58cd5801eaf9787dc80fe9856074e8ec04eae": "9a08404f1af7fb7d451eaa19f1e64131",
".git/objects/35/901b94dfbbaa2a879b12badaac00a597081dae": "aced9c7ff2829543216985f2f5b709cb",
".git/objects/35/9f88d549c49f3770d8e272c9a8253894f2f132": "acbd9650fe90b30baf407c8b304c079e",
".git/objects/39/17ea59a64ac9f7ef4f1066986b522095a03b68": "ecc94d29e8d53420b3e9b91ae20fa800",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/43/e45f5fc347e2778314cbab6839cfc34842b43a": "f2659068eb0ee675a8c0c9611c921f23",
".git/objects/6b/d8c42cf9abc23a895ec76f5d3cffdfb5fc64c9": "b249c0dacebe42e1c2d8e1fb806fff86",
".git/objects/56/a968f363b42d3d37ea3287aa90ffad7bd545bf": "35e26240c5d4643a7c37452886ebec03",
".git/objects/ae/9d8ecaaf257e9b81d63bf938fb8f1ab7a663af": "cf6822374413fdae91c3a562f62a1036",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "68bac51cb2dd2bde52e6fc612893034c",
".git/refs/heads/main": "6b6f960fc9be9016251782eec5514288",
".git/refs/heads/master": "0b47494fb1d2d5c42c9dca4d35869013",
".git/refs/remotes/origin/main": "5b9801dce4640413dd789f59ce11e6e8",
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
".git/ORIG_HEAD": "f3ccea30aeed2ca90b1987b5cf90c4ec",
".git/FETCH_HEAD": "858f13aa2efa11f3792608a5eb723c8b",
".git/index": "0022ad22c204f81a3db7f6eef64e0fb0",
".git/config": "73fe4e269045c549185120728db0fc09"
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
