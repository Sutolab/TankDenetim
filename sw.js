// Service worker — uygulama kabuğunu önbelleğe alır; uygulama tamamen offline çalışır.
// Sürüm ve dosya listesi derlemede build/sw-manifest.js tarafından doldurulur.
// Geliştirme sunucusunda kaydedilmez (src/main.js).

const VERSION = '0c751635153a';
const PRECACHE = ["./", "assets/index-BocoE3Y3.js", "assets/index-CdmWok-e.css", "assets/pdf-BHx8b9rl.js", "assets/pdf.worker.min-CjEcRF4W.mjs", "assets/pdf.worker.min-DI4FfYVf.js", "fonts/IBMPlexMono-Bold.woff2", "fonts/IBMPlexMono-Medium.woff2", "fonts/IBMPlexMono-Regular.woff2", "fonts/IBMPlexMono-SemiBold.woff2", "fonts/IBMPlexSans-Bold.woff2", "fonts/IBMPlexSans-Medium.woff2", "fonts/IBMPlexSans-Regular.woff2", "fonts/IBMPlexSans-SemiBold.woff2", "fonts/OFL-IBM-Plex.txt", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "index.html", "manifest.webmanifest"];
const CACHE = `yama-${VERSION}`;

self.addEventListener('install', (event) => {
  // Yeni sürüm beklemede kalır; kullanıcı "Yenile" deyince devreye girer.
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith('yama-') && k !== CACHE).map((k) => caches.delete(k)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  // ignoreVary: sunucunun "Vary: Origin / Accept-Encoding" başlığı, crossorigin modül
  // isteklerinin önbellekle eşleşmesini engellemesin (önbellektekiler değişmeyen dosyalar).
  event.respondWith(
    caches.match(request, { ignoreVary: true, ignoreSearch: request.mode === 'navigate' }).then(
      (cached) => cached || fetch(request).catch(() => {
        if (request.mode === 'navigate') return caches.match('./');
        return Response.error();
      }),
    ),
  );
});
