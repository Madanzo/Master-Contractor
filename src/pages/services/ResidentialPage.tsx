import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Home, Clock, Award, Wrench, Users, HardHat, Bath, ChefHat, Trees } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/LeadForm';

const ResidentialPage = () => {
    const services = [
        { title: 'Custom Home Building', description: 'Build your dream home from the ground up, tailored to your vision.', icon: Home },
        { title: 'Home Additions', description: 'Expand your living space with seamless room additions.', icon: HardHat },
        { title: 'Kitchen Remodeling', description: 'Modern, functional kitchens designed for your lifestyle.', icon: ChefHat },
        { title: 'Bathroom Renovations', description: 'Luxurious bathroom upgrades from simple to spa-like.', icon: Bath },
        { title: 'Outdoor Living', description: 'Patios, pergolas, outdoor kitchens, and entertainment spaces.', icon: Trees },
        { title: 'General Renovations', description: 'Complete home makeovers and structural improvements.', icon: Wrench },
    ];

    const areas = [
        'Brownsville', 'McAllen', 'Harlingen', 'Edinburg', 'Mission',
        'Pharr', 'Weslaco', 'San Benito', 'Mercedes', 'La Feria'
    ];

    const stats = [
        { value: '300+', label: 'Homes Built & Renovated' },
        { value: '11+', label: 'Years Experience' },
        { value: '100%', label: 'Licensed & Insured' },
        { value: '5★', label: 'Customer Rating' },
    ];

    const process = [
        { step: '1', title: 'Consultation', desc: 'Free in-home consultation to understand your vision and needs.' },
        { step: '2', title: 'Design & Planning', desc: 'Detailed plans, 3D renders, and transparent cost estimates.' },
        { step: '3', title: 'Construction', desc: 'Expert crews bring your vision to life with quality craftsmanship.' },
        { step: '4', title: 'Final Walkthrough', desc: 'Thorough inspection and handover of your completed project.' },
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-copper/20 border border-copper/30 rounded-full px-4 py-2 mb-6">
                        <Home className="w-4 h-4 text-copper" />
                        <span className="text-copper text-sm font-medium">Trusted by Valley Families</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Custom Home Building
                        <span className="block text-copper">& Renovations in the Valley</span>
                    </h1>

                    <p className="text-xl text-offwhite/80 mb-8 max-w-3xl mx-auto">
                        From Brownsville to McAllen, we build and renovate homes that Valley families love.
                        Custom homes, additions, and remodels—crafted with care and built to last.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button
                            size="lg"
                            className="bg-copper hover:bg-copper-dark text-charcoal font-semibold text-lg px-8 py-6 h-auto"
                            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
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
                        {['Free Estimates', 'Licensed & Insured', 'Bilingual Crews', 'Quality Guaranteed'].map((badge) => (
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
                            Residential Construction <span className="text-copper">Services</span>
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            Whether you're building new or transforming your existing home, we deliver quality craftsmanship that stands the test of time.
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

            {/* Our Process */}
            <section className="py-20 bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our <span className="text-copper">Process</span>
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            A simple, transparent process from start to finish. We keep you informed every step of the way.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <div key={i} className="relative">
                                <div className="bg-charcoal border border-slate-700 rounded-xl p-6 h-full">
                                    <div className="w-12 h-12 bg-copper text-charcoal rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-steel text-sm">{item.desc}</p>
                                </div>
                                {i < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-copper/30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600"
                                alt="Beautiful home interior"
                                className="rounded-xl w-full h-96 object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-copper text-charcoal p-4 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">300+</div>
                                <div className="text-sm">Happy Families</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Why Valley Families <span className="text-copper">Choose Us</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: 'Local Expertise', desc: 'We understand Valley living—from the climate to the lifestyle. We build homes that thrive here.' },
                                    { title: 'Quality Materials', desc: 'We use premium materials from trusted suppliers, built to withstand Valley heat and storms.' },
                                    { title: 'Transparent Pricing', desc: 'Detailed quotes with no hidden fees. We work with your budget and keep you informed.' },
                                    { title: 'Bilingual Team', desc: 'Our crews speak English and Spanish for clear, easy communication throughout your project.' },
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
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-charcoal/50">
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
                            Start Your <span className="text-copper">Dream Home Project</span>
                        </h2>
                        <p className="text-steel text-lg">
                            Get a free in-home consultation. Let's discuss how we can bring your vision to life.
                        </p>
                    </div>
                    <LeadForm />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-copper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        Ready to Transform Your Home?
                    </h2>
                    <p className="text-charcoal/80 mb-8">
                        Call today for a free consultation and detailed estimate.
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

export default ResidentialPage;
