'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-200"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-400"></div>
        </div>
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8"
            >
              <TrendingUp className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Excelencia en Servicios Financieros</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-1 mb-6 leading-tight"
            >
              Construimos tu futuro financiero con
              <span className="text-accent-400"> estrategia y visión</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-200 mb-10 leading-relaxed"
            >
              Servicios financieros corporativos, gestión de inversiones y patrimonios 
              con un equipo de primer nivel en el corazón de Santiago.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contacto" className="btn-primary group">
                Agenda una Reunión
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/servicios" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
                Nuestros Servicios
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
            >
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-1">15+</div>
                <div className="text-sm text-secondary-300">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-1">200+</div>
                <div className="text-sm text-secondary-300">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400 mb-1">+$200M</div>
                <div className="text-sm text-secondary-300">Activos Gestionados USD</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <Shield className="w-10 h-10 text-accent-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2">Seguridad</h3>
                    <p className="text-sm text-secondary-300">Protección total de activos</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <TrendingUp className="w-10 h-10 text-accent-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2">Crecimiento</h3>
                    <p className="text-sm text-secondary-300">Estrategias rentables</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 col-span-2">
                    <Users className="w-10 h-10 text-accent-400 mb-4" />
                    <h3 className="font-semibold text-white mb-2">Equipo Experto</h3>
                    <p className="text-sm text-secondary-300">Profesionales de primer nivel</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
