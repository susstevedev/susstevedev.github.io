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

let bio_legacy = "SGkgSSBkbyB3ZWIgZGV2ZWxvcG1lbnQuIEkgYWxzbyBsaWtlIExlZ28uIEplc3VzIGFuZCAob2xkIGVyYSkgS2FueWUgZ2xhemllci4gQWxzbyBJJ20gYmlzZXh1YWw=";
