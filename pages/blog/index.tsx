import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Layout } from '@/components'

interface Post {
  id: string
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  author: {
    name: string
  }
  categories: Array<{
    name: string
    slug: string
  }>
  readingTime: number
}

interface BlogIndexProps {
  posts: Post[]
  pagination: {
    page: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export default function BlogIndex({ posts, pagination }: BlogIndexProps) {
  return (
    <Layout 
      title="Blog"
      description="Read our latest articles and insights"
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Insights, tutorials, and updates from our team
          </p>
        </header>

        {posts.length > 0 ? (
          <>
            <div className="space-y-8 mb-12">
              {posts.map((post) => (
                <article key={post.id} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime} min read</span>
                    <span className="mx-2">•</span>
                    <span>by {post.author.name}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/blog/category/${category.slug}`}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <nav className="flex justify-center items-center space-x-4">
                {pagination.hasPrev && (
                  <Link
                    href={`/blog?page=${pagination.page - 1}`}
                    className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition-colors"
                  >
                    ← Previous
                  </Link>
                )}
                
                <span className="text-gray-600">
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                {pagination.hasNext && (
                  <Link
                    href={`/blog?page=${pagination.page + 1}`}
                    className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition-colors"
                  >
                    Next →
                  </Link>
                )}
              </nav>
            )}
          </>
        ) : (
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold mb-4">No Posts Yet</h2>
            <p className="text-gray-600 mb-6">
              This blog is ready for content! Start creating posts to share your ideas.
            </p>
            <Link 
              href="/admin/posts/new"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Write Your First Post
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ query }) => {
  // In a real implementation, this would fetch from your database
  // For now, we'll return empty data to show the empty state
  
  const page = parseInt(query?.page as string) || 1
  const posts: Post[] = []
  
  const pagination = {
    page,
    totalPages: 1,
    hasNext: false,
    hasPrev: false
  }

  return {
    props: {
      posts,
      pagination
    },
    revalidate: 60
  }
}