import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Layout } from '@/components'

interface Product {
  id: string
  name: string
  description: string
  price: number
  slug: string
  image: string
  category: {
    name: string
    slug: string
  }
  inStock: boolean
}

interface ShopIndexProps {
  products: Product[]
  categories: Array<{
    name: string
    slug: string
    count: number
  }>
}

export default function ShopIndex({ products, categories }: ShopIndexProps) {
  return (
    <Layout 
      title="Shop"
      description="Discover our amazing products"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-gray-600">
            Discover our curated collection of amazing products
          </p>
        </header>

        {products.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link
                    href="/shop"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/shop/category/${category.slug}`}
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {category.name} ({category.count})
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <div className="product-grid">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link href={`/shop/product/${product.slug}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    
                    <div className="p-6">
                      <div className="text-sm text-gray-600 mb-2">
                        {product.category.name}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">
                        <Link 
                          href={`/shop/product/${product.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {product.name}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          ${product.price.toFixed(2)}
                        </span>
                        
                        {product.inStock ? (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Add to Cart
                          </button>
                        ) : (
                          <span className="text-red-600 font-medium">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="text-2xl font-bold mb-4">No Products Yet</h2>
            <p className="text-gray-600 mb-6">
              Your store is ready for products! Start adding items to showcase your offerings.
            </p>
            <Link 
              href="/admin/products/new"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Your First Product
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real implementation, this would fetch from your database
  // For now, we'll return empty data to show the empty state
  
  const products: Product[] = []
  const categories = []

  return {
    props: {
      products,
      categories
    },
    revalidate: 60
  }
}