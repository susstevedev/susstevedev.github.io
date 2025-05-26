let user_page;
let user_name = 'sse2cpu';

function fetch_user_page(user_name) {
  if (!user_page) {
    user_page = fetch(`https://corsproxy.io/?url=https://mecabricks.weetpix.com/en/user/${user_name}`)
      .then(response => response.text());
  }
  return user_page;
}

function update_name() {
  fetch_user_page(user_name).then(user_page => {
    document.querySelector('#username-content').innerText = user_name;
  });
}

function fetch_models() {
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

function fetch_bio() {
   fetch_user_page(user_name).then(user_page => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(user_page, 'text/html');
      const bio = doc.querySelector('#card-about') ? doc.querySelector('#card-about') : null;
    
      if (bio) {
         document.querySelector('.bio').innerText = bio.innerText;
      }
   });
}

function fetch_pfp() {
  fetch_user_page(user_name).then(user_page => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(user_page, 'text/html');
    const url = doc.querySelector('#card-avatar').style.backgroundImage.slice(5, -2) ? doc.querySelector('#card-avatar').style.backgroundImage : null;

    if(url) {
      document.querySelector('.twitter-pfp').style.backgroundImage = url;
    }
  });
}

  fetch_pfp();
  fetch_bio();
  fetch_models();
  update_name();
