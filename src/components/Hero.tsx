import React from 'react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAccess = () => {
    window.open('https://remax-buro.notion.site/1f318dc466d68051852acc770cff4bc5?pvs=105', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Spanish residential buildings"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Accede a inmuebles <span className="text-red-600">REO de entidades bancarias</span> con descuentos exclusivos
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Descubre oportunidades únicas de inversión en propiedades adjudicadas (REO). <strong className="text-red-600">Descuentos frente al valor de mercado</strong> y un proceso acompañado de inicio a fin.
          </p>

          {/* Badge */}
          <div className="flex justify-center">
            <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-semibold">
              +60 propiedades exclusivas Banco Santander
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleAccess}
              className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Obtén tu acceso
            </button>
            <button
              onClick={() => scrollToSection('#how')}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-all duration-200"
            >
              Cómo funciona
            </button>
          </div>

          {/* Note */}
          <div className="pt-8">
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Operación con fondos propios o financiación alternativa (no hipotecaria estándar).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;