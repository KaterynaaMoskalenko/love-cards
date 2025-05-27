const fs = require('fs');
const path = require('path');

const baseUrl = 'https://app.twoofuscards.com';
const currentDate = new Date().toISOString().split('T')[0];

// Define quiz data directly (since we can't easily import ES modules in Node.js script)
const quizRegistry = {
  "attachment-style": {
    id: "attachment-style",
    title: "What is your attachment style?",
    description: "Discover how you form and maintain relationships.",
    icon: "💝",
    category: "Relationship",
    questions: 12,
    estimatedTime: "5-10 mins"
  },
  "conflict-resolution": {
    id: "conflict-resolution",
    title: "Relationship Conflict Resolution Style",
    description: "Discover how you and your partner handle conflicts in your relationship",
    icon: "🤝",
    category: "Relationship",
    questions: 14,
    estimatedTime: "10-15 mins"
  },
  "love-language": {
    id: "love-language",
    title: "What is your love language?",
    description: "Discover how you prefer to give and receive love in relationships.",
    icon: "💌",
    category: "Relationship",
    questions: 10,
    estimatedTime: "5-10 mins"
  },
  "emotional-intelligence": {
    id: "emotional-intelligence",
    title: "Emotional Intelligence in Relationships",
    description: "Discover how well you understand and manage emotions in your relationship",
    icon: "🧠",
    category: "Relationship",
    questions: 20,
    estimatedTime: "10-15 mins"
  }
};

// Define all your pages
const staticPages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'monthly'
  },
  {
    url: '/quizzes',
    priority: '0.9',
    changefreq: 'weekly'
  }
];

// Generate quiz pages from registry
const quizPages = Object.values(quizRegistry).map(quiz => ({
  url: `/quiz/${quiz.id}`,
  priority: '0.8',
  changefreq: 'monthly'
}));

// Combine all pages
const allPages = [...staticPages, ...quizPages];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Write sitemap to public folder
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully!');
console.log(`📁 Saved to: ${sitemapPath}`);
console.log(`🌍 Your sitemap will be available at: ${baseUrl}/sitemap.xml`);
console.log('\nPages included:');
allPages.forEach(page => {
  console.log(`  ${baseUrl}${page.url}`);
}); 