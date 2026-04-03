const fs = require('fs');

try {
  const blogs1 = JSON.parse(fs.readFileSync('src/data/blogs.json', 'utf8'));
  const blogs2 = JSON.parse(fs.readFileSync('src/data/blogs_2.json', 'utf8'));
  const blogs3 = JSON.parse(fs.readFileSync('src/data/blogs_3.json', 'utf8'));

  const allBlogs = [...blogs1, ...blogs2, ...blogs3];

  fs.writeFileSync('src/data/blogs.json', JSON.stringify(allBlogs, null, 2));
  console.log(`Successfully merged ${allBlogs.length} blogs into blogs.json`);
  
  // Cleanup temporary files
  fs.unlinkSync('src/data/blogs_2.json');
  fs.unlinkSync('src/data/blogs_3.json');
} catch (e) {
  console.error("Error merging files: ", e);
}
