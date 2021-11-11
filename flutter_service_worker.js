'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "e523102e6a8dd35720d559f54186a94f",
"favicon.ico": "09a69f245e307018860408d8bc7b46b4",
".git/FETCH_HEAD": "4ba8e2f3e30892c8afb2df387f79a6c7",
".git/config": "73fe4e269045c549185120728db0fc09",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e6f7b16db71c628a9f2e1dc44a88514",
".git/logs/refs/heads/main": "bd5a72c3d3e862de50cd9e1af8d08762",
".git/logs/refs/remotes/origin/main": "eec2203ece5ed2797fcf04d6ce89b3ff",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/60/2f8a25e1f463a3768c5706ec39b92898ed900d": "93f857d0775a334d3a7172ea8e982100",
".git/objects/60/195fd5ff26acd6a4e3c8af4359ae5ff1fea5a2": "ac4c3c0886a6b309ccc169f0c332f4aa",
".git/objects/b9/bea9dc365ae41e69b52f43125f672bbc36ebee": "045706a8b830b1d086d3cd1ab06362d2",
".git/objects/48/85c6e807eb2c670f85a044ce308bb548a4579d": "3c6f0d597cbe1852bce6294c4505baf2",
".git/objects/29/f5d36bee554296d2c993069827104a9c289674": "2937f4d60f291a38620b61b6f6ec52b8",
".git/objects/cb/1b878fbd735ee72cda7893c2694f3c78d98292": "9f95ecd6f5fb738c18fac78f0be94d07",
".git/objects/98/00330188bad27a65a85adea1ed0a7350aa0398": "df4f3e0b7a648b85336c2cd7cf14d8fe",
".git/objects/cd/1a3a4687110db2891a246a7e4a8e23511ce27b": "454dbc9b375fb6c3abf392e5a75659f8",
".git/objects/e9/e7f1b1238e8e07f209bd5ce16a764d3130b04b": "9da96f7dec77680736c300f11cd69a83",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/86/02b5c0d62a9582fcdcc7e5611704dd05115cf9": "610f24f58eba55d3d41ff3e524f4db1d",
".git/objects/a2/ef4449fc5499111d4dd78eb2fc07579d9ff97e": "1a146448e58d0363a364eaf35c11b42b",
".git/objects/1f/4e4d2fe10f7c558ba712d2f6391b70c0ae9688": "6557a42767118dd13b634b5242ec65d4",
".git/objects/1f/ab10669240621c91c491176d9f7d11810ab070": "5d5d61f26fb3fd09af3e03981b8cfad0",
".git/objects/70/090069f03b93067683e1fb83f07c5c28182421": "818be4fec1d45a0b2181a089008c80be",
".git/objects/04/e8269031f4470957e319baed7b964843f66c02": "d900da4b19523678d16e9469d847ea9d",
".git/objects/d4/6c70159abbd41889323064913945e785a09e06": "57b0c28c5928af885a59fa03af6f79d9",
".git/objects/64/e7b5075979b3cbed7f8c37db83afa966a71d19": "e0a529725a719a13ac41ffba84562118",
".git/objects/88/97513d6f7c84f7d4c86dde2dc3dc6d5873f855": "2a3d9aa509a8789ab54425cc02d11e80",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/708d8fe6ed25db2744ca5df6517358cf145825": "c61e0558c98a7cf147680da16a806f03",
".git/objects/4b/a3d1f9f23e85f0da65a460c84387d07a9b4772": "6b37e9037f7953577bd2f10a3d7181ed",
".git/objects/2b/d1102eef667ff93f6e972e32321ecc68d4b33e": "5cdd7c0d0569cb9093e9707bf900f282",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/45/2bf5e8c81d147a788a114cdf9473a7738405f3": "541fc5c1a98267c4466b4c0302ba45cc",
".git/objects/1b/adbf595d28aab0f879430db4b7ea0b315f1e66": "f4be49b9fb91554d83d0bfb532bcf52c",
".git/objects/1b/c4d765a8043fe8118bb4ed470d9fe8b1a1a1a7": "6fbdd054514f29ac1d38cd8d8b10245d",
".git/objects/8e/48d3fd4c93577118f6fc9469e91ca9fae3bdfb": "7cd9beaabc7d00a2317c3208db130e45",
".git/objects/0f/9972f4f0e8c84f8523dad67fa8accb0cbd37f9": "5a6671665fa4ca0c98c3c050c9ce064e",
".git/objects/ce/8a26c569bf36713942c6eb4bea4674577d056e": "69adfa8a6c15a30a833ae5675f912ed6",
".git/objects/e4/e8c81a070b915832499c91bca257adfc906ba3": "c3592f8437e13873057375be44c90a86",
".git/objects/7e/cd6cc39f5eb5fc7c4dc71d4546af2632c87e4b": "e1fa19bffd4bb51d988bad824f5bcd68",
".git/objects/11/e430873126ccbcddc9577df553efaa445d8a4d": "a6f27ee981f45142dcbb6fc18c7f4efd",
".git/objects/11/97068f0861cab7db9f103009e7e047936dadd6": "48f473195b607e7e7411d688d6b243ce",
".git/objects/74/62ef74d55f6291ce8d8a78013e028c8e92188c": "c0fa9c0c34df7dbc901d3a6158b79918",
".git/objects/74/d27601002d5678bcb6237625a4b61602924c81": "5a788a3c83d11434770f152cc7429e9c",
".git/objects/81/a7bf940ce70c2e3bda22664feae7f61f11ecb2": "d88e56e8b935d9c7aa6f2cae2c5277a4",
".git/objects/26/e992e56e9f3ee5e6a98e1718595d53792a53ee": "d41c3e6ebb06a52132344a799a84341d",
".git/objects/44/9a54e3acefe6e089b38c332a2becce8d0c3224": "e4780174f929d58ca757b6f1765c014b",
".git/objects/a6/2c1498969a0b4acf9e1e94da49737238285f72": "06d6b2d9c525f88867a606cc470fb272",
".git/objects/c8/76234f3274f14ea4dafb7272744b390b0d0bfe": "153db8e330fb9f3d9a622b629c808712",
".git/objects/b0/e81c95e8e151c9e1bbcbe69afed50afa9188ca": "4d63f2d812f06b8463adf8070c41a169",
".git/objects/b0/a664ba0706d1461188bd48548c29d861def7b1": "45c7de341b2da5f560ace80704abd20e",
".git/objects/c0/fd9710118f34d74274258a03460d02496531ea": "152dc3a5a1e255667a9aa3b0a4d2cfde",
".git/objects/f8/844a3f5a14e6314b8a9a77d86340698506d8bd": "007945604b04569ea9a47a7cbecb602b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/93/5179f4e7a8ef5391ac5b867669be6bf443e13d": "3beccf2767f3dc688197ea3c30059845",
".git/objects/57/3e8e8bf72988cacde4edae377577a70f356037": "498dc6ec30e7ea3226e3b64e4053b627",
".git/objects/9f/26049cdaf21a30ff43e62726fe15ca7ece07cf": "a858de721e1927bd000900b35f43e2c6",
".git/objects/36/d201ed155503d8a53674edc305a25ee9bf1d3e": "06822d187d5281ec6f7c582a7e722660",
".git/objects/68/4ba25b1b1cd788f84181035036a4b4d517c1de": "2765976caabcd905adaad805f8414bf2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/246e34327aa819a2d96c803d27747313222b69": "bd3189ae52cd6d940c10e67708f763e9",
".git/objects/d0/a4c1bd02d8fb95780542c0a36a9173bc408f9f": "9888c4ae2c5063881bec05ea0cb0ff2f",
".git/objects/6c/eb2e83c1884bb44da8b4b98ca52a31c6ab317c": "10bfe0e796428b4b4605497dc824a2de",
".git/objects/9b/e6b265372cc114809428a7df2b85287f014ca1": "a52a6cf10bcc62d8c67d278aa343885f",
".git/objects/fe/449ed91fe003f00d194e92354c41166de640f8": "f2c14f34823a980fd33093470880620d",
".git/objects/01/022ad8ecf827a7f92a17d4097bef0c197e9a14": "f3350084b0c4d425badad0068d59e77b",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fb/5d6a970a3f68e3ce4dac8a04ba7ebc7c8c9c48": "4d9021a72c7c7242553e44c99659b4a9",
".git/objects/05/261dac95cbaae485748d758f4341314b454f26": "61ed97a5ac115534ff25f9a14b33586e",
".git/objects/af/39c20ef4242f6d9876104bfe51d00698d9087f": "49ac1b970f38528114eb5602d96c01ee",
".git/objects/c9/c299bd04e4fa3a1d979b1af19991feae3fe69b": "7033e491dce3358685d630abf2762aff",
".git/objects/bd/2d079321cc212901861e67a97e77bf2f192d6b": "d715a10b304dd92f3a08f44e302ad3d0",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/33/48beef6fef25cb34a306321656c027a933f058": "7ac5cd5aacc694678518d8f0656b3f53",
".git/objects/33/194305e8813b2510fa91793d1aaf43ee9db17b": "227860082c3567eae23a23f42dc0c615",
".git/objects/c6/12076c5a8053888c2bb9a1b6a678e499cbb774": "cf985a68eb139ffbef8ed34321218a7a",
".git/objects/9a/547a760c6f0be9b225980d3bbb4c6fa2f81345": "6e2ce6e8bb2f0342ab706fb0778e9c16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/27/617cd7fbbaa79bd717e29100a2a23990ca0f1b": "81318e140990458127435fb12e39f80f",
".git/objects/65/20e7c424281f9fa253e9ba59a7b53c57a325fd": "3cd8f5b7f0681e0946f5b83cc6e606ab",
".git/objects/eb/5faabb0d5438775314f85664642374f752a3ac": "409f45c24df378b07d8052632327e88f",
".git/objects/8f/a498165c897c9372f95c462c72f1be2e3a661c": "3ace118ab955161cd047ec5a1d6789ce",
".git/objects/e8/ff8d9a8f48c01e4d0879c229eaa8f96319ba2a": "9463a9f5e29fc4a3d701ce911e15b393",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/4d/c316fde35ebfce810b14b28027c65ddb82f15f": "a50fe99d74714cd0ccedb135ebe871d8",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/f3/ecc0a6784cf84a17a0dd459a8f96218db8dd9b": "1141ec99e4fa3a7b46c55a95da5ef1d1",
".git/objects/f3/48864bf3b3955b1900a79255bdc87a061913c9": "a4d7adaa1c25fca97298faa9b99b760d",
".git/objects/21/2c70bc28ed6a12f74ebb8a832a27ed4091126d": "2e72ccbfd01ada57bf4f259c82e9751c",
".git/objects/a3/8f7a69d9d50b86238248d779e51071c4b496cf": "b4fba8c39db8000731f7b216c44465a5",
".git/objects/f1/61c3b0223683541d8cced16f2def565f46c4f7": "dc052d5630e7e5ab25349464bf1634bd",
".git/objects/e1/db6280d3c1de3906fc975455f6665661c85c15": "f31064d301611e61f5f6280a75f11a65",
".git/objects/8b/c6948ebca4e6d9e4f6cc1872ff8f2fbffafc93": "38bb923977b8be746cd3f5dd7c93a105",
".git/objects/8b/e11be0ff2fa2b5858185f9b64ce46958151027": "7e9c35feb1814d937c675d26b0bf322b",
".git/objects/3f/83c5bcba7c48bf3023cee01bba2517d84bfa84": "bfcf7a5af864cf8347898db192ac9d93",
".git/objects/c7/e8c80e6b5c0306f3a14649d909064ef55d93be": "a49fc8e04902e403e2e95ac64a0d2b36",
".git/objects/92/730bf84dceb812bcec187d39db1ab05b1f9771": "9640a7b9e62b98f3f114bbd847a83d53",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/c5/9cd047ac5fc3600ab0597023a247bf02006984": "5b2885303f8378049544b958b0859133",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/d3/e787532c54580440ddf27ac70a4961c1728324": "c5f208a00b0601974d09707830647f2d",
".git/objects/02/a597f1d99f3740bc1013e4f0e895a5df328a16": "e9b99267a263accd590f6e37c0abf7a9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/37/a5deeb069e8b239c31fd4e9d57ee077f749027": "2c9139bdf047b1b823949f47862b22ff",
".git/objects/e6/dbb338f8ad24b4082cf97521da0c5f5e1d1117": "436cd93564b2a6bcffdf2f5086f48741",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/f7/fcda780ff66dc3db4b046ced413a9ce5c7c726": "4218c26212eef596ecf93ba86910cebb",
".git/objects/f6/a3176a342f89acfd4c6afbf3f6b3a63e3b3865": "c9f0e4e6ffc12e86332899ad43c14477",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/836b5f43661baa3082897c99c5f7fe997cc267": "9bb2c71690dbcd63f4a5ef3e99c0d56f",
".git/objects/7c/9c529fcc1c078763b37b586d800023f6e994df": "c7427ea049c46b73adadcd66062ac6b0",
".git/objects/cf/5289ea21510ff8a447d030f6662a72bf338d58": "02abf2be54f10e6811edd6b064c8ab90",
".git/objects/7a/26f09bc42e1126edb7db2445294f1088d2f2a5": "096cb285d44c8e11c15d1f349d4ac329",
".git/objects/72/ead5e41cb006da1e848f9c59d2fe4acd1bf880": "6ddc9fafe0c3bfd361b39849ce730c33",
".git/objects/ea/64f011cdabd2598ff9b0808fc23a2fce8295da": "d2cd298e787fe8f56f30ec8595e21c66",
".git/objects/c2/1333655b614986ff468f9dde679aa19dd3b867": "d6fff51e344dc7e6244a47183ce4081a",
".git/objects/f4/5ca9a88308b79b13ee6a738cc9a6f1e6a75658": "7ed2316a96286056aa82cdbdbda26fa5",
".git/objects/f4/168dc821cfeb038716d21abecf34fb6e7629bd": "1ca4b6ef4ed9ef7453fccb6086aba6ca",
".git/objects/0a/7ccc4b8356ebcf2912d08eae0cddbb71b3e461": "53b8bc1b34915c235b9eb6f4d857cd38",
".git/objects/2a/42567314d6273b0c2867cd2d62a2ff220e2eef": "4f6f345c4898d4b88713f1b8f2c0c1b1",
".git/objects/96/090ee3374f6ac664dad1930a84d3d23a6167aa": "0d4a91a81ef0e3a01577cc34caed3aa9",
".git/objects/77/49c96a902af7daa38998e6db9087cafc2e8d8a": "d414ba3d2206b8a35b78f3e5e8966dc4",
".git/ORIG_HEAD": "2a685fc57658ce62e9c6ce2b9655032b",
".git/index": "b0ffece743797a637aa7dfae3574a3ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/COMMIT_EDITMSG": "1290673b3371fa7db7cf50a95e8a3520",
".git/refs/heads/main": "dc604eece2580085432a3fed1c902019",
".git/refs/remotes/origin/main": "dc604eece2580085432a3fed1c902019",
"index.html": "c183102353db28d820260039f0be6d86",
"/": "c183102353db28d820260039f0be6d86",
"icons/Icon-maskable-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"icons/Icon-maskable-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-192.png": "fec83fdfbdf15e4cd8d3878ad543af78",
"icons/Icon-512.png": "5fa99bb78c792c74b886bdc9ff2e2f42",
"version.json": "cc016c4247911e45dc3f10ac54691953",
"manifest.json": "0b9180829185ab31b7487d5e9c30ab1d",
"assets/AssetManifest.json": "e1f63866831ecd5630a38352b11a66fc",
"assets/NOTICES": "10c20f1eec3914451dbe43d00ffd9b19",
"assets/FontManifest.json": "1559c98f0595d10de641bb9707a06181",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/assets/fonts/grandstander-medium.ttf": "2c9eb36260b3cd2867647be779ca6477",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/assets/images/moviex.jpg": "be01e1d41ec8cd1094dcc578aa7ac45e",
"assets/assets/images/land.png": "916e831ca1849c4ca7591810644f3499",
"assets/assets/images/school.jpg": "283b820460d4f1daab661f55e2340277",
"assets/assets/images/ccm.png": "be9bf1f5dfe126fc42ffe88d3368d245",
"assets/assets/images/shop-image.png": "e9588804c7d78d4fd7d00c846efc17ac",
"assets/assets/images/Weather.png": "4122fb03870df23f0613d086b891c845",
"assets/assets/images/coding.gif": "1f835a0beb5d2ee5e72bcc69b51c02b4",
"assets/assets/images/rocket.gif": "c6519b83bf04ece1ba66b02a53840035",
"assets/assets/images/experience/nic.png": "afb968b81b299f56b5a1f8c74bfd4f31",
"assets/assets/images/experience/keltron.png": "82ec1c84873f1bbf39ec7e8947f5dbda",
"assets/assets/images/experience/redlineGames.jpg": "e272a6cd10cc64cb9edb5bd80a69ef17",
"assets/assets/images/experience/g10.png": "72cfb42177ed5d2eda7b7a4439d56bf6",
"assets/assets/images/cloudproject.png": "3d6b280dcfd3c1a843991e1b41c8f533",
"assets/assets/images/eeexmobile.png": "3e3bb0629c4a22b6cab3528f2fa6a468",
"assets/assets/images/ktu.jpg": "3232508afc7746d92b5484f73bc4f453",
"assets/assets/images/murali.png": "6634db58caa5dc075fd0004c78e1798f",
"assets/assets/images/Keyboard.png": "0ed64efd2e53bc6257d1283a61432536"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
