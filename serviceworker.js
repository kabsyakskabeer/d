self.addEventListener("fetch", function(event) {
    console.log("Fetch request for:", event.request.url);
    });

    self.addEventListener("install", function(event) {
        event.waitUntil(
        caches.open("gih-cache").then(function(cache) {
       // return cache.add("/index-offline.html");
            console.log('installing');
        })
        );
        });