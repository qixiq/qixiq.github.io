'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ee861150116bee51f34d10c3160e5fff",
".git/config": "1a48729f9553bc0f33424ea156fa8a6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0b84579cf2570cadcc9eb9e0868335f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7eba04bd9eebfd6734e0f09e6a6c6710",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae80813c92e537a6e3951030f058b54a",
".git/logs/refs/heads/main": "ae80813c92e537a6e3951030f058b54a",
".git/logs/refs/remotes/origin/HEAD": "fef1d321e457de6f4a9e6211e843ab66",
".git/logs/refs/remotes/origin/main": "0acf7879d57d20da73aba021b13b8a26",
".git/objects/00/8f750a7176859b34351a9199a736af057bb8f7": "576d23b12079673e83bdb18d0ae7cd76",
".git/objects/01/567dfca889644363de633a1f61dcb4d3d274fe": "57ab099e180cccb0aa67ce0000e81c8b",
".git/objects/01/963e6ebd3cb4e5e1685c70bd68d00ee629a201": "396842ab6c1f2e85082870e333eafb16",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/6780e418ec2f930efaa22d59db014731a8f39e": "63f1485327ba6a5e23d743b7fba300bb",
".git/objects/0d/1a09fbd51d7ffbf5cf2d5e87313cc6adfe82b4": "fbab408195af108520090ed99154fc8e",
".git/objects/10/27781ea3d7615ffba9e5035137f47df24d3f79": "fbebe64ec82adf40fce428fed77800fa",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1a/2611d6c159cf2eaff5e3b4e64fc9caf5214eb9": "1a75d93df85b1e7a15b26dc93fe2fa3c",
".git/objects/1a/4f3710b8996000e47b443707d25598b6972f4b": "8df63e57d2981f49742c179f3bc4487c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/922b0d0920664074ba457a132031f843e97d05": "d8842eb4b986339a3b28ea5bcd48ec4b",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/27/1ea76f30f2d009bdc5392cda83f2b9a78976f9": "6fb6911e485915d3421208af0716715f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/33/dc3856b72462260f881179abc8c617c923a8a0": "e9b6b17e7b385907ad6f850cd982bf01",
".git/objects/34/481680ad0bc00837e77662b058da9c6e207750": "18eabe0d64f8fe99c4b0408c28add17b",
".git/objects/34/818ad7cf2f2d0e50dfcec6b73a3843e9743c30": "f6d3c5647ed764b07dc3e71899984257",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/8579c8d91c86a0882697de08f8295e6bbd081f": "52301aec019b0d3943c21dc6f894d31f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ee21383d48dbf3f6fe54a2445bddadd4081394": "bf1202510a057302303a777087baa0a1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/30ff7f6738b8aa247d38bb2c73bde42924bb3b": "fc9e1b81d88fe10a881abad812d7e0b1",
".git/objects/5a/5440394c562fa4f935d6082b7fc6f1a7e6516e": "0747f4920cffb741cd438ebf7807889c",
".git/objects/5c/6d770a192954c7680917e1848fcfe77b3b49ce": "a08b0cea5f87cc53c1c6876220b0a412",
".git/objects/62/96d84c48b0b6b5ba7697fd28b140a7cf8f4fcd": "623589368c9f06bd4eb825fdd90bbe45",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/68/52cf3024c449b9e49c1db15d98f3fbd9338dca": "a6df0a9e1712e48da9a5e9e19789779e",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/80b2aff475f8dc7c971efeb3cab176be94d8be": "6d6ee0ae1fd39c9b6a06bcf44844c2df",
".git/objects/73/1b124432fe6a4213287973e3c5cc44af1d1be1": "7055066771702a31324142f9a41f97b2",
".git/objects/73/1ef57a581cbb6175e8f418e2afb19aebb67ff2": "c460e36e54fc12c98b6df7681bc07b38",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/2e6a9ac1307e70522f75700032157ab7cdcf03": "dfca85ae25fa127885ce8c50d61c015c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/81/6a40fdc12acf70d2a5e64e6f1080c65f67fdc6": "248cde70a3cfd2d98618bc07da8eb75b",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/86/0bab48d0a14dfd8a7c606a5b12cb83f176a97a": "4b7ad2abf93a42db1f3ab0d694ec502d",
".git/objects/88/0ffd2ee42be099c0d9e4d688642e7c37a5f57a": "da67226d66a3a5be8c1304c6cc18fc4d",
".git/objects/88/76ee1a96de45a9299b022b64d5aac82fe72c8a": "888cd0c594e4e1ace2fe87e7ab268aed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cb7b17ac97d3486d9a6927f06f91bd02d7bd7e": "d6dac81ebb8b1f70978287647013e81d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/083f3f373f29354f76f5e0ad63047817d11482": "3c68912892eab1f1d5bd27d754fa0ee1",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ac/234975c48fd8a1ee03502b7a3a17927bdab2ec": "5e4deeea29de2a83229a4f2c91ddc851",
".git/objects/b3/a7b6e6c733244317a67471b8ec50b5ee58e46e": "ad2796b5628ef150ea7ab17cd5cd8b0a",
".git/objects/b4/048ff181d6dd8eba3983f33b5e48921800688e": "7319ace728b4ce0c684b5305d339d072",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c5a27258eeb56d0294d48b78716c4eaa188c1b": "e8b7228594ad00ed2be0bfc7449b977f",
".git/objects/c7/51cfb0ba2cf16ca0f88bd9dfe6bc79714bb378": "fa464568f67bc8b06b3d70e4bae3d979",
".git/objects/c8/5de367342bfebf1bb522ce07d3ce4d18509c40": "fd6c261c6312c1dbfd1edbfe58237edc",
".git/objects/c9/3aabd6fa60bde580ee3a8575c86f4462e991e9": "339367d4156354d62a88edb0b65efd59",
".git/objects/ca/bfcb3ebb849f0bcda16a05ab19f38b28da60c3": "a64e94dabc5897115574bb1f4e9b04e7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/9dc4803e6b021303fe5eab7d99ac5e8a616c69": "399eb3c0e8ac5ed1b122b590f6d5e960",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4ac35cf0e0fe5b8fcff3d3e914a21aa06b5c8d": "a1028d8c1c12dbcf7e9e955260ee4614",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d9dc2d950c66701db299fd503c79b542508677": "55f6eaea2eeb8c108f1812904c02d91b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7cd54beb7d5f3a808b6c4a4dd84940a35431b7": "baf2771e185ca3ad254f7f9d42e85f7b",
".git/objects/f1/98c4d4054f18460aa4dfe8c45264888b0e3d78": "377f5675d8e6f0af2171d1ac5781640e",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/objects/fa/fb7b8544d4954f0aadebcb745dea8048333a3d": "d7a9bc4bab11c42168c6403087813560",
".git/objects/fd/8edd164d8df2852f77216dfe45754e1fc72bc3": "014943e2433a44e94bf6e84bcfe89429",
".git/objects/pack/pack-7e1ce20a8d77520f2b80cce358b2e02449e9e12e.idx": "4e4ba82cb5a35cea1232c303b2441ecb",
".git/objects/pack/pack-7e1ce20a8d77520f2b80cce358b2e02449e9e12e.pack": "fda82ab97303f64acb50378bfdf953ba",
".git/packed-refs": "24414dd5925a99cf20f764c088d3abb8",
".git/refs/heads/main": "c2f5f9a6e6e749e44cde7076b03a2805",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c2f5f9a6e6e749e44cde7076b03a2805",
"assets/AssetManifest.json": "91c12e09c054fc93ab94f7a481cb6379",
"assets/assets/images/back-arrow.png": "6178516613828f17f444731a7b88e69b",
"assets/assets/images/landing-page.png": "4d181e2573ba692ee339babbf5f4ee0e",
"assets/assets/images/landing1.png": "de0c331b9c68b0929af44d6859cf9dec",
"assets/assets/images/landing2.png": "4b2149ef703313aeed2cc4b502700333",
"assets/assets/images/landing3.png": "063b77edc4e3eb730eb1224708028f79",
"assets/assets/images/landing4.png": "b8ade6d04b8f19ed15c370048ee9b604",
"assets/assets/images/landing5.png": "66d38083caa1e579773263a7e979659f",
"assets/assets/images/landing6.png": "f6a3160c3070e06881beb8abe4c52da9",
"assets/assets/images/landing7.png": "d104de8f56385e703e04ce916e6d74ac",
"assets/assets/images/teleschools.png": "3bfb7462faaa261b07389fe4f2995793",
"assets/assets/images/upload.png": "e9dd49845957ac6b5bfc32600a32f89d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/back-arrow.png": "6178516613828f17f444731a7b88e69b",
"assets/images/landing-page.png": "4d181e2573ba692ee339babbf5f4ee0e",
"assets/images/landing1.png": "de0c331b9c68b0929af44d6859cf9dec",
"assets/images/landing2.png": "4b2149ef703313aeed2cc4b502700333",
"assets/images/landing3.png": "063b77edc4e3eb730eb1224708028f79",
"assets/images/landing4.png": "b8ade6d04b8f19ed15c370048ee9b604",
"assets/images/landing5.png": "66d38083caa1e579773263a7e979659f",
"assets/images/landing6.png": "f6a3160c3070e06881beb8abe4c52da9",
"assets/images/landing7.png": "d104de8f56385e703e04ce916e6d74ac",
"assets/images/teleschools.png": "3bfb7462faaa261b07389fe4f2995793",
"assets/images/upload.png": "e9dd49845957ac6b5bfc32600a32f89d",
"assets/NOTICES": "ec9ad89e0c73ceed50a87648d90d9d1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "308b2b0515a5801cb4d92157a83ade7b",
"/": "308b2b0515a5801cb4d92157a83ade7b",
"LICENSE": "4a2ab107f23bb6da0bd17396482cdaa4",
"main.dart.js": "117b532387cb6cc6d52c38317ccfb4d8",
"manifest.json": "491ce5f84a64884f5b5728404ed1c3c1",
"README.md": "1bc1740a57c6c49c23743fd39e4a5b0a",
"version.json": "53ca1dc18bec6ba833e9fb901f063666"
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
