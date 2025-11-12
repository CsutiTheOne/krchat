const cacheName = "v1";

async function impl(e) {
    let cache = await caches.open(cacheName); // Cache megnyitása, async
    let cacheResponse = await cache.match(e.request); // Lookup
    if (cacheResponse) // Ha megvan
        return cacheResponse // Visszadjuk
    else {
        let networkResponse = await fetch(e.request); // Ha nincs meg, akkor elindítjuk a tényleges hálózati lekérdezést
        cache.put(e.request, networkResponse.clone()) // Eltároljuk
        return networkResponse; // Visszadjuk
    }
}

async function showNotification(e) {
    Notification.requestPermission().then((result) => {
        if (result === "granted") {
            navigator.serviceWorker.ready.then((registration) => {
                console.log("Notifiction clicked");
                e.waitUntil( self.registration.showNotification("Chat Notification", {"body": e.data?.text()}));
            })
        }
    });
}

self.addEventListener("fetch", e => e.respondWith(impl(e))); // Eseményre feliratkozás

self.addEventListener( "notificationclick",  e => e.respondWith(showNotification(e)) );