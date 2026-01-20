import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';

const stats = [
    { value: '11+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Licensed & Insured' },
    { value: '24/7', label: 'Support Available' },
];

const services = [
    {
        title: 'Roofing',
        description: 'Complete roofing solutions for residential and commercial properties.',
        icon: Shield,
        href: '/services/roofing',
    },
    {
        title: 'Commercial Construction',
        description: 'Full-scale commercial building and renovation projects.',
        icon: Award,
        href: '/services/commercial',
    },
    {
        title: 'Residential Construction',
        description: 'Custom homes and home improvement services.',
        icon: Users,
        href: '/services/residential',
    },
    {
        title: 'Project Management',
        description: 'Expert oversight from planning to completion.',
        icon: Clock,
        href: '/services',
    },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')] bg-cover bg-center opacity-20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Building Your Dreams
                        <span className="block text-copper">Into Reality</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-offwhite/80 mb-8 max-w-3xl mx-auto">
                        Trusted by families and businesses across the Valley. Bilingual crews, on-time delivery, and craftsmanship that stands the test of time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-charcoal font-semibold text-lg px-8 py-6 h-auto">
                            <Link to="/free-inspection">
                                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-charcoal text-lg px-8 py-6 h-auto">
                            <Link to="/portfolio">View Our Work</Link>
                        </Button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-copper rounded-full mt-2" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-charcoal/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-copper mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-steel text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Services
                        </h2>
                        <p className="text-steel text-lg max-w-2xl mx-auto">
                            Comprehensive construction solutions for every project size and scope.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                to={service.href}
                                className="group bg-charcoal/50 border border-slate-700 rounded-xl p-6 hover:border-copper/50 transition-all hover:-translate-y-1"
                            >
                                <service.icon className="w-10 h-10 text-copper mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-copper transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-steel text-sm">
                                    {service.description}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-charcoal">
                            <Link to="/services">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-copper">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-charcoal text-lg mb-8">
                        Get a free consultation and quote today. No obligations.
                    </p>
                    <Button asChild size="lg" className="bg-charcoal hover:bg-charcoal text-white font-semibold text-lg px-8 py-6 h-auto">
                        <Link to="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default Home;
