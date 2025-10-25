'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Gestión de Inversiones', href: '/servicios/inversiones' },
    { name: 'Gestión Patrimonial', href: '/servicios/patrimonial' },
    { name: 'Asesoría Financiera', href: '/servicios/asesoria' },
    { name: 'Servicios Corporativos', href: '/servicios/corporativos' },
  ];

  const company = [
    { name: 'Sobre Nosotros', href: '/nosotros' },
    { name: 'Nuestro Equipo', href: '/nosotros#equipo' },
    { name: 'Valores', href: '/nosotros#valores' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const legal = [
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Aviso Legal', href: '/legal' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/logo-sm.png"
              alt="Finvestor"
              width={180}
              height={180}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-secondary-300 text-sm leading-relaxed">
              Servicios financieros de excelencia para empresas y patrimonios. 
              Comprometidos con el crecimiento y la seguridad financiera de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-300 text-sm">
                  Alonso de Córdova 5870, Oficina 413<br />
                  Las Condes, Santiago
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:contacto@finvestor.cl"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  contacto@finvestor.cl
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+56222345678"
                  className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  +56 2 2234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Finvestor. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
