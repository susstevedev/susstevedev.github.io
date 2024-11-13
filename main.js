   
        document.addEventListener("DOMContentLoaded", function() {
          $(document).ready(function() {
            function load(url) {
                document.title = "";
                $("body").load(url, function(event) {
                     nav();
                    window.scrollTo(0, 0);
                    history.pushState(null, "", url);
                    document.title = $('title').text();
                });
            }
    
            $(document).on('click', 'a', function(event) {
                var url = $(this).attr("href");
                if (!url || url.match("^http")) {
                  document.title = "";
                  document.title = $('title').text();
                  return;
                }
                event.preventDefault();
                load(url);
            });


        		window.addEventListener("popstate", function() {
                  load(location.pathname + location.search);
        		});
          });
         });
function nav() {
      document.write("<style> .twitter-pfp { width: 100px;height: 100px;border-radius: 50%;background-repeat: no-repeat;background-size: cover;background-image: url('https://pbs.twimg.com/profile_images/1856461944900694016/ZeqnUDy6_400x400.jpg'); } </style>");  

      document.write('<nav class="navbar" role="navigation" aria-label="main navigation"><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a href="/" class="navbar-item is-rounded">&nbsp;Home&nbsp;</a><a href="/about" class="navbar-item is-rounded">&nbsp;About&nbsp;</a><a href="/projects/" class="navbar-item is-rounded">Projects</a><a href="https://twitter.com/Evan85908317" target="_blank" class="navbar-item has-background-primary has-text-black is-rounded">&nbsp;Twitter&nbsp;</a><a href="http://www.gr8brik.rf.gd/@Admin" target="_blank" class="navbar-item has-background-primary has-text-black is-rounded">&nbsp;GR8BRIK&nbsp;</a></div></div></nav>');
}
