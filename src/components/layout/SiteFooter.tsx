import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const COMPANY_INFO = {
    phone: '(956) 525-9866',
    phoneLink: 'tel:9565259866',
    email: 'sales@mastercontractor.us',
    address: '4402 Austin Rd, Brownsville, TX 78521',
    mapsLink: 'https://maps.google.com/?q=4402+Austin+Rd+Brownsville+TX+78521',
};

const footerLinks = {
    services: [
        { name: 'Roofing', href: '/services/roofing' },
        { name: 'Commercial', href: '/services/commercial' },
        { name: 'Residential', href: '/services/residential' },
        { name: 'Project Management', href: '/services' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
        { name: 'Free Inspection', href: '/free-inspection' },
    ],
};

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal border-t border-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-xl font-bold text-white">
                            Master<span className="text-copper">Contractor</span>
                        </Link>
                        <p className="mt-4 text-steel text-sm">
                            Building your dreams into reality since 2015. Licensed, insured, and committed to excellence.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-steel hover:text-copper text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-steel hover:text-copper text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={COMPANY_INFO.phoneLink}
                                    className="flex items-center gap-2 text-steel hover:text-copper text-sm transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    {COMPANY_INFO.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${COMPANY_INFO.email}`}
                                    className="flex items-center gap-2 text-steel hover:text-copper text-sm transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    {COMPANY_INFO.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={COMPANY_INFO.mapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2 text-steel hover:text-copper text-sm transition-colors"
                                >
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    {COMPANY_INFO.address}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Master Contractor. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Serving the Rio Grande Valley since 2015
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;
