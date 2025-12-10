(function() {
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
               loadNav();
            });
         });

          function loadNav() {
             var navbar = $('[data-testid="navbar"]');
             if(navbar) {
                navbar.load("/nav.html");
             } else {
                console.error("Navigation bar not found on page!");
             }
          }
      });
   });
})();

let bio_legacy_b64 = "SGkgSSBkbyB3ZWIgZGV2ZWxvcG1lbnQuIEkgYWxzbyBsaWtlIExlZ28uIEplc3VzIGFuZCAob2xkIGVyYSkgS2FueWUgZ2xhemllci4gQWxzbyBJJ20gYmlzZXh1YWw=";
let current_bio_b64 = "SGkgSSdtIDE0IChoZS9oaW0sIGJpKSBhbmQgZG8gd2ViIGRldmVsb3BtZW50IGFuZCBMZWdvIHN0dWZmLiBDaHJpc3RpYW4uIFN1cnZpdm9yIG9mIGxvdHMgb2YgTWVjYWJyaWNrcyBnZW5lcmF0aW9ucy4gTWVtYmVyIG9mIHRoZSBHcjhCcmlrIGFkbWluIGFuZCBkZXZlbG9wbWVudCB0ZWFtLiBJIGhhdmUgdGhlIG1vc3QgZm9ydW0gcG9zdHMuIEFJLCBNQUdBLCBxdWVlcnBob2JpYSwgcDNkbywgaW5jM3N0IGFuZCByQHBlIHN1cHBvcnRlcnMgRE5JLg==";
