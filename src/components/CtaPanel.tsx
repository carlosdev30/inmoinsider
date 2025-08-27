import React from 'react';

const CtaPanel = () => {
  const handleNewAccess = () => {
    window.open('https://www.notion.so/remax-buro/FORMULARIO-DE-ACCESO-POWER-BI-1f318dc466d6802e9b21f20207f183cc?pvs=4', '_blank');
  };

  const handleExistingAccess = () => {
    window.open('https://app.webdashboard.com/es/authentication/login', '_blank');
  };

  return (
    <section id="acceso" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Acceso a la plataforma
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Obtén tu acceso exclusivo a la cartera de inmuebles REO del Banco Santander. Regístrate si es tu primera vez o entra directamente si ya tienes acceso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleNewAccess}
              className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Obtén tu acceso
            </button>
            <button
              onClick={handleExistingAccess}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 transform hover:scale-105"
            >
              ¿Ya estás registrado? Accede a la cartera
            </button>
          </div>
          
          <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <p className="text-white/80 text-sm leading-relaxed">
              Tras completar el formulario de registro, recibirás acceso directo a Power BI con filtros avanzados, visualización de datos y opciones de reserva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaPanel;