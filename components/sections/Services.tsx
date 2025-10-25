'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  TrendingUp, 
  Briefcase, 
  PieChart, 
  Building2, 
  Shield, 
  Target,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Gestión de Inversiones',
      description: 'Estrategias de inversión personalizadas para maximizar el retorno de tu capital con un enfoque de riesgo controlado.',
      features: ['Análisis de mercado', 'Diversificación de cartera', 'Monitoreo continuo'],
      href: '/servicios/inversiones',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PieChart,
      title: 'Gestión Patrimonial',
      description: 'Administración integral de patrimonios familiares y empresariales con visión de largo plazo.',
      features: ['Planificación sucesoria', 'Optimización fiscal', 'Preservación de capital'],
      href: '/servicios/patrimonial',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Asesoría Financiera',
      description: 'Consultoría experta para la toma de decisiones financieras estratégicas en tu empresa.',
      features: ['Valorización de empresas', 'M&A', 'Reestructuración'],
      href: '/servicios/asesoria',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Building2,
      title: 'Servicios Corporativos',
      description: 'Soluciones financieras integrales para empresas en crecimiento y consolidación.',
      features: ['Financiamiento corporativo', 'Gestión de riesgos', 'Treasury management'],
      href: '/servicios/corporativos',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos',
      description: 'Identificación, evaluación y mitigación de riesgos financieros para proteger tus activos.',
      features: ['Análisis de riesgos', 'Coberturas', 'Compliance'],
      href: '/servicios/riesgos',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Target,
      title: 'Planificación Estratégica',
      description: 'Desarrollo de planes financieros a medida para alcanzar tus objetivos de negocio.',
      features: ['Proyecciones financieras', 'Modelamiento', 'KPIs'],
      href: '/servicios/planificacion',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="servicios" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="heading-2 text-secondary-900 mb-6">
            Soluciones Financieras Integrales
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para impulsar el crecimiento 
            y proteger el patrimonio de nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card card-hover group"
              >
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="heading-4 text-secondary-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-secondary-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                  >
                    Saber más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/servicios" className="btn-primary">
            Ver Todos los Servicios
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
