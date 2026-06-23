const https = require('https');

https.get('https://www.manalitheboss.com/blog/7-signs-your-website-is-killing-your-credibility', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // extract Google Fonts
    const fonts = data.match(/href="https:\/\/fonts\.googleapis\.com[^"]+"/g);
    console.log("Fonts Links:", fonts);
    
    // extract style tags
    const styles = data.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styles) {
      styles.forEach(s => {
        const fontFamilies = s.match(/font-family:[^;}]+/g);
        if (fontFamilies) {
          console.log("CSS Font Families:", fontFamilies.slice(0, 5));
        }
      });
    }

    // extract some specific class names around the blog content to guess typography
    // usually blog posts have a container like "prose" or "entry-content"
    const classMatch = data.match(/class="([^"]*prose[^"]*|[^"]*content[^"]*)"/g);
    console.log("Content Classes:", classMatch ? classMatch.slice(0, 5) : null);
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
