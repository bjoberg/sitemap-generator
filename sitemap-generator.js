const SitemapGenerator = require('sitemap-generator');
const path = require('path');
const args = process.argv;

try {
  const generator = SitemapGenerator(args[2], {
    crawlerMaxDepth: 1000,
    filepath: path.join(__dirname, 'sitemap.xml'),
    maxEntriesPerFile: 50000,
    stripQuerystring: true
  });
  
  generator.on('add', (url) => {
    console.log("Added: " + url);
  });
  
  generator.on('done', () => {
    console.log("Successfully created sitemap");
  });
  
  generator.on('error', (error) => {
    console.log(error);
  });
  
  generator.start();
} catch (error) {
  console.log(error);
}