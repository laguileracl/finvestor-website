import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Target, Heart, Shield, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Finvestor',
  description: 'Conoce a Finvestor, tu socio estratégico en servicios financieros. Equipo de excelencia con más de 15 años de experiencia.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Carlos Rodríguez',
      position: 'CEO & Founder',
      description: 'MBA de Stanford, con más de 20 años de experiencia en banca de inversión y gestión de activos.',
      specialties: ['Estrategia Corporativa', 'M&A', 'Private Equity'],
    },
    {
      name: 'María José Silva',
      position: 'Directora de Inversiones',
      description: 'CFA Charterholder, experta en gestión de carteras y análisis de mercados financieros.',
      specialties: ['Gestión de Portafolios', 'Análisis Cuantitativo', 'Renta Variable'],
    },
    {
      name: 'Andrés Valenzuela',
      position: 'Director de Patrimonio',
      description: 'Especialista en planificación patrimonial con certificación CFP y amplia experiencia internacional.',
      specialties: ['Planificación Patrimonial', 'Estructuras Familiares', 'Tax Planning'],
    },
    {
      name: 'Francisca González',
      position: 'Directora de Asesoría Corporativa',
      description: 'Ingeniero Comercial UC, con experiencia en consultoría financiera para grandes corporaciones.',
      specialties: ['Finanzas Corporativas', 'Valorización', 'Reestructuraciones'],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en todas nuestras operaciones, priorizando siempre el interés de nuestros clientes.',
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada proyecto, superando las expectativas y entregando resultados superiores.',
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Tu éxito es nuestro éxito. Nos involucramos profundamente en cada caso para garantizar los mejores resultados.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo, tanto internamente como con nuestros clientes, para crear soluciones innovadoras.',
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías y metodologías para mantenernos a la vanguardia de la industria.',
    },
    {
      icon: Award,
      title: 'Profesionalismo',
      description: 'Mantenemos los más altos estándares profesionales y éticos en todas nuestras actividades.',
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
              <h1 className="heading-1 mb-6">Sobre Nosotros</h1>
              <p className="text-xl text-secondary-200">
                Un equipo de profesionales comprometidos con tu éxito financiero, 
                combinando experiencia, conocimiento y dedicación.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-secondary-900 mb-8 text-center">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg max-w-none text-secondary-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Finvestor nace en 2008 con la visión de democratizar el acceso a servicios 
                  financieros de clase mundial en Chile. Fundada por un grupo de profesionales 
                  con amplia experiencia en banca de inversión y gestión de activos, nuestra 
                  empresa se ha consolidado como un referente en el mercado financiero nacional.
                </p>
                <p className="text-lg leading-relaxed">
                  A lo largo de más de 15 años, hemos acompañado a empresas y familias en sus 
                  decisiones financieras más importantes, desde la estructuración de inversiones 
                  hasta procesos de fusiones y adquisiciones. Nuestro compromiso con la excelencia 
                  y la innovación nos ha permitido crecer de manera sostenida, manteniendo siempre 
                  el foco en entregar valor real a nuestros clientes.
                </p>
                <p className="text-lg leading-relaxed">
                  Hoy, con más de $200 millones USD en activos bajo gestión y más de 200 clientes 
                  satisfechos, continuamos evolucionando para adaptarnos a las necesidades 
                  cambiantes del mercado, siempre con el mismo espíritu emprendedor y 
                  compromiso con el que iniciamos este viaje.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="valores" className="section-padding bg-gradient-to-b from-secondary-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-secondary-900 mb-6">
                Nuestros Valores
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra cultura organizacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="card">
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="equipo" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-secondary-900 mb-6">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Profesionales de primer nivel con formación internacional y amplia experiencia en el mercado financiero.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.name} className="card card-hover">
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary-600 font-medium mb-3">
                          {member.position}
                        </p>
                        <p className="text-secondary-600 mb-4 leading-relaxed">
                          {member.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-primary-100">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-primary-100">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">+$200M</div>
                <div className="text-primary-100">Activos Gestionados USD</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
