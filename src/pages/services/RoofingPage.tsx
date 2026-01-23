import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Shield, Clock, Award, Wrench, Cloud, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/LeadForm';

const RoofingPage = () => {
    const services = [
        { title: 'Roof Inspections', description: 'Free comprehensive inspections to assess damage and wear.', icon: CheckCircle },
        { title: 'Shingle Roofing', description: 'Premium asphalt and architectural shingles for lasting protection.', icon: Home },
        { title: 'Metal Roofing', description: 'Durable, energy-efficient metal roofing systems.', icon: Shield },
        { title: 'Flat Roofs', description: 'Commercial-grade flat roof installation and repair.', icon: Wrench },
        { title: 'Storm Damage Repair', description: 'Fast response for hurricane and hail damage.', icon: Cloud },
        { title: 'Emergency Repairs', description: '24/7 emergency leak and damage repair services.', icon: Clock },
    ];

    const areas = [
        'Brownsville', 'McAllen', 'Harlingen', 'Edinburg', 'Mission',
        'Pharr', 'Weslaco', 'San Benito', 'Mercedes', 'La Feria'
    ];

    const stats = [
        { value: '500+', label: 'Roofs Completed' },
        { value: '11+', label: 'Years Experience' },
        { value: '100%', label: 'Licensed & Insured' },
        { value: '24/7', label: 'Emergency Service' },
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1920')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-copper/20 border border-copper/30 rounded-full px-4 py-2 mb-6">
                        <Shield className="w-4 h-4 text-copper" />
                        <span className="text-copper text-sm font-medium">Trusted by 500+ Valley Homeowners</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Expert Roofing Services
                        <span className="block text-copper">in the Rio Grande Valley</span>
                    </h1>

                    <p className="text-xl text-offwhite/80 mb-8 max-w-3xl mx-auto">
                        From Brownsville to McAllen, we've protected Valley homes for over 11 years.
                        Free inspections, quality materials, and bilingual crews ready to serve you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-copper hover:bg-copper-dark text-charcoal font-semibold text-lg px-8 py-6 h-auto"
                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Free Inspection <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-slate-500 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                        >
                            <a href="tel:+19565551234">
                                <Phone className="mr-2 w-5 h-5" /> Call Now
                            </a>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Free Estimates', 'Licensed & Insured', 'Bilingual Crews', '24/7 Emergency'].map((badge) => (
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
                            Complete Roofing <span className="text-copper">Solutions</span>
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            From minor repairs to complete roof replacements, we handle every roofing need for Valley homeowners and businesses.
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
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Valley Homeowners <span className="text-copper">Trust Us</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Local Expertise', desc: 'We understand Valley weather—hurricanes, heat, and humidity. Our roofs are built to last.' },
                                    { title: 'Quality Materials', desc: 'We use top-tier shingles and metal roofing from trusted manufacturers.' },
                                    { title: 'Transparent Pricing', desc: 'Honest quotes with no hidden fees. We work with your insurance.' },
                                    { title: 'Bilingual Team', desc: 'Our crews speak English and Spanish for clear communication.' },
                                ].map((item, i) => (
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
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
                                alt="Roofing work in progress"
                                className="rounded-xl w-full h-80 object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-copper text-charcoal p-4 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">11+</div>
                                <div className="text-sm">Years Serving the Valley</div>
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
                            Serving the Entire <span className="text-copper">Rio Grande Valley</span>
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
                            Get Your <span className="text-copper">Free Roof Inspection</span>
                        </h2>
                        <p className="text-steel text-lg">
                            Schedule your free inspection today. No obligations, no pressure—just honest advice.
                        </p>
                    </div>
                    <LeadForm />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-copper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        Protect Your Home Today
                    </h2>
                    <p className="text-charcoal/80 mb-8">
                        Don't wait for the next storm. Call now for a free inspection and quote.
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
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default RoofingPage;
