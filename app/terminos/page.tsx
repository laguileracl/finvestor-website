import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Finvestor',
  description: 'Términos y condiciones de uso de los servicios de Finvestor.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Términos y Condiciones</h1>
              <p className="text-xl text-secondary-200">
                Última actualización: Octubre 2025
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar los servicios de Finvestor, aceptas estar sujeto a estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>

              <h2>2. Descripción de los Servicios</h2>
              <p>
                Finvestor ofrece servicios de asesoría financiera, gestión de inversiones, gestión patrimonial y 
                servicios corporativos. Nuestros servicios están diseñados para clientes empresariales y personas 
                con patrimonio significativo que requieren asesoría profesional.
              </p>

              <h2>3. Relación Cliente-Asesor</h2>
              <p>
                La relación entre Finvestor y el cliente se formaliza mediante un contrato de servicios específico 
                que detalla el alcance, honorarios y responsabilidades de ambas partes. Este sitio web y estos 
                términos generales no constituyen una oferta de servicios específicos.
              </p>

              <h2>4. Responsabilidades del Cliente</h2>
              <p>El cliente se compromete a:</p>
              <ul>
                <li>Proporcionar información veraz y completa</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Informar oportunamente sobre cambios en su situación financiera</li>
                <li>Pagar los honorarios acordados en tiempo y forma</li>
                <li>Cumplir con las regulaciones aplicables</li>
              </ul>

              <h2>5. Limitación de Responsabilidad</h2>
              <p>
                Finvestor actúa como asesor financiero y no garantiza resultados específicos de inversión. 
                Las inversiones conllevan riesgos, incluida la posible pérdida de capital. El rendimiento 
                pasado no garantiza resultados futuros.
              </p>

              <h2>6. Confidencialidad</h2>
              <p>
                Toda la información compartida entre el cliente y Finvestor será tratada con estricta 
                confidencialidad, salvo cuando la divulgación sea requerida por ley o autoridad competente.
              </p>

              <h2>7. Propiedad Intelectual</h2>
              <p>
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software, 
                es propiedad de Finvestor y está protegido por las leyes de propiedad intelectual de Chile.
              </p>

              <h2>8. Modificaciones</h2>
              <p>
                Finvestor se reserva el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones serán efectivas una vez publicadas en este sitio web. 
                Es responsabilidad del cliente revisar periódicamente estos términos.
              </p>

              <h2>9. Ley Aplicable y Jurisdicción</h2>
              <p>
                Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia 
                será sometida a la jurisdicción de los tribunales ordinarios de justicia de Santiago.
              </p>

              <h2>10. Contacto</h2>
              <p>
                Para consultas sobre estos términos y condiciones:
              </p>
              <p>
                Email: contacto@finvestor.cl<br />
                Teléfono: +56 2 2234 5678<br />
                Dirección: Alonso de Córdova 5870, Oficina 413, Las Condes, Santiago
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
