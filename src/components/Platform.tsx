import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Platform = () => {
  const handleWatchTutorial = () => {
    window.open('https://www.loom.com/share/2bde6f5892ca49e9bbee264d5672b85e?sid=b686657a-93d1-4919-938c-564b1e39cf90', '_blank');
  };

  return (
    <section id="plataforma" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Así verás la plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Una vez dentro, podrás analizar todas las propiedades con datos de deuda, valor de mercado, margen, 
            rentabilidad, ubicación y referencias registrales. Filtra fácilmente por <strong className="text-red-600">comunidad autónoma, 
            provincia, municipio, estado del activo, deuda o rentabilidad esperada</strong>. En este espacio añadiremos un <strong className="text-red-600">vídeo demostrativo</strong> mostrando cómo navegar y filtrar dentro de la plataforma.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
              alt="Vista previa de la plataforma INMOINSIDER mostrando el dashboard de Power BI"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with play button */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handleWatchTutorial}
                className="group bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full p-6 shadow-2xl transform hover:scale-110"
              >
                <Play className="w-12 h-12 text-red-600 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>
          
          {/* Tutorial button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleWatchTutorial}
              className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              <ExternalLink className="w-5 h-5" />
              Ver tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;