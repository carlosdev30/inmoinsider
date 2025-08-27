import React from 'react';
import { UserPlus, Search, Lock, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Registro",
      text: "Solicita tu acceso rellenando el formulario online y desbloquea la cartera exclusiva de inmuebles REO."
    },
    {
      icon: Search,
      title: "Visualización y análisis",
      text: "Explora la plataforma en Power BI y filtra por comunidad, provincia, municipio, estado del activo, rango de deuda o nivel de rentabilidad."
    },
    {
      icon: Lock,
      title: "Reserva del inmueble",
      text: "Una vez dentro de la plataforma, haz clic en el botón **Reservar inmueble** y completa el formulario para asegurar tu oportunidad."
    },
    {
      icon: FileCheck,
      title: "Tramitación y cierre",
      text: "Nos encargamos de iniciar el proceso con el banco para la oferta de quita, coordinamos la firma notarial y cerramos la operación contigo paso a paso."
    }
  ];

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600">
            Un proceso claro y sin complicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {step.text.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="text-red-600">{part}</strong>
                    )}
                  </p>
                </div>
                
                {/* Connection line for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-red-200 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;