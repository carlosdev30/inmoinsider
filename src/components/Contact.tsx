import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: "contacto@inmoinsider.com",
      href: "mailto:kabir.frutos@remax.es"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 611 373 999",
      href: "tel:+34611373999"
    },
    {
      icon: MapPin,
      label: "Oficina",
      value: "Calle Córcega 116, Barcelona",
      href: null
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {channels.map((channel, index) => {
            const IconComponent = channel.icon;
            const content = (
              <div className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {channel.label}
                </h3>
                <p className="text-gray-600">
                  {channel.value}
                </p>
              </div>
            );

            return channel.href ? (
              <a key={index} href={channel.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 INMOINSIDER. Partner comercial: RE/MAX Grupo City.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;