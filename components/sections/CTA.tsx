'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-accent-300 rounded-full text-sm font-semibold mb-6">
              Da el Siguiente Paso
            </span>
            
            <h2 className="heading-2 mb-6">
              Transforma tu Futuro Financiero Hoy
            </h2>
            
            <p className="text-xl text-secondary-200 mb-12 leading-relaxed">
              Agenda una reunión sin compromiso con nuestros expertos y descubre 
              cómo podemos ayudarte a alcanzar tus objetivos financieros.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link 
                href="/contacto" 
                className="btn-primary bg-accent-500 hover:bg-accent-600 text-white group inline-flex items-center justify-center"
              >
                Agendar Reunión
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+56222345678" 
                className="btn-secondary border-white/30 text-white hover:bg-white/10 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-secondary-300">Llámanos</div>
                  <a href="tel:+56222345678" className="font-semibold hover:text-accent-400 transition-colors">
                    +56 2 2234 5678
                  </a>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-white/20"></div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-secondary-300">Escríbenos</div>
                  <a href="mailto:contacto@finvestor.cl" className="font-semibold hover:text-accent-400 transition-colors">
                    contacto@finvestor.cl
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default CTA;
