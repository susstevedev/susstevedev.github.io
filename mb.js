fetch('https://corsproxy.io/?url=https://mecabricks.weetpix.com/en/user/sse2cpu')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const first = doc.querySelector('.gallery-item a') ? doc.querySelector('.gallery-item a').href : null;
  
    if (first) {
      const embed = document.createElement('iframe');
      embed.src = `https://mecabricks.weetpix.com/${navigator.language.split("-")[0]}/player/${first.split('/').pop()}`;
      embed.width = '640';
      embed.height = '480';
      document.querySelector('.embed').appendChild(embed);
    }
  });
