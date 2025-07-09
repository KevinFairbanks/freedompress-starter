import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Layout } from '@/components'

interface HomeProps {
  stats: {
    totalPosts: number
    totalProducts: number
    featuredPosts: Array<{
      id: string
      title: string
      excerpt: string
      slug: string
      publishedAt: string
    }>
    featuredProducts: Array<{
      id: string
      name: string
      price: number
      slug: string
      image: string
    }>
  }
}

export default function Home({ stats }: HomeProps) {
  return (
    <Layout 
      title="Welcome to FreedomPress"
      description="A modern, secure content management system built with Next.js"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 rounded-lg mb-12">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to FreedomPress
          </h1>
          <p className="text-xl mb-8 opacity-90">
            A modern, secure, and modular content management system built with Next.js.
            Create beautiful websites with enterprise-grade security and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Blog
            </Link>
            <Link 
              href="/shop" 
              className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FreedomPress?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Security First</h3>
            <p className="text-gray-600">
              Enterprise-grade security with authentication, audit logging, 
              and comprehensive input validation.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-3">Modular Design</h3>
            <p className="text-gray-600">
              Plugin-based architecture allows you to add or remove features 
              as your needs evolve.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Built on Next.js with static generation, image optimization, 
              and performance best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Recent Blog Posts */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </Link>
          </div>
          
          {stats.featuredPosts.length > 0 ? (
            <div className="space-y-4">
              {stats.featuredPosts.map((post) => (
                <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-semibold mb-2">No Posts Yet</h3>
              <p className="text-gray-600 mb-4">
                Start creating content for your blog. Your posts will appear here.
              </p>
              <Link 
                href="/admin/posts/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create First Post
              </Link>
            </div>
          )}
        </section>

        {/* Featured Products */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              href="/shop" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All →
            </Link>
          </div>
          
          {stats.featuredProducts.length > 0 ? (
            <div className="space-y-4">
              {stats.featuredProducts.map((product) => (
                <article key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        <Link 
                          href={`/shop/product/${product.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-blue-600 font-bold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-lg font-semibold mb-2">No Products Yet</h3>
              <p className="text-gray-600 mb-4">
                Add products to your store. Featured items will appear here.
              </p>
              <Link 
                href="/admin/products/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add First Product
              </Link>
            </div>
          )}
        </section>
      </div>

      {/* Stats Section */}
      <section className="mt-16 bg-gray-100 rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats.totalPosts}
            </div>
            <div className="text-gray-600">Blog Posts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats.totalProducts}
            </div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Secure</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1.0</div>
            <div className="text-gray-600">Version</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real implementation, this would fetch from your database
  // For now, we'll return mock data
  
  const stats = {
    totalPosts: 0,
    totalProducts: 0,
    featuredPosts: [],
    featuredProducts: []
  }

  return {
    props: {
      stats
    },
    revalidate: 60 // Regenerate every minute
  }
}