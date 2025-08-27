import React from 'react';

const CtaPanel = () => {
  const handleAccess = () => {
    window.open('https://remax-buro.notion.site/1f318dc466d68051852acc770cff4bc5?pvs=105', '_blank');
  };

  return (
    <section id="acceso" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Acceso a la plataforma
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Regístrate y recibe un acceso seguro y personalizado a la cartera completa de activos en <strong>Power BI</strong>.
          </p>
          
          <button
            onClick={handleAccess}
            className="bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Acceder ahora
          </button>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <p className="text-white/80 text-sm leading-relaxed">
              Tras completar el formulario, recibirás acceso con filtros avanzados, visualización de datos y opciones de reserva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaPanel;