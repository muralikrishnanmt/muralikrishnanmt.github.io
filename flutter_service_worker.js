'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"README.md": "2f1417b25f2318dc45ac5bdc409fda27",
"404.html": "5eefe1f3fd645dd0417b11f36d283b6d",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js": "ebe6d351a3a45b97a9242ff878bf9168",
"index.html": "64bb67e00f646d39b63d6f75a0103a2c",
"/": "64bb67e00f646d39b63d6f75a0103a2c",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/fonts/MaterialIcons-Regular.otf": "2881cc082446e5ee9f6830661ac51d12",
"assets/AssetManifest.smcbin": "52a42bc3654c3195aa4fe18cd4a88bc7",
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
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/AssetManifest.json": "9f46978dc681d77b94b07b04c3e00c36",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/NOTICES": "188dfae2fc5977813044c864e1eecba1",
"version.json": "33d70fe2173c74b7267855e215422758",
"CNAME": "392f6660145c06dcffd0a9087ef7654c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7922f03d5f4dffa13caeb08442077d9c",
".git/logs/refs/heads/main": "57bcf7143cfeeccd621d656a06027ac7",
".git/logs/refs/heads/master": "2e350067400ba9d6dcc3baf07a88241a",
".git/logs/refs/remotes/origin/main": "08eaf0edaa20734ed8c321591a102437",
".git/objects/6f/7cbd620cacb241c239f7f832984b496b1a8be6": "e71069e75695d13c56682648618e7424",
".git/objects/e7/db97b1f46574dc14747543ff03bd04377c53f6": "a82a3600382bdbb13f977e58e044d20e",
".git/objects/20/0bf1daa32435f04761b3bf0f551fd65d0c174a": "fc8dec93b6bd9fafd9ac95730c0e9c4c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/dd/d8a2b51138dc95d6e0fdcd303d982715be044b": "de6215cdb55012c9405e2c95cdf5d796",
".git/objects/dd/f58c1d5fe797cf06ee5407cae95e64b2d2d61b": "cd969e1dc159d53ebbe12fcc930a6e53",
".git/objects/01/83db2cdec76e209acdf4aeb49abfc27ed19e7d": "5a9aefe9d12edf659be874f49d329653",
".git/objects/01/a5574ce56f76c00fbfe84a686180e3c516513b": "0ec1f85d997c1fe8a320b73d501ec310",
".git/objects/26/006dfbf57e939858169add45600111d91597da": "a69d77fa5f341c48703a333158456f61",
".git/objects/69/8d3c4046c4fe06a1dcecd112336d3e0defe754": "1560a784ebaedd2f5eaef2fdb12df4c2",
".git/objects/d0/e5f91904c2cd8d8d7952c3871ddb546aa2e4c1": "108de7f8503c2a440a4143c1ddecab64",
".git/objects/90/535f47639401d09103de749ca1f6085323a9fc": "3a77c70e322d671a247d9f03f3a36b58",
".git/objects/12/05b9036592f6f5829c1a9a370e1c96488e30a2": "7166c14d0bba7334ed6c3a32ab1188b8",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/9f/8d7b8b67b2a1830c633b7932de650f20c57423": "1e2b9836175c6cd7f2a10229641759ab",
".git/objects/9f/98e1cda99088e5f5b61496c6457ee2c195fd1b": "6e54de7327ebd14c5211ae13c4b42127",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/3e/e0e69f8a29cb1d68e97d57ecb7639c8ad9eb90": "8990d242126a09fa0b93bd5d6fb5a624",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/8f71c7f2ba838a8912d7b3de9a80695794991d": "8c82f5423b77cb61f36b48fcc3274c3f",
".git/objects/51/0914eda542e31b9c59797fb8defe8236341336": "2d9bf012e5a71715e89ad83bca761416",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/07/9b5ab61fc44e0fb63f385f034008802aaf3109": "eb29f861c2491d74e9b2eea27386794e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/f8/20bfa7abab1e6515fc2040274d6f8847159bc8": "807d354c3b6a235dc07aaa1cc8441073",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/45/5e615ef690e7a5d4f0c7205b842abe1d46de52": "85fa000420a565092a03eb1e09bede4b",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/d2/63d8ce3f3e2f2db48a4ba9c8a1d3cc8e6df223": "390dcd7325dd207db5f225a059002bc1",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/54/7aaa931cdf6118ced47cf6a6d4e5b48cdf58e3": "17259360cb979b7c7e2fa7678df7fa41",
".git/objects/54/100184ddf3c1f10151709d3d859a6bd998d1da": "d97420b0e6ece7b2ddc5b246ef64d041",
".git/objects/15/8273f3e6a1349b70025dd88c6420f43245eeb4": "0914515deed0c0cc39f2c70b9f1fc3bf",
".git/objects/15/057a270acca0092ac0a602d9aa34ee06b11bcd": "2d87cb36fafd857ab7bcd4f7ebd3cb2c",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/24/13121d3f74cfb3db3daaa4de625a8ef117940b": "79353b414e5c537af506e2ed4b945efa",
".git/objects/79/75130c435b73d2ed1ba9c9c440a5fcb575bfbf": "9a9d722fdfa4f0cbdb1ae2dce21c8238",
".git/objects/c2/9c2a6db5f87fcb2564e7b3ed8f01a5047cb0db": "528da75285a4ddded4875f8ae3b53a9f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.idx": "3a9493a7fb9b7000bc99d58deeb79f07",
".git/objects/pack/pack-c5a5fe54e7f53c3ab6785f325caa02a1f0b9ebc2.pack": "2a8ada06334223f05eb4de51f1c2665f",
".git/objects/f5/481ba38a5ca44b1ef26db3a3852b7369e0bc0d": "4d1f687ea406412ec0404a2b1f7eab32",
".git/objects/1d/b96b47d7d2ef50e4d2675a50797ac5d8e5ab40": "7955c3e61e8b5b199965240cd2fb3afc",
".git/objects/1d/1fa0b992c9e26a656a7ab2bf464662c08f4b3b": "1739f60880228cdf36ad3a13b570e708",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/72/ef495e7969eb40034346182a5a2309baaffba0": "d369bc2a4caea2fb74e785e2c9fa9d37",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/00/fb83174dce954d630162bb13651aa84b3d473e": "faa1611d745b681ef2fdcbe7dcd435d6",
".git/objects/28/e46f2c4e2c271672bfe9f69986d78add0f5ddc": "1b1fdb3a8aaeb7953fe0cf059d0bca10",
".git/objects/40/9db3a02e86cf60fd5ef71f16fd91fc19220687": "66a35c3f302899d39e4bded67f532f1b",
".git/objects/3c/a0a28a20ea206cd3b7ed35d293a4ea4c1f5e9e": "a6fd24d2b9d6df57801d8c94f275347a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/de/d8b75bda5d0242bd3bbb645aff0f246204052c": "dda7bd041b4f2fd2d4cc7caa749b5a3f",
".git/objects/de/98909a880f7728b5d56324fc8e2c265ce2a242": "6b962d2974ebec51fb6f19371e28bd07",
".git/objects/e4/22266871a919edda9b9df0719e05be728e1faa": "05efdf0bccb9d540ebbe644e2fc2124b",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/10/0a6760c76dc479d0a25e354a2a8b2f124ada4c": "322e1debb9e8627bd27b4516b23da377",
".git/objects/10/aca2a356e6da03325a3085f36ac01f2624f978": "73179960f7bd9312917161d9c205a6f3",
".git/objects/27/fed0f4c4d2703fb2ea80719797a5dd26cf7b27": "82aeeef853a16849b716d8f7fc60d9a3",
".git/objects/ab/80c15d607e530b4951a5194a84f6db3d4aaf9c": "5eea96db0f3426d9e57a7700d8570a07",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/58/c9781940fd98734deae3bc846b764ff25a911e": "a1622f73d5eeb998afee1436d803dde4",
".git/objects/3d/f1ec47047232347f99a4c186568eb9e1a864f9": "bcf47213a783f3991b6459b9d54b7805",
".git/objects/ed/b8c30b7c1c7801b7666d77eceb14bbb02cbab0": "b6f8605a892626bbcaa7b252615d14a3",
".git/objects/6e/1e3df0f4a1697d7d52fa7a659401465387136c": "3472a346c89b5b35f04ab61cff4c9757",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/60/4a82c00d0dc6982aab11495b49f943eb19a3f5": "73adb718d76c17949a13547b7a4edef2",
".git/objects/ef/d58cd5801eaf9787dc80fe9856074e8ec04eae": "9a08404f1af7fb7d451eaa19f1e64131",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/4f/db5e5d3710c103a160a9eef5e7025b41e8bd13": "1b5637ca1496cac0003553daf5de2e15",
".git/objects/35/901b94dfbbaa2a879b12badaac00a597081dae": "aced9c7ff2829543216985f2f5b709cb",
".git/objects/35/9f88d549c49f3770d8e272c9a8253894f2f132": "acbd9650fe90b30baf407c8b304c079e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/17ea59a64ac9f7ef4f1066986b522095a03b68": "ecc94d29e8d53420b3e9b91ae20fa800",
".git/objects/71/b65a2462cd3871bd3fcb43bd111249f69e6eb2": "bc14e6402c5059afbf4f84417f6171aa",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/23/1e926708190a90453dc057c21402701ce0e59d": "695b651364e81cfecbef9bfa27fa7d7f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/52/3c27389b3ae261d4d6c87c5b7da304f942e7db": "38f442b68f6be029b4ddebf1e5d07f81",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/43/e45f5fc347e2778314cbab6839cfc34842b43a": "f2659068eb0ee675a8c0c9611c921f23",
".git/objects/6b/d8c42cf9abc23a895ec76f5d3cffdfb5fc64c9": "b249c0dacebe42e1c2d8e1fb806fff86",
".git/objects/da/61cbd2bfc27bb54e202120d03b5444863bc458": "f9d40761273f6098d28e5469db23eaf9",
".git/objects/38/833c2384322385eee4d617dd1913c1b1e2701a": "ccd9f13583fc904992e927ec2af323ae",
".git/objects/56/a968f363b42d3d37ea3287aa90ffad7bd545bf": "35e26240c5d4643a7c37452886ebec03",
".git/objects/4a/8e313780d92e9fe1d5277514cfc033b7df8498": "5ce17a66439afdb6e4820c09b35239a9",
".git/objects/7a/471ca2fb9e10c037eb7b59955b155b8475f91b": "6ca9baef3c594d4a68522e517c4c99f2",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7f/9adc5a9509514f810756067f183ba6e6c3797a": "498437654adb601e324a0d4b49efff1b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/9d8ecaaf257e9b81d63bf938fb8f1ab7a663af": "cf6822374413fdae91c3a562f62a1036",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "1df3e4576216877b867ac05d4a3ef741",
".git/refs/heads/main": "5c9c8df72b7130ea96186a344abe1389",
".git/refs/heads/master": "0b47494fb1d2d5c42c9dca4d35869013",
".git/refs/remotes/origin/main": "5c9c8df72b7130ea96186a344abe1389",
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
".git/ORIG_HEAD": "3ce88218e4c97eac4c8dbae50b4bec94",
".git/FETCH_HEAD": "635c415981078ca602a7e999ccb0da30",
".git/index": "eb09e130636771a16adf80572a2dac17",
".git/config": "73fe4e269045c549185120728db0fc09"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
