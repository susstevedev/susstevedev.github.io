let user_page;

function fetch_user_page(username) {
  if (!user_page) {
    user_page = fetch(`https://corsproxy.io/?url=https://mecabricks.weetpix.com/en/user/${username}`)
      .then(response => response.text());
  }
  return user_page;
}

function fetch_models(username) {
  //fetch_user_page(username).then(html => {
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
  //});
}

function fetch_bio(username) {
   //fetch_user_page(username).then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(user_page, 'text/html');
      const bio = doc.querySelector('#card-about') ? doc.querySelector('#card-about') : null;
    
      if (bio) {
         document.querySelector('.bio').innerText = bio.innerText;
      }
   //});
}

function fetch_pfp(username) {
  //fetch_user_page(username).then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(user_page, 'text/html');
    const url = doc.querySelector('#card-avatar').style.backgroundImage.slice(5, -2) ? doc.querySelector('#card-avatar').style.backgroundImage : null;

    if(url) {
      document.querySelector('.twitter-pfp').style.backgroundImage = url;
    }
  //});
}

fetch_user_page(username).then(user_page => {
  fetch_pfp('sse2cpu');
  fetch_bio('sse2cpu');
  fetch_models('sse2cpu');
});
