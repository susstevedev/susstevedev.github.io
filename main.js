document.addEventListener("DOMContentLoaded", function() {
   $(document).ready(function() {
      $(document).on('click', 'a', function(event) {
         var url = $(this).attr("href");
         if (!url || url.match("^http")) {
            return;
         }
         
         event.preventDefault();
         $("body").load(url, function(event) {
            window.scrollTo(0, 0);
            history.pushState(null, "", url);
         });
      });
      
      
      window.addEventListener("popstate", function() {
         var url = location.pathname + location.search;
         $("body").load(url, function(event) {
            window.scrollTo(0, 0);
            history.pushState(null, "", url);
         });
      });
   });
});

let bio_legacy_b64 = "SGkgSSBkbyB3ZWIgZGV2ZWxvcG1lbnQuIEkgYWxzbyBsaWtlIExlZ28uIEplc3VzIGFuZCAob2xkIGVyYSkgS2FueWUgZ2xhemllci4gQWxzbyBJJ20gYmlzZXh1YWw=";
let current_bio_b64 = "SGkgSSdtIDE0IChoZS9oaW0pIGFuZCBkbyB3ZWIgZGV2ZWxvcG1lbnQgYW5kIExlZ28gc3R1ZmYuIENocmlzdGlhbi4gQmkgYW5kIHZlcnNhdGlsZS4gSSdtIHNlY29uZCB0byBoYXZpbmcgdGhlIG1vc3QgZm9ydW0gcG9zdHMuIEFJLCBNQUdBLCBwM2RvLCBpbmMzc3QgYW5kIHJAcGUgc3VwcG9ydGVycyBETkku";
