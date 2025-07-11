import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center px-6 sm:px-12 lg:px-24"
      style={{
        backgroundImage:
          'url("https://static.wixstatic.com/media/086bf6df5f8c4eca8bd85bba2e40de56.jpg/v1/fill/w_1901,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wooden%20Floor.jpg")',
      }}
    >

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-left max-w-3xl space-y-3">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
          Welcome to Satyos Solutions, your one-stop
        </p>
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
          destination for innovative mobile and web
        </p>
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
          application services.
        </p>
      </div>
    </section>
  );
};

export default Hero;
