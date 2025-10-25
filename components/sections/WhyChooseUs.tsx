'use client';

import { motion } from 'framer-motion';
import { Award, Target, Users, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const values = [
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años de trayectoria en el mercado financiero chileno, con un equipo de profesionales altamente calificados.',
    },
    {
      icon: Target,
      title: 'Enfoque Personalizado',
      description: 'Cada cliente es único. Diseñamos estrategias a medida que se alinean con tus objetivos específicos.',
    },
    {
      icon: Users,
      title: 'Equipo de Excelencia',
      description: 'Profesionales certificados con formación en las mejores universidades y experiencia internacional.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description: 'Utilizamos las últimas herramientas y metodologías del mercado financiero global.',
    },
    {
      icon: Heart,
      title: 'Compromiso Total',
      description: 'Tu éxito es nuestro éxito. Trabajamos con dedicación y transparencia en cada proyecto.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description: 'Track record sólido con resultados consistentes que superan las expectativas del mercado.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="heading-2 text-secondary-900 mb-6">
            Tu Socio Estratégico en Finanzas
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Combinamos experiencia, tecnología y un enfoque centrado en el cliente 
            para entregar soluciones financieras de clase mundial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-secondary-100 group-hover:border-primary-200 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="heading-3 mb-6">
              Comienza tu Viaje Financiero con Nosotros
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Agenda una reunión sin compromiso y descubre cómo podemos ayudarte 
              a alcanzar tus metas financieras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                Agendar Reunión
              </a>
              <a href="/servicios" className="btn-secondary border-white text-white hover:bg-white/10">
                Conocer Servicios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
