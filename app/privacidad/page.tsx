import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Finvestor',
  description: 'Política de privacidad de Finvestor. Conoce cómo protegemos tu información personal.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Política de Privacidad</h1>
              <p className="text-xl text-secondary-200">
                Última actualización: Octubre 2025
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Información que Recopilamos</h2>
              <p>
                En Finvestor recopilamos la información necesaria para brindar nuestros servicios financieros de manera efectiva. 
                Esta información puede incluir:
              </p>
              <ul>
                <li>Datos personales: nombre, RUT, dirección, teléfono, correo electrónico</li>
                <li>Información financiera: ingresos, patrimonio, inversiones</li>
                <li>Documentación legal: escrituras, poderes, certificados</li>
                <li>Datos de navegación en nuestro sitio web</li>
              </ul>

              <h2>2. Uso de la Información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul>
                <li>Prestar nuestros servicios financieros</li>
                <li>Analizar tu perfil de riesgo e inversión</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Comunicarnos contigo sobre tus inversiones y patrimonio</li>
              </ul>

              <h2>3. Protección de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal 
                contra acceso no autorizado, pérdida, alteración o divulgación. Utilizamos encriptación SSL/TLS para todas 
                las transmisiones de datos sensibles.
              </p>

              <h2>4. Compartición de Información</h2>
              <p>
                No vendemos ni alquilamos tu información personal. Podemos compartir información con:
              </p>
              <ul>
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Autoridades regulatorias cuando sea legalmente requerido</li>
                <li>Instituciones financieras necesarias para ejecutar transacciones</li>
              </ul>

              <h2>5. Tus Derechos</h2>
              <p>De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, tienes derecho a:</p>
              <ul>
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos incorrectos o incompletos</li>
                <li>Cancelar tu información bajo ciertas circunstancias</li>
                <li>Oponerte al tratamiento de tus datos</li>
              </ul>

              <h2>6. Cookies</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, 
                analizar el tráfico y personalizar contenido. Puedes configurar tu navegador para rechazar cookies, 
                aunque esto puede afectar la funcionalidad del sitio.
              </p>

              <h2>7. Contacto</h2>
              <p>
                Para ejercer tus derechos o realizar consultas sobre esta política de privacidad, 
                puedes contactarnos en:
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
