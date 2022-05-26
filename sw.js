// const staticCacheName = 's-app-v1'

// const assetUrls = [
// 	'index.html',
// 	'/js/app.js',
// 	'/js/app.min.js',
// 	'/css/style.css',
// 	'/css/style.min.css',
// ]


// self.addEventListener('install', async event => {
// 	const cache = await caches.open(staticCacheName)
// 	await cache.addAll(assetUrls)
// })

// self.addEventListener('activate', (event) => {
// 	console.log('[SW]: activate')
// })

// self.addEventListener('fetch', event => {
// 	console.log('Fetch', event.request.url)

// 	event.respondWith(cacheFirst(event.request))
// })


// async function cacheFirst(request) {
// 	console.log(caches.match(request))
// }

self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker.....',event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetch initiated.....',event);
  event.respondWith(fetch(event.request));
});
