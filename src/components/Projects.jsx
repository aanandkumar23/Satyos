import React from 'react';

const Projects = () => {
  const sections = [
    {
      title: 'Web Development',
      description:
        'Each project in our portfolio represents a unique challenge that we successfully transformed into a successful and impactful solution.',
      link: 'Explore More',
      image:
        'https://static.wixstatic.com/media/11062b_e9efd10ef8d54ccca9db92efb30882bb~mv2.jpg/v1/fill/w_948,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Website%20setup%20on%20laptop.jpg',
    },
    {
      title: 'Software Solutions',
      description:
        'Discover how our team at Satyos Solutions turned innovative ideas into reality through our portfolio of successful projects.',
      link: 'See Our Work',
      image:
        'https://static.wixstatic.com/media/11062b_ce3baf351ac642f69bf544fada42bb59~mv2.jpeg/v1/fill/w_948,h_286,fp_0.55_0.33,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lead%20presentations%20during%20meetings.jpeg',
    },
    {
      title: 'Innovative Projects',
      description:
        'From mobile apps to web platforms, our portfolio reflects our commitment to delivering cutting-edge software solutions.',
      link: 'Discover Portfolio',
      image:
        'https://static.wixstatic.com/media/11062b_abcafc9ab39b41aa976ebad0e170cc39~mv2.jpg/v1/fill/w_948,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Music%20Apps.jpg',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explore our diverse portfolio showcasing our expertise in mobile apps, web development, and software solutions.
        </p>
      </div>

      <div className="space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-4">{section.description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline"
              >
                {section.link}
              </a>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
