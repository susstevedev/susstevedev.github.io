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

//base64 encoded version of my old bio
let legacy_bio = "SGkgSSBkbyB3ZWIgZGV2ZWxvcG1lbnQuIEkgYWxzbyBsaWtlIExlZ28uIEplc3VzIGFuZCAob2xkIGVyYSkgS2FueWUgZ2xhemllci4gMTMgeWVhcnMgb2YgYWdlLCBhbHNvIGJpc2V4dWFsLiBMaWJlcmFsLg==";
