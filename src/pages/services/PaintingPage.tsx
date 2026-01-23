import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Paintbrush, Clock, Award, Home, Building2, Droplets, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/LeadForm';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const PaintingPage = () => {
    const t = useTranslation();

    const services = [
        { title: t.painting.interiorPainting, description: t.painting.interiorPaintingDesc, icon: Home },
        { title: t.painting.exteriorPainting, description: t.painting.exteriorPaintingDesc, icon: Building2 },
        { title: t.painting.cabinetPainting, description: t.painting.cabinetPaintingDesc, icon: Paintbrush },
        { title: t.painting.commercialPainting, description: t.painting.commercialPaintingDesc, icon: Building2 },
        { title: t.painting.pressureWashing, description: t.painting.pressureWashingDesc, icon: Droplets },
        { title: t.painting.colorConsultation, description: t.painting.colorConsultationDesc, icon: Sparkles },
    ];

    const areas = [
        'Brownsville', 'McAllen', 'Harlingen', 'Edinburg', 'Mission',
        'Pharr', 'Weslaco', 'San Benito', 'Mercedes', 'La Feria'
    ];

    const stats = [
        { value: '400+', label: t.painting.servicesTitle },
        { value: '11+', label: t.home.yearsExperience },
        { value: '100%', label: t.home.licensedInsured },
        { value: '5★', label: t.servicePage.qualityGuaranteed },
    ];

    const whyChoose = [
        { title: t.painting.premiumPaints, desc: t.painting.premiumPaintsDesc },
        { title: t.painting.expertPrep, desc: t.painting.expertPrepDesc },
        { title: t.painting.cleanEfficient, desc: t.painting.cleanEfficientDesc },
        { title: t.painting.bilingualTeam, desc: t.painting.bilingualTeamDesc },
    ];

    const badges = [
        t.servicePage.freeEstimates,
        t.servicePage.licensedInsured,
        t.servicePage.premiumPaints,
        t.servicePage.bilingualTeam
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Language Toggle */}
            <div className="fixed top-20 right-4 z-50">
                <LanguageToggle />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-copper/20 border border-copper/30 rounded-full px-4 py-2 mb-6">
                        <Paintbrush className="w-4 h-4 text-copper" />
                        <span className="text-copper text-sm font-medium">{t.servicePage.professionalPainting}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.painting.title}
                        <span className="block text-copper">{t.servicePage.inTheValley}</span>
                    </h1>

                    <p className="text-xl text-offwhite/80 mb-8 max-w-3xl mx-auto">
                        {t.painting.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-copper hover:bg-copper-dark text-charcoal font-semibold text-lg px-8 py-6 h-auto"
                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t.servicePage.getFreeEstimate} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-slate-500 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                        >
                            <a href="tel:+19565551234">
                                <Phone className="mr-2 w-5 h-5" /> {t.servicePage.callNow}
                            </a>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {badges.map((badge) => (
                            <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-copper" />
                                <span className="text-sm text-white">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-charcoal border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-copper mb-1">{stat.value}</div>
                                <div className="text-steel text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t.painting.servicesTitle}
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            {t.painting.servicesSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-charcoal/50 border border-slate-700 rounded-xl p-6 hover:border-copper/50 transition-all"
                            >
                                <service.icon className="w-10 h-10 text-copper mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-steel text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600"
                                alt="Painting work"
                                className="rounded-xl w-full h-80 object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-copper text-charcoal p-4 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">400+</div>
                                <div className="text-sm">{t.home.projectsCompleted}</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {t.painting.whyChooseTitle}
                            </h2>
                            <div className="space-y-4">
                                {whyChoose.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-copper/20 rounded-lg flex items-center justify-center">
                                            <Award className="w-4 h-4 text-copper" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-steel text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t.servicePage.servingTheValley} <span className="text-copper">{t.servicePage.rioGrandeValley}</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {areas.map((area) => (
                            <span
                                key={area}
                                className="bg-slate-800 text-steel px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-colors"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <section className="py-20 bg-gradient-to-b from-charcoal to-charcoal/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {t.painting.formTitle}
                        </h2>
                        <p className="text-steel text-lg">
                            {t.painting.formSubtitle}
                        </p>
                    </div>
                    <LeadForm />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-copper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        {t.painting.ctaTitle}
                    </h2>
                    <p className="text-charcoal/80 mb-8">
                        {t.painting.ctaSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold"
                        >
                            <a href="tel:+19565551234">
                                <Phone className="mr-2 w-5 h-5" /> (956) 555-1234
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-charcoal text-charcoal hover:bg-charcoal/10"
                        >
                            <Link to="/contact">{t.servicePage.contactUs}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default PaintingPage;
