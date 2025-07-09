export const siteConfig = {
  name: process.env.SITE_NAME || 'FreedomPress Site',
  description: process.env.SITE_DESCRIPTION || 'A modern content management system',
  url: process.env.SITE_URL || 'http://localhost:3000',
  
  // Theme configuration
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#6b7280',
      accent: '#8b5cf6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    fonts: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace']
    },
    spacing: {
      containerMaxWidth: '1200px',
      sectionPadding: '4rem',
      cardPadding: '2rem'
    }
  },

  // Feature flags
  features: {
    blog: true,
    shop: true,
    comments: false,
    newsletter: false,
    analytics: false,
    search: false
  },

  // Social links
  social: {
    twitter: '',
    linkedin: '',
    github: '',
    facebook: '',
    instagram: ''
  },

  // Contact information
  contact: {
    email: 'hello@example.com',
    phone: '(123) 456-7890',
    address: {
      street: '123 Main Street',
      city: 'City',
      state: 'State',
      zip: '12345',
      country: 'Country'
    }
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | ' + (process.env.SITE_NAME || 'FreedomPress Site'),
    defaultTitle: process.env.SITE_NAME || 'FreedomPress Site',
    defaultDescription: process.env.SITE_DESCRIPTION || 'A modern content management system',
    defaultImage: '/og-image.png',
    twitterHandle: '@yourhandle'
  },

  // Navigation configuration
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Shop', href: '/shop' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    footer: [
      {
        title: 'Company',
        links: [
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' },
          { name: 'Privacy', href: '/privacy' },
          { name: 'Terms', href: '/terms' }
        ]
      },
      {
        title: 'Products',
        links: [
          { name: 'Shop', href: '/shop' },
          { name: 'Blog', href: '/blog' }
        ]
      },
      {
        title: 'Support',
        links: [
          { name: 'Documentation', href: '/docs' },
          { name: 'Help Center', href: '/help' },
          { name: 'Community', href: '/community' }
        ]
      }
    ]
  }
}