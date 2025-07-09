import { useState } from 'react'
import { Layout } from '@/components'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, this would send to your API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Layout title="Contact Us" description="Get in touch with our team">
        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your message. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({ name: '', email: '', subject: '', message: '' })
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Contact Us" description="Get in touch with our team">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-blue-600 text-xl mr-4">📧</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:hello@example.com" className="text-blue-600 hover:text-blue-800">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-blue-600 text-xl mr-4">📞</div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-blue-600 text-xl mr-4">📍</div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">
                      123 Main Street<br />
                      City, State 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Need immediate help?</h3>
              <p className="text-gray-700 mb-4">
                Check out our documentation or search our knowledge base for instant answers.
              </p>
              <div className="space-y-2">
                <a href="/docs" className="block text-blue-600 hover:text-blue-800">
                  📚 Documentation
                </a>
                <a href="/support" className="block text-blue-600 hover:text-blue-800">
                  🔍 Knowledge Base
                </a>
                <a href="/community" className="block text-blue-600 hover:text-blue-800">
                  💬 Community Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}