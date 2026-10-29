var C='counter-v1',F=['counter.html','ml/ort.wasm.min.js','ml/ort-wasm-simd-threaded.wasm','ml/ort-wasm-simd-threaded.mjs','ml/fruit-yolov10s-fp16.onnx'];
self.addEventListener('install',function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).catch(function(){}))});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(e.request.method!=='GET'||!(/\/counter\.html$|\/ml\//.test(u.pathname)))return;
if(/counter\.html$/.test(u.pathname)){e.respondWith(fetch(e.request).then(function(r){var k=r.clone();caches.open(C).then(function(c){c.put(e.request,k)});return r}).catch(function(){return caches.match(e.request)}));return;}
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request).then(function(n){var k=n.clone();caches.open(C).then(function(c){c.put(e.request,k)});return n})}))});
