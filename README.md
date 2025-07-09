# FreedomPress Starter Template

A complete, production-ready starter template for building secure, modern websites with Next.js. This template includes blog and ecommerce functionality built on the FreedomPress framework.

## 🚀 Quick Start

```bash
# Clone the template
git clone https://github.com/freedompress/starter my-website
cd my-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up the database
npm run db:push
npm run db:seed

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your new FreedomPress site!

## ✨ What's Included

### 🔒 **Security-First Architecture**
- Enterprise-grade authentication with NextAuth.js
- Role-based access control (Admin, Moderator, User)
- Comprehensive audit logging
- Input sanitization and validation
- Rate limiting and DDoS protection
- Security headers and CSRF protection

### 📝 **Complete Blog System**
- Rich text editor with markdown support
- Category and tag management
- SEO optimization with meta tags and structured data
- RSS feeds and XML sitemaps
- Reading time calculation
- Related posts and social sharing

### 🛍️ **Full Ecommerce Platform**
- Product catalog with variants and categories
- Shopping cart with localStorage persistence
- Secure checkout with Stripe integration
- Order management and tracking
- Inventory management
- Customer accounts and order history

### 🎨 **Professional Design System**
- Responsive design with Tailwind CSS
- Accessible components following WCAG guidelines
- Dark mode support
- Custom fonts and typography
- Loading states and error boundaries

### 🛠️ **Developer Experience**
- TypeScript-first development
- Comprehensive CLI tools
- Hot reload and fast refresh
- Built-in testing framework
- Code formatting with Prettier
- Linting with ESLint

## 📁 Project Structure

```
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── blog/          # Blog pages
│   ├── shop/          # Shop pages
│   └── admin/         # Admin dashboard
├── src/
│   ├── components/    # Reusable components
│   ├── lib/          # Core framework libraries
│   ├── types/        # TypeScript definitions
│   └── utils/        # Utility functions
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── styles/           # Global styles
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="file:./dev.db"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GITHUB_ID="your-github-id"
```

### Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with initial data
npm run db:seed
```

### Default Credentials

After seeding, you can log in with:
- **Admin**: admin@example.com / admin123
- **Demo**: demo@example.com / demo123

⚠️ **Change these credentials in production!**

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/freedompress/starter)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t my-freedompress-site .

# Run container
docker run -p 3000:3000 my-freedompress-site
```

### Traditional Hosting

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📚 Documentation

### Getting Started
- [Installation Guide](./docs/installation.md)
- [Configuration](./docs/configuration.md)
- [First Steps](./docs/getting-started.md)

### Features
- [Blog Management](./docs/blog.md)
- [Shop Setup](./docs/shop.md)
- [User Management](./docs/users.md)
- [Security Features](./docs/security.md)

### Customization
- [Theming Guide](./docs/theming.md)
- [Custom Components](./docs/components.md)
- [API Extension](./docs/api.md)

### Deployment
- [Production Setup](./docs/deployment.md)
- [Environment Configuration](./docs/environment.md)
- [Performance Optimization](./docs/performance.md)

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:generate     # Generate Prisma client
npm run db:migrate      # Run migrations
npm run db:push         # Push schema to DB
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio
npm run db:reset        # Reset database

# Testing
npm run test            # Run tests
npm run test:watch      # Run tests in watch mode

# FreedomPress CLI
npm run freedompress    # Access FreedomPress CLI
```

## 🎨 Customization

### Theming

Edit `tailwind.config.js` to customize colors, fonts, and spacing:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### Adding Content

1. **Blog Posts**: Use the admin interface at `/admin/posts`
2. **Products**: Manage products at `/admin/products`
3. **Pages**: Create new pages in the `pages/` directory
4. **Components**: Add reusable components in `src/components/`

### Custom Modules

Create custom functionality by adding modules to the `src/modules/` directory. See the [Module Development Guide](./docs/modules.md) for details.

## 🔐 Security

This template includes enterprise-grade security features:

- **Authentication**: Secure user sessions with NextAuth.js
- **Authorization**: Role-based access control
- **Input Validation**: Comprehensive data validation
- **Rate Limiting**: Protection against abuse
- **Audit Logging**: Complete action tracking
- **Security Headers**: CSRF, XSS, and clickjacking protection

## 📊 Performance

Optimized for speed and scalability:

- **Static Generation**: Pre-rendered pages for instant loading
- **Image Optimization**: Automatic image compression and lazy loading
- **Bundle Optimization**: Code splitting and tree shaking
- **Caching**: Intelligent caching strategies
- **Database Optimization**: Efficient queries and indexing

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://docs.freedompress.dev)
- 💬 [Discord Community](https://discord.gg/freedompress)
- 🐛 [Issue Tracker](https://github.com/freedompress/starter/issues)
- 📧 [Email Support](mailto:support@freedompress.dev)

## 🙏 Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Prisma](https://prisma.io/) - Database ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Stripe](https://stripe.com/) - Payment processing

---

**FreedomPress Starter** - Get your website up and running in minutes, not hours.