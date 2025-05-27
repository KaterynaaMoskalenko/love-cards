import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuizSEO = ({ quizData }) => {
  if (!quizData) return null;

  // Generate SEO-optimized title and description
  const pageTitle = `${quizData.title} | Two of Us Cards - Relationship Quiz`;
  const pageDescription = quizData.description || 
    `Discover insights about your relationship with our ${quizData.title.toLowerCase()}. Take this free quiz to better understand yourself and strengthen your connection with your partner.`;

  // Generate canonical URL based on quiz ID (actual location on subdomain)
  const canonicalUrl = `https://app.twoofuscards.com/quiz/${quizData.id || quizData.title.toLowerCase().replace(/\s+/g, '-')}`;

  // Generate keywords based on quiz content
  const generateKeywords = () => {
    const baseKeywords = ['relationship quiz', 'love quiz', 'couples quiz', 'relationship test'];
    const quizKeywords = [];
    
    if (quizData.title.toLowerCase().includes('love language')) {
      quizKeywords.push('love language test', 'love language quiz', 'five love languages', 'how to show love');
    }
    if (quizData.title.toLowerCase().includes('attachment')) {
      quizKeywords.push('attachment style test', 'attachment theory quiz', 'secure attachment', 'relationship patterns');
    }
    if (quizData.title.toLowerCase().includes('emotional intelligence')) {
      quizKeywords.push('emotional intelligence test', 'EQ quiz', 'relationship skills', 'emotional awareness');
    }
    if (quizData.title.toLowerCase().includes('conflict')) {
      quizKeywords.push('conflict resolution quiz', 'relationship communication', 'fighting styles', 'relationship conflict');
    }
    
    return [...baseKeywords, ...quizKeywords].join(', ');
  };

  // Generate structured data for search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": quizData.title,
    "description": pageDescription,
    "author": {
      "@type": "Organization",
      "name": "Two of Us Cards",
      "url": "https://twoofuscards.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Two of Us Cards",
      "url": "https://twoofuscards.com"
    },
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/TakeAction",
      "name": "Quiz Takes"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={generateKeywords()} />
      <meta name="author" content="Two of Us Cards" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://twoofuscards.com/social-preview-quiz.png" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Two of Us Cards" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://twoofuscards.com/social-preview-quiz.png" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ff6b6b" />
      <meta name="application-name" content="Two of Us Cards" />
      <meta name="apple-mobile-web-app-title" content="Two of Us Cards" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default QuizSEO; 