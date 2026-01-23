import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Building2, Clock, Award, Wrench, Users, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';
import LeadForm from '@/components/LeadForm';

const CommercialPage = () => {
    const services = [
        { title: 'New Construction', description: 'Ground-up commercial buildings tailored to your business needs.', icon: Building2 },
        { title: 'Tenant Improvements', description: 'Transform spaces for new tenants or business expansions.', icon: Wrench },
        { title: 'Retail Build-Outs', description: 'Custom retail spaces designed for customer experience.', icon: Users },
        { title: 'Office Renovations', description: 'Modern office spaces that boost productivity.', icon: HardHat },
        { title: 'Industrial Facilities', description: 'Warehouses, distribution centers, and manufacturing plants.', icon: Building2 },
        { title: 'Restaurant Construction', description: 'Full-service restaurant and food service builds.', icon: Clock },
    ];

    const areas = [
        'Brownsville', 'McAllen', 'Harlingen', 'Edinburg', 'Mission',
        'Pharr', 'Weslaco', 'San Benito', 'Mercedes', 'La Feria'
    ];

    const stats = [
        { value: '200+', label: 'Commercial Projects' },
        { value: '11+', label: 'Years Experience' },
        { value: '$50M+', label: 'Projects Delivered' },
        { value: '100%', label: 'Licensed & Bonded' },
    ];

    const industries = [
        'Retail & Shopping Centers',
        'Medical & Healthcare',
        'Restaurants & Hospitality',
        'Office Buildings',
        'Industrial & Warehousing',
        'Educational Facilities',
        'Religious Institutions',
        'Government Buildings'
    ];

    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-copper/20 border border-copper/30 rounded-full px-4 py-2 mb-6">
                        <Building2 className="w-4 h-4 text-copper" />
                        <span className="text-copper text-sm font-medium">Trusted by Valley Businesses</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Commercial Construction
                        <span className="block text-copper">for the Rio Grande Valley</span>
                    </h1>

                    <p className="text-xl text-offwhite/80 mb-8 max-w-3xl mx-auto">
                        From Brownsville to McAllen, we build the spaces where Valley businesses thrive.
                        New construction, renovations, and tenant improvements—on time and on budget.
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
                            <a href="tel:+19565259866">
                                <Phone className="mr-2 w-5 h-5" /> Call Now
                            </a>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Licensed & Bonded', 'Free Estimates', 'On-Time Delivery', 'Bilingual Team'].map((badge) => (
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
                            Commercial Construction <span className="text-copper">Services</span>
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            Full-service commercial construction from concept to completion. We build spaces that drive business success.
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

            {/* Industries Served */}
            <section className="py-20 bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Industries <span className="text-copper">We Serve</span>
                            </h2>
                            <p className="text-steel mb-6">
                                We've delivered successful projects across every major industry in the Valley.
                                Our experience means we understand the unique requirements of your business.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {industries.map((industry, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-copper flex-shrink-0" />
                                        <span className="text-steel text-sm">{industry}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
                                alt="Commercial building"
                                className="rounded-xl w-full h-80 object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-copper text-charcoal p-4 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">$50M+</div>
                                <div className="text-sm">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Valley Businesses <span className="text-copper">Trust Us</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Local Knowledge', desc: 'We know Valley codes, permits, and the construction landscape.', icon: Award },
                            { title: 'On-Time Delivery', desc: 'We respect your timeline because time is money in business.', icon: Clock },
                            { title: 'Quality First', desc: 'Premium materials and skilled craftsmanship in every project.', icon: CheckCircle },
                            { title: 'Transparent Pricing', desc: 'Detailed estimates with no hidden costs or surprises.', icon: Building2 },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 bg-charcoal/50 border border-slate-700 rounded-xl">
                                <item.icon className="w-10 h-10 text-copper mx-auto mb-4" />
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-steel text-sm">{item.desc}</p>
                            </div>
                        ))}
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
                            Start Your <span className="text-copper">Commercial Project</span>
                        </h2>
                        <p className="text-steel text-lg">
                            Get a free consultation and estimate. Let's discuss how we can bring your vision to life.
                        </p>
                    </div>
                    <LeadForm />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-copper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">
                        Ready to Build Your Business Space?
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
                            <a href="tel:+19565259866">
                                <Phone className="mr-2 w-5 h-5" /> (956) 525-9866
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

export default CommercialPage;
