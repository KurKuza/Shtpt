const staticCacheName = 's-app-v1'

const assetUrls = [
	'index.html',
	'/js/app.js',
	'/css/style.css',
]


self.addEventListener('install', async event => {
	const cache = await caches.open(staticCacheName)
	await cache.addAll(assetUrls)
})

self.addEventListener('activate', (event) => {
	console.log('[SW]: activate')
})

self.addEventListener('fetch', event => {
	console.log('Fetch', event.request.url)

	event.respondWith(cacheFirst(event.request))
})


async function cacheFirst(request) {
	console.log(caches.match(request))
}