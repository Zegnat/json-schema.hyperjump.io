!function(){"use strict";const e=["client/client.774f5332.js","client/client.81333325.js","client/index.9f35b51c.js"].concat(["service-worker-index.html","favicon.ico","global.css","manifest.json","solarized-dark.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1592540283692").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1592540283692"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1592540283692").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
