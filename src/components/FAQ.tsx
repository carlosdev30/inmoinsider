import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({ '0-0': true });

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = [
    {
      title: "1. Naturaleza y contexto legal del producto",
      items: [
        {
          q: "¿Qué es exactamente una propiedad de adjudicación registral?",
          a: "Es un inmueble adjudicado a una entidad financiera tras un procedimiento judicial de **ejecución hipotecaria** (arts. 681 y ss. LEC) iniciado por incumplimiento del préstamo hipotecario. La subasta judicial suele quedar desierta y el adjudicatario final es el propio acreedor. Si no hay postores, el banco puede solicitar la adjudicación por el **50% del valor de tasación** o por la **cantidad total adeudada**, según art. 671 LEC. Emitido el auto judicial y su inscripción, el banco se convierte en propietario registral y puede vender sin necesidad de nueva subasta."
        },
        {
          q: "¿Por qué una entidad financiera acepta vender por debajo de mercado o incluso por debajo de la deuda?",
          a: "Porque el activo adjudicado es **no productivo** para la entidad y genera costes (mantenimiento, impuestos, ocupaciones, provisiones NIIF). La venta rápida libera balance, mejora ratios y reduce riesgos. Por eso los bancos aceptan **ofertas de quita** para facilitar un desinversión ágil."
        }
      ]
    },
    {
      title: "2. Procedimiento de adquisición paso a paso",
      items: [
        {
          q: "¿Cuál es el proceso para adquirir uno de estos inmuebles?",
          a: "a) Visualización y selección en plataforma digital. b) **Reserva** y formulario (datos personales/societarios y pago de **6.000 €** por transferencia). c) En 24 h hábiles se envía el **Contrato de Acceso a Cartera de Inmuebles con Deuda Hipotecaria** para firma (primero comprador, luego intermediario). d) Inicio de **oferta de quita** al banco (plazo de respuesta estimado de **10 a 30 días hábiles**). e) Firma de la oferta por el comprador. f) Coordinación de firma en notaría. g) Firma de escritura y pagos finales. h) Inscripción registral y cierre."
        },
        {
          q: "¿Cómo puedo reservar una propiedad?",
          a: "Desde la plataforma, elige el activo y pulsa **\"Reservar propiedad\"**. Rellena el formulario y realiza el pago de 6.000 € por transferencia. La reserva bloquea el activo durante la negociación con el banco."
        }
      ]
    },
    {
      title: "3. Aspectos fiscales y económicos",
      items: [
        {
          q: "¿Cuál es la base imponible del ITP y cómo se calcula en estos casos?",
          a: "En adjudicados REO, el **ITP** no se calcula sobre el valor de quita ni sobre valor de mercado, sino sobre el **valor catastral del inmueble** (criterio aplicado por las Haciendas autonómicas en transmisiones con precio pactado reducido). Referencia: art. 10 del **Real Decreto Legislativo 1/1993**. En la práctica, se usa el **valor catastral actualizado** (ajustado con coeficientes autonómicos) para autoliquidar el ITP y evitar comprobaciones de valores discordantes."
        },
        {
          q: "¿Qué obligaciones fiscales adicionales debe asumir el comprador?",
          a: "Conforme al art. 64 del **TRLRHL**, el nuevo propietario responde del **IBI del año en curso y de los tres anteriores**. Según art. 9.1 e) de la **Ley de Propiedad Horizontal**, responde de **cuotas de comunidad impagadas** del año anterior y del año en curso. Estas deudas no afectan a la titularidad pero deben regularizarse."
        },
        {
          q: "¿Qué impuestos o gastos adicionales debo prever además del precio y honorarios?",
          a: "• **ITP** autonómico (habitualmente 6–10% sobre base catastral o mínimo de referencia). • **Gastos notariales y registrales** de compraventa. • **IBI pendiente y comunidad** (año en curso y hasta tres/cuatro anteriores, según zona). • **Honorarios legales opcionales** si deseas abogado/gestoría independiente. Todo debe incluirse en el cálculo de inversión."
        }
      ]
    },
    {
      title: "4. Situación posesoria y ocupación",
      items: [
        {
          q: "¿Qué ocurre si el inmueble está ocupado?",
          a: "Se adquiere **en el estado físico y posesorio** en que se encuentre, salvo pacto específico. En la mayoría de casos, el banco ha iniciado el **desahucio judicial** (art. 441.1 LEC), permitiendo al nuevo propietario **subrogarse** en el proceso. La ocupación no afecta a la seguridad jurídica de la operación, pero puede influir en plazos de disfrute o reventa."
        },
        {
          q: "¿Qué es un ocupante vulnerable y cómo afecta?",
          a: "Persona que cumple criterios sociales/económicos (Ley 1/2013, Ley 5/2018 y normativa autonómica): ingresos < 3× IPREM, dependencia o monoparentalidad, edad > 65 sin red de apoyo, víctima de violencia de género, etc. El juez puede **suspender temporalmente** el lanzamiento hasta 12 meses. La casuística es compleja y requiere **pruebas documentales**."
        },
        {
          q: "¿Puedo visitar la propiedad antes de reservar?",
          a: "Sí, pero las visitas son **por cuenta del comprador**. No se dispone de llaves ni acceso directo; la visita suele ser **desde el exterior**, salvo autorización del ocupante."
        }
      ]
    },
    {
      title: "5. Financiación y titularidad",
      items: [
        {
          q: "¿Es posible financiar esta compra mediante hipoteca?",
          a: "No en condiciones estándar, por: **precio de compraventa inferior al valor** de referencia, **plazos cortos** y particularidades jurídicas (posesión, adjudicación). Se compra con **fondos propios** o financiación **privada/no hipotecaria**. Obligatoria la **prevención de blanqueo** (Ley 10/2010)."
        },
        {
          q: "¿Puedo comprar como persona física o sociedad?",
          a: "Sí. Puedes adquirir a título personal o mediante **SL/patrimonial**. No es necesario definir la figura en la **reserva**; se fija al formalizar la **oferta de quita** y se escriturará conforme a ello."
        },
        {
          q: "¿Puedo designar a otra persona o sociedad para que sea titular?",
          a: "Sí, siempre que se comunique **antes** de presentar la oferta de quita al banco. Una vez firmada la oferta a nombre de un titular, **no puede modificarse** sin reiniciar el proceso. Si la compra la ejecuta una sociedad, deberás aportar **escritura de constitución, CIF y poderes** al equipo jurídico para su correcta inclusión en escritura."
        }
      ]
    },
    {
      title: "6. Contratación, condiciones y garantías",
      items: [
        {
          q: "¿Qué contrato regula la operación y condiciones principales?",
          a: "Se firma el **Contrato de Acceso a Cartera de Inmuebles con Deuda Hipotecaria** con RE/MAX Grupo City, que regula acceso, prioridad sobre inmuebles, reserva, plazos, confidencialidad y documentación. Condiciones clave: **reserva 6.000 €** (garantiza exclusividad y presentación de quita), **honorarios 20.000 € (IVA incluido)** —se descuentan los 6.000 €, quedando 14.000 € a notaría—; **plazo de firma 30–45 días** (hasta 90 en casos excepcionales); **derecho de tanteo 18 meses** si decides vender (comisión **5% + IVA** con servicios de marketing y gestión); **cláusula de confidencialidad** y **obligación documental** (entrega de info fiscal, bancaria e identificativa en 24 h desde la firma)."
        },
        {
          q: "¿Qué sucede si cambio de opinión tras la reserva?",
          a: "La reserva de **6.000 € es vinculante y no reembolsable**, salvo que la operación no pueda realizarse por causas **ajenas** al comprador (p.ej., no aceptación de quita por el banco o problemas documentales insalvables). Si decides no continuar por motivos personales, **pierdes la reserva**."
        },
        {
          q: "¿Qué pasa si el banco tarda más en responder a la quita?",
          a: "El plazo estimado es **10–30 días hábiles** y puede extenderse por revisión documental, firmas internas o cambios de titularidad. La **reserva garantiza prioridad y exclusividad** sobre el activo durante todo el proceso. El equipo comercial mantiene coordinación con la entidad para acelerar tiempos."
        }
      ]
    },
    {
      title: "7. Plataforma y visualización de activos",
      items: [
        {
          q: "¿Cómo accedo a la cartera completa?",
          a: "Mediante la plataforma **Power BI** (entorno seguro). Regístrate con el formulario para recibir un acceso personalizado con fichas, precios, ubicaciones y filtros por tipo de activo."
        }
      ]
    },
    {
      title: "8. Venta futura y servicios postventa",
      items: [
        {
          q: "¿Qué ocurre si quiero vender el inmueble en el futuro?",
          a: "Podemos comercializarlo bajo exclusividad. Comisión **5% + IVA**, que incluye **valoración, análisis de rentabilidad, reportaje foto-vídeo, publicación en portales nacionales/internacionales, campañas digitales, coordinación de visitas, contratos y firma**. Disponible durante **18 meses** desde la compra."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];
                  
                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <h4 className="font-semibold text-gray-900 pr-4">
                          {item.q}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="text-gray-600 leading-relaxed">
                            {item.a.split('**').map((part, i) => 
                              i % 2 === 0 ? part : <strong key={i} className="text-red-600">{part}</strong>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;