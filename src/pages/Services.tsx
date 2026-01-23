import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Wrench, ClipboardList, HardHat, Zap, LayoutGrid, Droplets, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';

const services = [
    {
        title: 'Roofing Services',
        description: 'Complete roofing solutions including installation, repair, and maintenance for residential and commercial properties. We handle everything from minor repairs to full roof replacements.',
        icon: Home,
        features: ['Roof Inspections', 'Shingle Installation', 'Metal Roofing', 'Flat Roofs', 'Emergency Repairs', 'Storm Damage'],
        href: '/services/roofing',
        image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600',
    },
    {
        title: 'Commercial Construction',
        description: 'Full-scale commercial building projects from ground-up construction to major renovations. We serve retail, office, industrial, and institutional clients.',
        icon: Building2,
        features: ['New Construction', 'Tenant Improvements', 'Renovations', 'Industrial Facilities', 'Retail Spaces', 'Office Buildings'],
        href: '/services/commercial',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    },
    {
        title: 'Residential Construction',
        description: 'Custom home building and residential improvements. From new construction to additions and remodeling, we bring your vision to life.',
        icon: HardHat,
        features: ['Custom Homes', 'Home Additions', 'Kitchen Remodels', 'Bathroom Renovations', 'Outdoor Living', 'Garages'],
        href: '/services/residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    },
    {
        title: 'Electrical Services',
        description: 'Licensed electricians providing safe, reliable electrical services for homes and businesses. From panel upgrades to complete rewiring.',
        icon: Zap,
        features: ['Panel Upgrades', 'Rewiring', 'Lighting Installation', 'Outlet Installation', 'Ceiling Fans', 'Emergency Repairs'],
        href: '/services/electrical',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600',
    },
    {
        title: 'Drywall & Sheetrock',
        description: 'Professional drywall installation, repair, and finishing. Expert texturing and seamless repairs for homes and commercial spaces.',
        icon: LayoutGrid,
        features: ['Drywall Installation', 'Drywall Repair', 'Texture Application', 'Popcorn Ceiling Removal', 'Finishing & Taping', 'Soundproofing'],
        href: '/services/drywall',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600',
    },
    {
        title: 'Plumbing Services',
        description: 'Licensed plumbers providing reliable plumbing services. From leak repairs to water heater installation and 24/7 emergency service.',
        icon: Droplets,
        features: ['Leak Repair', 'Water Heaters', 'Drain Cleaning', 'Fixture Installation', 'Pipe Repair', 'Emergency Service'],
        href: '/services/plumbing',
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600',
    },
    {
        title: 'Painting Services',
        description: 'Professional painting for interiors and exteriors. Premium paints, expert application, and finishes that last.',
        icon: Paintbrush,
        features: ['Interior Painting', 'Exterior Painting', 'Cabinet Painting', 'Commercial Painting', 'Pressure Washing', 'Color Consultation'],
        href: '/services/painting',
        image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600',
    },
    {
        title: 'Project Management',
        description: 'Expert project oversight ensuring your construction project stays on time, within budget, and meets the highest quality standards.',
        icon: ClipboardList,
        features: ['Budget Management', 'Timeline Coordination', 'Contractor Oversight', 'Quality Control', 'Permit Handling', 'Progress Reports'],
        href: '/contact',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600',
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-16 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-copper">Services</span>
                    </h1>
                    <p className="text-steel text-lg max-w-2xl mx-auto">
                        Comprehensive construction solutions for commercial, residential, and industrial projects in the Rio Grande Valley.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="rounded-xl w-full h-64 lg:h-80 object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <service.icon className="w-8 h-8 text-copper" />
                                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-steel mb-6">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-steel text-sm">
                                                <div className="w-1.5 h-1.5 bg-copper rounded-full" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Button asChild className="bg-copper hover:bg-copper-dark text-charcoal font-semibold">
                                        <Link to={service.href}>
                                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-charcoal">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-steel mb-8">
                        Every project is unique. Let's discuss your specific requirements.
                    </p>
                    <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-charcoal font-semibold">
                        <Link to="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default Services;
