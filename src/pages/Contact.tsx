import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/layout/Navbar';
import SiteFooter from '@/components/layout/SiteFooter';

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: '(956) 525-9866',
        href: 'tel:9565259866',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'sales@mastercontractor.us',
        href: 'mailto:sales@mastercontractor.us',
    },
    {
        icon: MapPin,
        label: 'Address',
        value: '4402 Austin Rd, Brownsville, TX 78521',
        href: 'https://maps.google.com/?q=4402+Austin+Rd+Brownsville+TX+78521',
    },
    {
        icon: Clock,
        label: 'Hours',
        value: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
        href: null,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // In production, this would send to your backend
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Thank you! We will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-charcoal">
            <Navbar />

            {/* Hero */}
            <section className="pt-24 pb-16 bg-charcoal">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact <span className="text-copper">Us</span>
                    </h1>
                    <p className="text-steel text-lg max-w-2xl mx-auto">
                        Ready to start your project? Get in touch with our team today.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-steel mb-8">
                                We're here to help with your construction needs. Reach out to us through any of the following channels, or fill out the form and we'll get back to you within 24 hours.
                            </p>

                            <div className="space-y-4 mb-8">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-copper" />
                                        </div>
                                        <div>
                                            <p className="text-steel text-sm">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="text-white hover:text-copper transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-white">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="rounded-xl overflow-hidden h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.4!2d-97.5067!3d25.9017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzA2LjEiTiA5N8KwMzAnMjQuMSJX!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Master Contractor Location"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-charcoal border border-slate-700 rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-steel mb-2">
                                        Name *
                                    </label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                        required
                                        className="bg-charcoal border-slate-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-steel mb-2">
                                        Email *
                                    </label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="your@email.com"
                                        required
                                        className="bg-charcoal border-slate-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-steel mb-2">
                                        Phone
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="(956) 555-1234"
                                        className="bg-charcoal border-slate-600 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-steel mb-2">
                                        Message *
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your project..."
                                        required
                                        rows={5}
                                        className="bg-charcoal border-slate-600 text-white"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-copper hover:bg-copper-dark text-charcoal font-semibold"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

export default Contact;
