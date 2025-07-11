import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="max-w-10xl md:text-5xl font-bold text-gray-900 mb-6">
            DISCOV<span className="text-purple-800">ER</span>{' '}
            <span className="text-purple-600">OUR </span>
            <span className="text-purple-400">EXP</span>
            <span className="text-purple-800">ERT</span>
            <span className="text-black">ISE</span>
          </h2>
          <h2 className="text-6xl md:text-5xl font-bold text-gray-900 mb-6 py-9">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From mobile applications to web development, backend services, and DevOps solutions,
            we offer a comprehensive range of software services to meet your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-700 leading-relaxed">
              We specialize in creating responsive and dynamic websites that elevate your online
              presence and engage your audience effectively.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Our backend services focus on robust architectures and scalable solutions to support
              your applications' functionalities.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              With our DevOps expertise, we streamline your development processes and ensure
              continuous delivery for efficient software deployment.
            </p>
          </div>
        </div>
        
        <div className="pt-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                The team at Satyos Solutions is highly skilled and dedicated to delivering
                top-quality results.
              </p>
              <h4 className="text-lg font-semibold text-gray-900">Ajay Kamath</h4>
              <p className="text-sm text-gray-500">Founder, Brick Tree</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Working with Satyos Solutions has been a game-changer for our business growth.
              </p>
              <h4 className="text-lg font-semibold text-gray-900">David Brown</h4>
              <p className="text-sm text-gray-500">Executive Manager, JSB Group</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Their attention to detail and commitment to excellence set Satyos Solutions apart.
              </p>
              <h4 className="text-lg font-semibold text-gray-900">Rajan Malik</h4>
              <p className="text-sm text-gray-500">Nue Fabrics</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 mb-4">
                Satyos Solutions is our go-to partner for all our software development needs.
              </p>
              <h4 className="text-lg font-semibold text-gray-900">Deep Parmar</h4>
              <p className="text-sm text-gray-500">Digi Finance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
