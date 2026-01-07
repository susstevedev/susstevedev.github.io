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
               loadNav();
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
          loadNav();
      });
   });
})();

let current_bio_b64 = "SGkgSSdtIDE0IChoZS9oaW0sIGJpc2V4dWFsKSBhbmQgZG8gd2ViIGRldmVsb3BtZW50IGFuZCBMZWdvIHN0dWZmLiBBbHNvIENocmlzdGlhbi4gQ3JlYXRvciBvZiBHcjhCcmlrLiAiQm9vbSBzc2UyY3B1IGlzIHRoZSBjaGFvdGljIG5ldXRyYWwgb2YgdGhlIHNpdGUiIC0gIEBDYW5keWNvcm5sb3JkIERlY2VtYmVyIDIybmQsIDIwMjUgMzowMyBQTSBDU1Q=";
