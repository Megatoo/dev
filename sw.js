'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["https://boocasino.com","style/style.css"]);

toolbox.router.get('/icons/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
