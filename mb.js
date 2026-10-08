//this is legayc code that would've fetched some data from my mecabricks account
//i still have it here because i might want to use it again for something else someday
(function() {
  let search_params;
  let user_page;    
  let user_name;

  let dos = {
    bio: false,
    models: false,
  };
  
  user_name = window.user_name;

  function fetch_user_page(user_name) {
    if (!user_page) {
      user_page = fetch(`https://corsproxy.io/?url=https://mecabricks.weetpix.com/en/user/${user_name}`)
        .then(response => response.text());
    }
    return user_page;
  }
  
  function fetch_model() {
    if(dos.models) {
      fetch_user_page(user_name).then(user_page => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(user_page, 'text/html');
        const first = doc.querySelector('.gallery-item a') ? doc.querySelector('.gallery-item a').href : null;
          
        if (first) {
          const embed = document.createElement('iframe');
          embed.src = `https://mecabricks.weetpix.com/${navigator.language.split("-")[0]}/player/${first.split('/').pop()}`;
          embed.width = '640';
          embed.height = '480';
          document.querySelector('.embed').appendChild(embed);
        }
      });
    }
  }
  
  function fetch_bio() {
    if(dos.bio) {
     fetch_user_page(user_name).then(user_page => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(user_page, 'text/html');
        const bio = doc.querySelector('#card-about') ? doc.querySelector('#card-about') : null;
      
        if (bio) {
          document.querySelector('.bio').innerText = bio.innerText;
        }
     });
    }
  }
  
    fetch_bio();
    fetch_model();
})();
