fetch('https://mecabricks.weetpix.com/en/user/sse2cpu')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const first = doc.querySelector('.gallery-item a') ? doc.querySelector('.gallery-item a').href : null;
  
    if (first) {
      const embed = document.createElement('iframe');
      embed.src = first;
      embed.width = "600";
      embed.height = "400";
      embed.style.border = "none";
      document.body.appendChild(embed);
    }
  });
