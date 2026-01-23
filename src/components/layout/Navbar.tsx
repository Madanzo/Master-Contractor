import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const PHONE_NUMBER = '9565259866';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const t = useTranslation();


    const navLinks = [
        { name: t.nav.home, href: '/' },
        { name: t.nav.services, href: '/services' },
        { name: t.nav.about, href: '/about' },
        { name: t.nav.portfolio, href: '/portfolio' },
        { name: t.nav.contact, href: '/contact' },
    ];

    const isActive = (href: string) => location.pathname === href;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/95 backdrop-blur-sm border-b border-steel/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/master-contractor-79b5c.firebasestorage.app/o/Logo%2Fmaester%20contractor%201%20bcard.png?alt=media&token=3fb4474a-24f0-4b28-9a51-a2aaac81ab67"
                            alt="Master Contractor"
                            className="h-14 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-medium transition-colors ${isActive(link.href)
                                    ? 'text-copper'
                                    : 'text-charcoal hover:text-copper'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageToggle />
                        <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-charcoal hover:text-copper">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">(956) 525-9866</span>
                        </a>
                        <Button asChild className="bg-copper hover:bg-copper-dark text-white font-semibold">
                            <Link to="/free-inspection">{t.nav.freeQuote}</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-charcoal"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-offwhite border-t border-steel/20">
                    <div className="px-4 py-4 space-y-3">
                        <div className="pb-3">
                            <LanguageToggle />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-2 text-base font-medium ${isActive(link.href)
                                    ? 'text-copper'
                                    : 'text-charcoal'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-steel/20">
                            <Button asChild className="w-full bg-copper hover:bg-copper-dark text-white font-semibold">
                                <Link to="/free-inspection" onClick={() => setMobileMenuOpen(false)}>
                                    {t.nav.freeQuote}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
