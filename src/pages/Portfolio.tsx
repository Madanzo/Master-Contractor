import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Roofing'];

const projects = [
    {
        title: 'Commercial Office Building',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
        description: 'Modern 3-story office complex in McAllen',
    },
    {
        title: 'Residential Roof Replacement',
        category: 'Roofing',
        image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600',
        description: 'Complete shingle replacement for family home',
    },
    {
        title: 'Custom Family Home',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
        description: '4-bedroom custom build in Brownsville',
    },
    {
        title: 'Warehouse Facility',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600',
        description: '50,000 sq ft distribution center',
    },
    {
        title: 'Retail Shopping Center',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
        description: 'Strip mall renovation in Harlingen',
    },
    {
        title: 'Commercial Flat Roof',
        category: 'Roofing',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
        description: 'TPO roofing system installation',
    },
    {
        title: 'Home Addition',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
        description: 'Master bedroom and bathroom addition',
    },
    {
        title: 'Manufacturing Plant',
        category: 'Industrial',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600',
        description: 'Food processing facility expansion',
    },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-16 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-amber-500">Portfolio</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Browse our completed projects across commercial, residential, industrial, and roofing sectors.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                        ? 'bg-amber-500 text-slate-900'
                                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-amber-500 text-slate-900 text-xs font-semibold px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Let's add your project to our portfolio.
                    </p>
                    <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                        <Link to="/free-inspection">Get Free Quote</Link>
                    </Button>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default Portfolio;
