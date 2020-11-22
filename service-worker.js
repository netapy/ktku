'use strict';

var precacheConfig = [
  ["_promo/css/normalize.css", "3f2d15ccdd5b9cc08e32def5e3360e7c"],
  ["_promo/css/particles.min.js", "332212d17a94139fec36ca352dd35610"],
  ["_promo/css/skeleton.css", "e7ef6a3bab9ea794913fb5e07f7323cb"],
  ["_promo/fonts/GapSans.ttf", "6e01e395116da7180909e9c022ebb6a7"],
  ["_promo/fonts/GapSansBlack.ttf", "6c1841cb96d6866f1375da769b2c822c"],
  ["_promo/fonts/GapSansBold.ttf", "ed143a682b2d58b4c9adb6c81c2a08e4"],
  ["_promo/images/appstore.png", "be3e39a93bd40673aaad542eaba38572"],
  ["_promo/images/favicon.png", "21fc233d28da9e95486d937610efeebb"],
  ["_promo/images/fr_badge_web_generic.png", "5fad15bcecb56931e6c74e16b3d01c99"],
  ["_promo/images/iphonescreen.png", "e51b13d5a5f4aaea281fe2370f4bae43"],
  ["_promo/images/logo_kataku_transpar.png", "f75b0e59b1717158f1a1cdf74985b41c"],
  ["_promo/index.html", "242cc1b057b3c713f8da8231b8c0a359"],
  ["assets/accueilNeurchi.png", "44a5fb553259ece14d2e0bcecf6f1bcb"],
  ["assets/accueilSudDesLandes.png", "7ab73279d3b66628c243045e517de9b4"],
  ["assets/demologo.png", "6f1529a6c6aa56cd58c40e465e2e2221"],
  ["assets/icon.png", "ea8ce7ed33e8376bebfb05a72654caba"],
  ["assets/icon192.png", "0e0212e302561d27c37031fe82760189"],
  ["assets/icon2.png", "23df41a93055b607d947c47e3f4fe5d6"],
  ["assets/icon3.png", "f79eff1c81ce53e773e6c31ad36a1894"],
  ["assets/img_cartes/7peches.png", "ec3924dc3a3059349ee9464c22455792"],
  ["assets/img_cartes/GOAT.png", "42a5fae7264296507de0ab497d031c93"],
  ["assets/img_cartes/alumette.png", "a10f07c39626bf6571460bd8b4b413f9"],
  ["assets/img_cartes/analyze.png", "ef870971430e1efd4064b604d76db625"],
  ["assets/img_cartes/antidote.png", "b244bab002e3ee72c3e62bc3ff2315f8"],
  ["assets/img_cartes/antidote2.png", "4e15ed2e2319d0f4c4b2f530a4e1392d"],
  ["assets/img_cartes/bottle_medit.png", "dc0b4537ec2d07456ae62a8afa923cd3"],
  ["assets/img_cartes/bowling.png", "ce18cbf9829c24fb57527f89cadfa9e8"],
  ["assets/img_cartes/bubbles.png", "fa332c578861b22128be1596f47fbe56"],
  ["assets/img_cartes/cerveau.png", "622c2e0b18443721a6e57a09272cdb74"],
  ["assets/img_cartes/chance.png", "3195c01283ae88506b2e4ad44a5eca49"],
  ["assets/img_cartes/city.png", "8507fdeeea2e44875f6d04dd9523a8f0"],
  ["assets/img_cartes/coeurbris.png", "1b59b8d0e72b7c53612f198a126d0cd5"],
  ["assets/img_cartes/collectif.png", "4559ab2b8636f5f9513ebc777ac27579"],
  ["assets/img_cartes/debordement.png", "8007570a221f878f13dd6a335837cc28"],
  ["assets/img_cartes/demolition.png", "2b3101e5531b8eccccb14ff10a403550"],
  ["assets/img_cartes/draw.png", "6399139f2adb52505020b6584d637021"],
  ["assets/img_cartes/drawsmiley.png", "e206cc435b7944c2da0e2081e2fcc3c0"],
  ["assets/img_cartes/duelfight.png", "5545fb929f4dd83dae0dcec30b223818"],
  ["assets/img_cartes/dummy.png", "ee90a6c94ecd57542e65e3993f273152"],
  ["assets/img_cartes/dynamite.png", "57525ef96cf2bc0db41243860bd32ddc"],
  ["assets/img_cartes/eclate.png", "5a66595eabcc2c9da71c5edc1fd4c465"],
  ["assets/img_cartes/embryo.png", "1ddc134a1570ec8bfba4f13d7fcef79c"],
  ["assets/img_cartes/fighter.png", "962855f7d29a809ad7366166d63b66f7"],
  ["assets/img_cartes/fire.png", "a7e5ce95674c1cb8d8393c29e47d1fa1"],
  ["assets/img_cartes/fosseboire.png", "a3c21e8d875278e002982d6082184d87"],
  ["assets/img_cartes/fossecreuse.png", "6ed803345848ceff9ffce2a9870b623e"],
  ["assets/img_cartes/futur.png", "a47a8f3f776bc72b1ce8a24630d07250"],
  ["assets/img_cartes/game.png", "d88935db4ba81dd835544f6c3814d882"],
  ["assets/img_cartes/girl.png", "b385d0e24f130852e9d4b366fdb66186"],
  ["assets/img_cartes/hidepng.png", "50fbba80aa2db1aae47c35d3b34ec3f8"],
  ["assets/img_cartes/implosing.png", "576f404131d2d2099ddc3378c0493f40"],
  ["assets/img_cartes/larva.png", "0b301d702ffa2f75229ab012780dc351"],
  ["assets/img_cartes/lion.png", "d38fdc51e71fa54751a7ab397dcd2ae6"],
  ["assets/img_cartes/maman.png", "e8f6044f51bc2d8a2f434ce68fb8413c"],
  ["assets/img_cartes/man_in_bottle.png", "8376cbba691131d93156e3e1c97d4213"],
  ["assets/img_cartes/math_flower.png", "00f5176c3b8483bbcdcdf1b429e1a38f"],
  ["assets/img_cartes/meduse.png", "a594cff22cc719e0edda84e7aa63bbfd"],
  ["assets/img_cartes/mouth.png", "708e6e1c63bea6d0840d1a81d9c6755f"],
  ["assets/img_cartes/musique.png", "a674c8b319e53575004b667f75e38545"],
  ["assets/img_cartes/oneangel.png", "beb60d6854821796bf1d1ba34d9f4ce3"],
  ["assets/img_cartes/paptoilet.png", "e87de5ac830618d22f48aac9a7984f67"],
  ["assets/img_cartes/passe.png", "8f17f02e735f279c46ae6b3adabf83c5"],
  ["assets/img_cartes/path.png", "abc3ff2d941cc80e3bc8b38a75409caf"],
  ["assets/img_cartes/pharma.png", "f37554ce961bf64595c03e85c75fe80f"],
  ["assets/img_cartes/plantt.png", "df6533654ca0f86e83106c184bd73c2c"],
  ["assets/img_cartes/point.png", "6133c0f74dc034b079b1906e3cfd9180"],
  ["assets/img_cartes/pop_bottle.png", "d755e990e6d3570ca8ee2b8da3460088"],
  ["assets/img_cartes/portal.png", "c5cfb79df95b20de5571dd991e0034fd"],
  ["assets/img_cartes/present.png", "165b078155f70ffa7a27c09dc41578bc"],
  ["assets/img_cartes/question.png", "8adaa8bbd131c60246f436a23e9272db"],
  ["assets/img_cartes/remplissagefosse.png", "ff1c90407e1ecf7aecccda985049e1e0"],
  ["assets/img_cartes/roots.png", "983127387af3fa214cc5429ba7158fc8"],
  ["assets/img_cartes/sabre.png", "ca153660282f295f16e624c13b0295df"],
  ["assets/img_cartes/sanction.png", "1824e4275a9d0a7842450056c57fb461"],
  ["assets/img_cartes/satanic.png", "9ccb33d55bb686ccc71322978dafe38b"],
  ["assets/img_cartes/solo_kneel.png", "0dacb082b9ad01f1b75bf75b1f46ee27"],
  ["assets/img_cartes/solo_working.png", "466bb14bdd5d31cb22ee142aff5b5f2a"],
  ["assets/img_cartes/soupeserve.png", "02d96b72d37ad2c520dc395df7c9ee10"],
  ["assets/img_cartes/storm.png", "2acb2a5e97c6660cd30f452770877a01"],
  ["assets/img_cartes/threeangels.png", "9884d89630d92d482320c898a3162607"],
  ["assets/img_cartes/tooth.png", "a09ea5860978702d7aa70f267141f553"],
  ["assets/img_cartes/totem.png", "18ce1056d272f3500261a1418393389d"],
  ["assets/img_cartes/virus.png", "1f54d91da76f7369cc1b1549a6498e53"],
  ["assets/img_cartes/virus2.png", "b517d4001afcbbc2a2aa6bf10ba1c76f"],
  ["assets/img_cartes/vote.png", "5c102132e173f2a1848e8c62551dc6e3"],
  ["assets/img_cartes/zodiac.png", "a8cad2170ec5e119ea087853024d9d78"],
  ["assets/intensite/bouteille1.png", "1a037b28eb3bc6b703989ae0c0c166ce"],
  ["assets/intensite/bouteille10.png", "3bc053a4fc0193fd66e7fbd37a3e96b3"],
  ["assets/intensite/bouteille11.png", "45e99bd2f4adfe6b8cb36cb1d05f5ff1"],
  ["assets/intensite/bouteille12.png", "65e5b1b6bb17f46821762cd76c931c6e"],
  ["assets/intensite/bouteille2.png", "7186ce5a587c3b9aacb899b5a289fd1d"],
  ["assets/intensite/bouteille3.png", "dc3be78e1d7907753f7f2f056723c28f"],
  ["assets/intensite/bouteille4.png", "6e100afc52065c63cc9516e1a99ccdcf"],
  ["assets/intensite/bouteille5.png", "464dfcf07c23966bfd5f4e19dab266d6"],
  ["assets/intensite/bouteille6.png", "d56f63d9839c12587d57fbc5a5ce413a"],
  ["assets/intensite/bouteille7.png", "c53be79179e91f3ee87247eb2b6476a0"],
  ["assets/intensite/bouteille8.png", "6391415f27ee7442fcfc9266a9bca8f9"],
  ["assets/intensite/bouteille9.png", "e20047ffa4171f39e4b8df1616afb66c"],
  ["assets/intensite/voisine1.png", "b2908a7d1f9ce4e081c18b50ae91e4fb"],
  ["assets/intensite/voisine2.png", "d5a9d7408268a5bf9585e0f9252aadc9"],
  ["assets/intensite/voisine3.png", "18b790453c2104452a55ad0f5f989c6e"],
  ["assets/interface/ch_share.png", "36be4618e846c8e3ec2a816cb5ca8aae"],
  ["assets/interface/share.png", "e05c6e74f3b5940ac57dd9f0794281a6"],
  ["assets/logo_kataku_transpar.png", "f75b0e59b1717158f1a1cdf74985b41c"],
  ["assets/selecjoueurs.png", "b5cfe0fdfdfde345b0f92345daada493"],
  ["bruit.html", "9ff9d874162e03d14e3146d854f39f03"],
  ["css/normalize.css", "3f2d15ccdd5b9cc08e32def5e3360e7c"],
  ["css/skeleton.css", "ac881776c945ebe36872a8db7d027305"],
  ["db.json", "e4196ae19b0aec3deea5036ae20b37ae"],
  ["dbjsn.txt", "2d60af675b5618b291a270d1c3587d54"],
  ["fonts/GapSansBold.ttf", "ed143a682b2d58b4c9adb6c81c2a08e4"],
  ["images/bouteilles_res1.png", "df8413fff407afbe917cb1ee8bc703ba"],
  ["images/bouteilles_res10.png", "d4fb1db307ba0efebdfad59ea6f55483"],
  ["images/bouteilles_res11.png", "e27f97d848a10265133e1240bddc8fdb"],
  ["images/bouteilles_res12.png", "7e5d8238e82f0630bad652185aa62888"],
  ["images/bouteilles_res13.png", "5154fc203cc27b311a3843ade4501565"],
  ["images/bouteilles_res14.png", "0d2f96f760b5ef60d2275729353f1ff9"],
  ["images/bouteilles_res15.png", "da5c004866a78699100fa0e44307b698"],
  ["images/bouteilles_res16.png", "41613cfbdff5a30cf67175e4202e03c4"],
  ["images/bouteilles_res17.png", "eda4b8e63d8ec2bd5ccc15ba37e02694"],
  ["images/bouteilles_res18.png", "e0efb81b5a8d6a2f180f2108af9bad3f"],
  ["images/bouteilles_res19.png", "2458dbe9c3355d675981d2310471ebc2"],
  ["images/bouteilles_res2.png", "79fc09cbbd0089a21bd5e12322bf3965"],
  ["images/bouteilles_res20.png", "da9f4f94657aa80767af50b9ff7b7063"],
  ["images/bouteilles_res21.png", "2e077a1c03e551413812d3f9bf711ae9"],
  ["images/bouteilles_res22.png", "ab71df2e1eab2194185c32d5eb95c35b"],
  ["images/bouteilles_res23.png", "24c813cfdc0a9fdf7111d48d2b1f6f9b"],
  ["images/bouteilles_res24.png", "cdeced32d5864e7ef1c69d5c83a86d91"],
  ["images/bouteilles_res3.png", "fd4e1440dc7833ce27dcbd16831faa8d"],
  ["images/bouteilles_res4.png", "39ce225d047a22060a41b6cedf9392dc"],
  ["images/bouteilles_res5.png", "4fe6dbe284f35377305186f5acc753ac"],
  ["images/bouteilles_res6.png", "f65edcbecffd123018bfdafa3ed6e306"],
  ["images/bouteilles_res7.png", "fbbe490b774f6119f62bd89ababdca79"],
  ["images/bouteilles_res8.png", "3537d6ae64474a67ff96c1f928622811"],
  ["images/bouteilles_res9.png", "6a6313ab29a40e539ffb9c4d4ee56522"],
  ["images/brainlet.jpg", "8acf17664a125ee01aed5ba643eb128d"],
  ["images/favicon.png", "34dd06f1c076b26e7e9bd6808a0e4528"],
  ["images/logo_kataku_transpar.png", "1b0e4a48acb29b069ba218e2e8016084"],
  ["jeu.html", "ad1348b6dc118a6211bfd7c1baf216ec"],
  ["js/img.js", "4bb3bb57e5eb0ddbd895690f56eb8230"],
  ["js/ktk.js", "fd6ce7dc7627289f0abc5001205ee0b7"],
  ["js/volume-meter.js", "9858598779dfe0eee16ecc288f5edcc6"],
  ["manifest.json", "cd414c95f59af51223cb2b6b3edc5df3"],
  ["slider.html", "1cde561fc5fa45816407ff9c55861b2e"],
  ["sw.js", "ab8e84aeb225ad5a2310b6a56d2d2820"]
];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');
var ignoreUrlParametersMatching = [/^utm_/];
var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {
                credentials: 'same-origin'
              });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    var shouldRespond;
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    var navigateFallback = '';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});