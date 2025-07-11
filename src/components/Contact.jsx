import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Contact Us Today</h2>
            <p className="text-gray-700 text-lg mb-16">
              Reach out to us for customized software solutions tailored to your
              specific requirements and business goals.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@satyos.com" className="text-blue-600 underline">Email</a></li>
                <li><a href="tel:+15551234567" className="text-blue-600 underline">Phone</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 w-full border-b focus:outline-none focus:border-black py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 w-full border-b focus:outline-none focus:border-black py-2"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full border-b focus:outline-none focus:border-black py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full border-b focus:outline-none focus:border-black py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full border-b focus:outline-none focus:border-black py-2 resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-6 w-full border rounded-full py-3 font-medium hover:bg-gray-100 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-20 text-center text-sm text-gray-500">
          &copy; 2025 Satyos Solutions Private Limited. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
