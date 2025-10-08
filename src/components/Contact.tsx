import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-bot honeypot field
  });

  // Sanitize function to prevent XSS
  const sanitize = (str: string): string => {
    return str
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot !== '') {
      console.warn('Bot detected');
      return;
    }

    // Sanitize all inputs
    const sanitizedName = sanitize(formData.name);
    const sanitizedEmail = sanitize(formData.email);
    const sanitizedMessage = sanitize(formData.message);

    // Additional validation
    if (sanitizedName.length === 0 || sanitizedEmail.length === 0 || sanitizedMessage.length === 0) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    // Create mailto link with sanitized data
    const subject = encodeURIComponent('Consulta desde INMOINSIDER');
    const body = encodeURIComponent(`Nombre: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMensaje:\n${sanitizedMessage}`);
    window.location.href = `mailto:kabir.frutos@remax.es?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                minLength={2}
                maxLength={100}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                maxLength={100}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>

            {/* Honeypot field - hidden from users, only bots fill it */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                minLength={10}
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Cuéntanos en qué podemos ayudarte..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-200 pt-8 mt-16 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 INMOINSIDER. Partner comercial: RE/MAX Grupo City.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;