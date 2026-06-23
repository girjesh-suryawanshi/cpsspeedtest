const https = require('https');

https.get('https://www.manalitheboss.com/assets/index-BwXgveE2.css', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const fontFamilies = data.match(/font-family:([^;}]+)/g);
    if (fontFamilies) {
      // Get unique font families
      const uniqueFonts = [...new Set(fontFamilies)];
      console.log("Unique Fonts:", uniqueFonts);
    }
  });
});
