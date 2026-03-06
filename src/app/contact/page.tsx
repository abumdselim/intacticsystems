'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import siteConfig from '@/content/siteConfig';

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'Chattogram, Bangladesh',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+880 1XXX-XXXXXX',
    href: 'tel:+8801XXXXXXXXX',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-gray-50 min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="text-center px-4">
        <p className="text-[#00d1ff] font-bold text-sm tracking-wider uppercase">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold text-[#174d70] mt-2">
          Let&apos;s Build Something Bold Together
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            {contactCards.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href ? { href: item.href } : {};

              return (
                <Wrapper
                  key={item.title}
                  {...wrapperProps}
                  className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#174d70]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold text-gray-900">{item.detail}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Right — Lead Form */}
          <div className="bg-white shadow-xl p-8 rounded-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-[#00d1ff] focus:ring-1 focus:ring-[#00d1ff]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-[#00d1ff] focus:ring-1 focus:ring-[#00d1ff]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 outline-none transition-all focus:border-[#00d1ff] focus:ring-1 focus:ring-[#00d1ff]"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software</option>
                    <option value="web-design">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="bulk-sms">Bulk SMS</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-[#00d1ff] focus:ring-1 focus:ring-[#00d1ff] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#174d70] text-white py-3 rounded-lg font-semibold transition-colors hover:bg-[#0d3550]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
