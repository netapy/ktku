let cacheName = 'ktkache';


const staticAssets = [
    'index.html',
    'slider.html',
    'jeu.html',
    'css/normalize.css',
    'css/skeleton.css',
    'js/img.js',
    'js/ktk.js',
    '/',
    'assets/img_cartes/virus.png',
    'assets/img_cartes/point.png',
    'assets/img_cartes/fighter.png',
    'assets/img_cartes/remplissagefosse.png',
    'assets/img_cartes/antidote.png',
    'assets/img_cartes/fossecreuse.png',
    'assets/img_cartes/vote.png',
    'assets/img_cartes/zodiac.png',
    'assets/img_cartes/sanction.png',
    'assets/img_cartes/lion.png',
    'assets/img_cartes/path.png',
    'assets/img_cartes/girl.png',
    'assets/img_cartes/embryo.png',
    'assets/img_cartes/fosseboire.png',
    'assets/img_cartes/meduse.png',
    'assets/img_cartes/virus2.png',
    'assets/img_cartes/antidote2.png',
    'assets/img_cartes/oneangel.png',
    'assets/img_cartes/threeangels.png',
    'assets/img_cartes/alumette.png',
    'assets/img_cartes/debordement.png',
    'assets/img_cartes/eclate.png',
    'assets/img_cartes/duelfight.png',
    'assets/img_cartes/bowling.png',
    'assets/img_cartes/game.png',
    'assets/img_cartes/hidepng.png',
    'assets/img_cartes/storm.png',
    'assets/img_cartes/mouth.png',
    'assets/img_cartes/chance.png',
    'assets/img_cartes/collectif.png',
    'assets/img_cartes/solo_working.png',
    'assets/img_cartes/solo_kneel.png',
    'assets/img_cartes/larva.png',
    'assets/img_cartes/draw.png',
    'assets/img_cartes/math_flower.png',
    'assets/img_cartes/pop_bottle.png',
    'assets/img_cartes/tooth.png',
    'assets/img_cartes/fire.png',
    'assets/img_cartes/city.png',
    'assets/img_cartes/dummy.png',
    'assets/img_cartes/satanic.png',
    'assets/img_cartes/man_in_bottle.png',
    'assets/img_cartes/totem.png',
    'assets/img_cartes/soupeserve.png',
    'assets/img_cartes/sabre.png',
    'assets/img_cartes/musique.png',
    'assets/img_cartes/demolition.png',
    'assets/img_cartes/question.png',
    'assets/img_cartes/plantt.png',
    'assets/img_cartes/analyze.png',
    'assets/img_cartes/paptoilet.png',
    'assets/img_cartes/roots.png',
    'assets/img_cartes/GOAT.png',
    'assets/img_cartes/dynamite.png',
    'assets/img_cartes/drawsmiley.png',
    'assets/img_cartes/portal.png',
    'assets/img_cartes/bubbles.png',
    'assets/img_cartes/cerveau.png',
    'assets/img_cartes/coeurbris.png',
    'assets/img_cartes/implosing.png',
    'assets/img_cartes/maman.png',
    'assets/img_cartes/pharma.png',
    'assets/img_cartes/7peches.png',
    'assets/img_cartes/bottle_medit.png',
    'assets/img_cartes/passe.png',
    'assets/img_cartes/present.png',
    'assets/img_cartes/futur.png',
    'assets/intensite/bouteille1.png',
    'assets/intensite/bouteille2.png',
    'assets/intensite/bouteille3.png',
    'assets/intensite/bouteille4.png',
    'assets/intensite/bouteille5.png',
    'assets/intensite/bouteille6.png',
    'assets/intensite/bouteille7.png',
    'assets/intensite/bouteille8.png',
    'assets/intensite/bouteille9.png',
    'assets/intensite/bouteille10.png',
    'assets/intensite/bouteille11.png',
    'assets/intensite/bouteille12.png',
    'assets/intensite/bouteille13.png',
    'assets/intensite/bouteille14.png',
    'assets/intensite/bouteille15.png',
    'assets/intensite/bouteille16.png',
    'assets/intensite/bouteille17.png',
    'assets/intensite/bouteille18.png',
    'assets/intensite/bouteille19.png',
    'assets/intensite/bouteille20.png',
    'assets/intensite/bouteille21.png',
    'assets/intensite/bouteille22.png',
    'assets/intensite/bouteille23.png',
    'assets/intensite/bouteille24.png'
]


self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});


self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);
    if (navigator.onLine) {
        e.respondWith(networkAndCache(req));
    } else {
        e.respondWith(cacheFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}
async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}