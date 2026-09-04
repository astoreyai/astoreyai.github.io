self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter(
            (name) =>
              name.startsWith('workbox-precache') &&
              name.includes(self.registration.scope),
          )
          .map((name) => caches.delete(name)),
      );
      await self.registration.unregister();
      const clients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });
      for (const client of clients) {
        const path = new URL(client.url).pathname;
        if (
          client.url.startsWith(self.registration.scope) &&
          [
            '/',
            '/research/',
            '/publications/',
            '/experience/',
            '/cv/',
          ].includes(path)
        ) {
          await client.navigate(client.url);
        }
      }
    })(),
  );
});
