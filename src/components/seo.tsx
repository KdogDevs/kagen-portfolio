import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteMetadata, projects, education, employment } from '../data/content';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title = siteMetadata.title,
  description = siteMetadata.description,
  image = siteMetadata.socialImage,
  url = siteMetadata.siteUrl,
  type = 'website',
  keywords = siteMetadata.keywords
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${siteMetadata.siteUrl}${url}`;

  // Generate structured data for person/professional profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kagen Jensen",
    "alternateName": ["Kagen", "Kagen Jensen"],
    "jobTitle": "Electrical Engineering Student & AI Solutions Architect",
    "description": description,
    "url": siteMetadata.siteUrl,
    "image": fullImageUrl,
    "sameAs": [
      "https://github.com/kdogdevs",
      "mailto:kagen@kagen.dev"
    ],
    "knowsAbout": [
      "Electrical Engineering",
      "AI Solutions",
      "Network Architecture", 
      "System Design",
      "Web Development",
      "Air Force ROTC",
      "Technology Innovation",
      "React",
      "JavaScript",
      "Node.js",
      "System Architecture"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Saint Pius X Catholic High School"
      }
    ],
    "affiliation": [
      {
        "@type": "Organization",
        "name": "University of Alabama"
      },
      {
        "@type": "Organization",
        "name": "Air Force ROTC"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Shift 2 Stream",
      "url": "https://www.shift2stream.com"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Science in Electrical Engineering",
        "educationalLevel": "Undergraduate",
        "credentialCategory": "degree"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kagen Jensen Portfolio",
    "alternateName": ["Kagen Portfolio", "Kagen Jensen Developer Portfolio"],
    "url": siteMetadata.siteUrl,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Kagen Jensen"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteMetadata.siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Generate structured data for projects/portfolio
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Kagen Jensen Portfolio",
    "creator": {
      "@type": "Person",
      "name": "Kagen Jensen"
    },
    "url": siteMetadata.siteUrl,
    "description": "Professional portfolio showcasing software development projects and technical skills",
    "hasPart": projects.map(project => ({
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "url": project.demoLink,
      "codeRepository": project.githubLink,
      "programmingLanguage": project.technologies,
      "creator": {
        "@type": "Person",
        "name": "Kagen Jensen"
      }
    }))
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={siteMetadata.author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Kagen Jensen - Electrical Engineering Student & AI Solutions Architect" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Kagen Jensen Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Kagen Jensen Portfolio" />
      <meta name="twitter:site" content="@KagenJensen" />
      <meta name="twitter:creator" content="@KagenJensen" />

      {/* Additional Meta Tags for Search */}
      <meta name="geo.region" content="US-AL" />
      <meta name="geo.placename" content="Alabama" />
      <meta name="geo.position" content="32.377716;-86.300568" />
      <meta name="ICBM" content="32.377716, -86.300568" />
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="Kagen Jensen" />
      <meta name="DC.subject" content="Electrical Engineering, AI Solutions, Portfolio, Web Development" />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="Kagen Jensen" />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en" />

      {/* LinkedIn specific meta tags */}
      <meta property="profile:first_name" content="Kagen" />
      <meta property="profile:last_name" content="Jensen" />
      <meta property="profile:username" content="kagen-jensen" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioStructuredData)}
      </script>
    </Helmet>
  );
};