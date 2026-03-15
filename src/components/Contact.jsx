import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you. Send us a message and we'll
          respond as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Information Cards */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Email</h3>
          </div>
          <p className="text-gray-600">contact@foodzone.com</p>
          <p className="text-gray-600">support@foodzone.com</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
              <Phone className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Phone</h3>
          </div>
          <p className="text-gray-600">+1 (555) 123-4567</p>
          <p className="text-gray-600">+1 (555) 987-6543</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
              <MapPin className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Location</h3>
          </div>
          <p className="text-gray-600">123 Food Street</p>
          <p className="text-gray-600">New York, NY 10001</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                ✓ Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us your thoughts, questions, or feedback..."
              ></textarea>
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What is the response time?
            </h3>
            <p className="text-gray-600">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              How can I place an order?
            </h3>
            <p className="text-gray-600">
              You can place orders directly through our website or mobile app with just a few clicks.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Do you offer catering?
            </h3>
            <p className="text-gray-600">
              Yes, we offer catering services for events. Contact us for more details.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, digital wallets, and online payment methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;