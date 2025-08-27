import React from 'react';
import { TrendingDown, Shield, Users, Calculator } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Descuentos reales",
      text: "Propiedades con margen frente a mercado gracias al origen judicial de la adjudicación.",
      highlight: true
    },
    {
      icon: Shield,
      title: "Seguridad y proceso claro",
      text: "Contrato de acceso, reserva certificada y trazabilidad de cada hito legal y notarial.",
      highlight: false
    },
    {
      icon: Users,
      title: "Partners oficiales",
      text: "Propiedades del **Banco Santander**, comercializadas en exclusiva por **RE/MAX Grupo City** a través de la plataforma **INMOINSIDER**.",
      highlight: false
    },
    {
      icon: Calculator,
      title: "Asesoría fiscal",
      text: "Cálculo de ITP, IBI y comunidad pendientes; apoyo en liquidaciones y regularizaciones.",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ventajas clave
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className={`p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                  feature.highlight 
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white' 
                    : 'bg-white hover:shadow-xl'
                }`}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto ${
                  feature.highlight 
                    ? 'bg-white/20' 
                    : 'bg-red-100'
                }`}>
                  <IconComponent className={`w-8 h-8 ${
                    feature.highlight ? 'text-white' : 'text-red-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 text-center ${
                  feature.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed text-center ${
                  feature.highlight ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {feature.text.split('**').map((part, i) => 
                    i % 2 === 0 ? part : <strong key={i} className={feature.highlight ? 'text-white' : 'text-red-600'}>{part}</strong>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;