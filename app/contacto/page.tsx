import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto | Finvestor',
  description: 'Contáctanos para una consulta personalizada. Estamos en Las Condes, Santiago de Chile.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Conversemos Sobre tu Futuro Financiero</h1>
              <p className="text-xl text-secondary-200">
                Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="heading-3 text-secondary-900 mb-8">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">Dirección</h3>
                      <p className="text-secondary-600">
                        Alonso de Córdova 5870, Oficina 413<br />
                        Las Condes, Santiago<br />
                        Chile
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">Teléfono</h3>
                      <a href="tel:+56222345678" className="text-primary-600 hover:text-primary-700">
                        +56 2 2234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                      <a href="mailto:contacto@finvestor.cl" className="text-primary-600 hover:text-primary-700">
                        contacto@finvestor.cl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">Horario de Atención</h3>
                      <p className="text-secondary-600">
                        Lunes a Viernes: 9:00 - 18:00<br />
                        Sábado y Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-secondary-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5267742913496!2d-70.58060448478!3d-33.41559618077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5c8d3a4f13%3A0x3e2d36c7e3e9e1c2!2sAlonso%20de%20C%C3%B3rdova%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1635000000000!5m2!1ses-419!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="card p-8">
                  <h2 className="heading-3 text-secondary-900 mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
