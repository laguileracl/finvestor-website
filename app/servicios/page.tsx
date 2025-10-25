import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  TrendingUp, 
  PieChart, 
  Briefcase, 
  Building2, 
  Shield, 
  Target,
  Check,
  ArrowRight 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios | Finvestor',
  description: 'Servicios financieros integrales: gestión de inversiones, gestión patrimonial, asesoría financiera y servicios corporativos.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Gestión de Inversiones',
      description: 'Maximiza el retorno de tu capital con estrategias de inversión personalizadas y un enfoque de riesgo controlado.',
      features: [
        'Análisis profundo de mercados financieros',
        'Diversificación estratégica de carteras',
        'Monitoreo continuo y ajustes proactivos',
        'Reportes detallados de performance',
        'Acceso a instrumentos exclusivos',
        'Gestión activa y pasiva según perfil',
      ],
      benefits: [
        'Rentabilidad superior al promedio del mercado',
        'Reducción de riesgos mediante diversificación',
        'Transparencia total en todas las operaciones',
      ],
      href: '/servicios/inversiones',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: PieChart,
      title: 'Gestión Patrimonial',
      description: 'Administración integral de patrimonios familiares y empresariales con visión de largo plazo.',
      features: [
        'Planificación sucesoria y testamentaria',
        'Optimización fiscal y tributaria',
        'Preservación y crecimiento de capital',
        'Estructuración de inversiones familiares',
        'Gobierno corporativo familiar',
        'Protección de activos',
      ],
      benefits: [
        'Continuidad generacional del patrimonio',
        'Minimización de carga tributaria',
        'Paz mental para ti y tu familia',
      ],
      href: '/servicios/patrimonial',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Asesoría Financiera',
      description: 'Consultoría experta para la toma de decisiones financieras estratégicas.',
      features: [
        'Valorización de empresas',
        'Fusiones y adquisiciones (M&A)',
        'Reestructuración financiera',
        'Due diligence financiero',
        'Modelamiento financiero avanzado',
        'Estrategias de salida (exit strategies)',
      ],
      benefits: [
        'Decisiones informadas basadas en datos',
        'Maximización del valor empresarial',
        'Acompañamiento en procesos complejos',
      ],
      href: '/servicios/asesoria',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Building2,
      title: 'Servicios Corporativos',
      description: 'Soluciones financieras integrales para empresas en crecimiento.',
      features: [
        'Financiamiento corporativo',
        'Gestión de riesgos financieros',
        'Treasury management',
        'Relación con inversionistas',
        'Estructuración de deuda',
        'Capital de trabajo',
      ],
      benefits: [
        'Acceso a mejores condiciones de financiamiento',
        'Optimización de flujos de caja',
        'Fortalecimiento de estructura de capital',
      ],
      href: '/servicios/corporativos',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos',
      description: 'Identificación, evaluación y mitigación de riesgos financieros.',
      features: [
        'Análisis de riesgos financieros',
        'Estrategias de cobertura (hedging)',
        'Compliance y regulatorio',
        'Stress testing',
        'Gestión de riesgo crediticio',
        'Políticas de control interno',
      ],
      benefits: [
        'Protección contra volatilidad del mercado',
        'Cumplimiento normativo garantizado',
        'Reducción de exposición a riesgos',
      ],
      href: '/servicios/riesgos',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Target,
      title: 'Planificación Estratégica',
      description: 'Desarrollo de planes financieros para alcanzar objetivos de negocio.',
      features: [
        'Proyecciones financieras',
        'Modelamiento de escenarios',
        'Definición de KPIs financieros',
        'Presupuestos y forecasting',
        'Análisis de viabilidad',
        'Planes de crecimiento',
      ],
      benefits: [
        'Visión clara del futuro financiero',
        'Toma de decisiones basada en datos',
        'Alineación de recursos con objetivos',
      ],
      href: '/servicios/planificacion',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Nuestros Servicios</h1>
              <p className="text-xl text-secondary-200">
                Soluciones financieras integrales diseñadas para impulsar tu éxito empresarial y patrimonial.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={service.title}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h2 className="heading-3 text-secondary-900 mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-4 mb-8">
                        <h3 className="font-semibold text-secondary-900 text-lg">
                          Beneficios Clave:
                        </h3>
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={service.href}
                        className="btn-primary inline-flex items-center"
                      >
                        Más Información
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>

                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="card">
                        <div className="p-8">
                          <h3 className="font-semibold text-secondary-900 text-lg mb-6">
                            ¿Qué Incluye?
                          </h3>
                          <ul className="space-y-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-start space-x-3">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-secondary-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-6">
                ¿Listo para Optimizar tus Finanzas?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Agenda una reunión sin compromiso y descubre cómo nuestros servicios 
                pueden transformar tu situación financiera.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
                  Contactar Ahora
                </Link>
                <Link href="/nosotros" className="btn-secondary border-white text-white hover:bg-white/10">
                  Conocer al Equipo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
