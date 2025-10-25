'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Roberto Martínez',
      position: 'CEO, TechCorp Chile',
      company: 'TechCorp',
      content: 'Finvestor ha sido fundamental en el crecimiento de nuestra empresa. Su asesoría estratégica nos permitió optimizar nuestro capital de trabajo y expandirnos a nuevos mercados.',
      rating: 5,
      image: '/avatars/avatar-1.jpg',
    },
    {
      name: 'Carolina Sánchez',
      position: 'Directora Financiera, Grupo Inmobiliario',
      company: 'Grupo Inmobiliario',
      content: 'La gestión patrimonial que ofrece Finvestor es de primer nivel. Hemos visto resultados consistentes y su equipo siempre está disponible para responder nuestras consultas.',
      rating: 5,
      image: '/avatars/avatar-2.jpg',
    },
    {
      name: 'Andrés Valenzuela',
      position: 'Empresario',
      company: 'Inversiones Diversificadas',
      content: 'Confío plenamente en el equipo de Finvestor para la gestión de mis inversiones. Su enfoque profesional y transparente me da la tranquilidad que busco en un asesor financiero.',
      rating: 5,
      image: '/avatars/avatar-3.jpg',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="heading-2 text-secondary-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor activo. 
            Conoce sus experiencias trabajando con Finvestor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-100 transform rotate-180" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-secondary-700 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-sm text-secondary-600">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
            <div className="text-sm text-secondary-600">Clientes Activos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-sm text-secondary-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">+$200M</div>
            <div className="text-sm text-secondary-600">Activos Bajo Gestión USD</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
