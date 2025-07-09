import { Layout } from '@/components'

export default function About() {
  return (
    <Layout 
      title="About Us"
      description="Learn more about our mission and team"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating amazing experiences and delivering 
            exceptional value to our customers.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p>
                Founded with a vision to make the web more accessible and secure, 
                our platform represents years of development and refinement. We believe 
                that everyone should have access to professional-grade tools without 
                the complexity.
              </p>
              <p>
                Our team combines expertise in security, performance, and user experience 
                to deliver a platform that doesn't compromise on any front. From small 
                businesses to large enterprises, we provide the foundation for digital success.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90">
              To democratize enterprise-grade web technology, making it accessible 
              to organizations of all sizes while maintaining the highest standards 
              of security and performance.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-gray-600">
                Every feature is built with security as a fundamental requirement, 
                not an afterthought.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Performance Focused</h3>
              <p className="text-gray-600">
                We optimize for speed and efficiency at every level of the stack.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">User Centered</h3>
              <p className="text-gray-600">
                Our users' needs drive every decision we make in product development.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-medium w-20">Email:</span>
                  <a href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-800">
                    hello@example.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-20">Phone:</span>
                  <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                    (123) 456-7890
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-20">Address:</span>
                  <span>123 Main St, City, State 12345</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-800">
                  Twitter @yourhandle
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">
                  LinkedIn Company Page
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">
                  GitHub Organization
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}