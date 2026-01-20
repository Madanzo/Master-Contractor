import { Link } from 'react-router-dom';
import { Award, Users, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';

const values = [
    {
        title: 'Quality First',
        description: 'We never compromise on materials or workmanship. Every project meets the highest standards.',
        icon: Award,
    },
    {
        title: 'Customer Focus',
        description: 'Your satisfaction is our priority. We communicate clearly and deliver on our promises.',
        icon: Users,
    },
    {
        title: 'Integrity',
        description: 'Honest pricing, transparent timelines, and ethical business practices in everything we do.',
        icon: Target,
    },
    {
        title: 'Safety',
        description: 'Strict safety protocols protect our team, your property, and everyone on the job site.',
        icon: Shield,
    },
];

const milestones = [
    { year: '2015', event: 'Founded in Brownsville, TX' },
    { year: '2017', event: 'Expanded to commercial projects' },
    { year: '2019', event: 'Reached 100+ completed projects' },
    { year: '2021', event: 'Added industrial construction services' },
    { year: '2024', event: 'Celebrating 500+ projects completed' },
];

const About = () => {
    return (
        <div className="min-h-screen bg-slate-900">
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-16 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-amber-500">Master Contractor</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Building the Rio Grande Valley since 2015 with quality, integrity, and a commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                                alt="Construction site"
                                className="rounded-xl w-full h-80 object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-slate-400 mb-4">
                                Founded in 2015, Master Contractor has been providing quality construction services to the Rio Grande Valley for over 11 years. What started as a small roofing company has grown into a full-service construction firm handling projects of all sizes.
                            </p>
                            <p className="text-slate-400 mb-4">
                                Our team has completed a wide variety of projects including commercial buildings, residential homes, and industrial facilities. We pride ourselves on our attention to detail and commitment to customer satisfaction.
                            </p>
                            <p className="text-slate-400">
                                Today, we continue to serve Brownsville, McAllen, Harlingen, and the entire Rio Grande Valley with the same dedication to quality that has defined us from day one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-center">
                                <value.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                                <p className="text-slate-400 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
                    <div className="space-y-6">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="text-amber-500 font-bold text-xl w-16 flex-shrink-0">
                                    {milestone.year}
                                </div>
                                <div className="flex-1 bg-slate-800 border border-slate-700 rounded-lg p-4">
                                    <p className="text-white">{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-amber-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Let's Build Something Great Together
                    </h2>
                    <p className="text-slate-800 mb-8">
                        Contact us today to discuss your next project.
                    </p>
                    <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                        <Link to="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default About;
