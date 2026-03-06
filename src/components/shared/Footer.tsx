import Link from 'next/link';
import { Facebook, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import siteConfig, { Service, NavItem } from '@/content/siteConfig';

export function Footer() {
  const { services, navItems } = siteConfig;

  return (
    <footer className="bg-[#0a2538] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Vision */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">Intactic</span>
                <span className="text-[#00d1ff]">Systems</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.siteDescription.en}
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering businesses with innovative digital solutions — from
              custom software to premium branding.
            </p>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service: Service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="text-sm text-gray-400 transition-colors hover:text-[#00d1ff]"
                  >
                    {service.title.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item: NavItem) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#00d1ff]"
                  >
                    {item.label.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect With Us */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#00d1ff]"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href="tel:09678791213"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#00d1ff]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>09678-791213</span>
              </a>

              <a
                href="https://wa.me/8801410177888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#00d1ff]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp: 01410-177888</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com/intacticsys"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 transition-colors hover:text-[#00d1ff] hover:bg-white/10"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/intacticsys"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 transition-colors hover:text-[#00d1ff] hover:bg-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 Intactic Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
