import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { PRICING_PLANS, PRICING_FAQS } from '../constants';
import Reveal from '../components/Reveal';

const Pricing: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-primary min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/30 to-primary"></div>

                <div className="relative container-custom text-center">
                    <Reveal>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-100 mb-6">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                            Choose the perfect plan for your Vastu journey. All plans include our AI-powered consultations.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                        {PRICING_PLANS.map((plan, index) => (
                            <Reveal key={plan.name} delay={index * 100} className="h-full" fullHeight>
                                <div
                                    className={`relative rounded-3xl p-1 transition-all duration-300 hover:scale-105 h-full flex flex-col
                                    ${plan.popular
                                            ? 'bg-gradient-to-br from-gold via-gold-dark to-gold shadow-2xl shadow-gold/30'
                                            : 'bg-gradient-to-br from-white/10 to-white/5 hover:from-gold/20 hover:to-gold/10'
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                            <span className="bg-primary text-gold px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className={`h-full rounded-3xl p-8 lg:p-10 flex flex-col
                                        ${plan.popular ? 'bg-gradient-to-br from-gold to-gold-dark' : 'bg-surface'}
                                    `}>
                                        {/* Header */}
                                        <div className="text-center mb-8">
                                            <h3 className={`text-2xl lg:text-3xl font-serif font-bold mb-3 ${plan.popular ? 'text-primary' : 'text-stone-100'}`}>
                                                {plan.name}
                                            </h3>
                                            <p className={`text-sm mb-8 ${plan.popular ? 'text-primary/70' : 'text-stone-400'}`}>
                                                {plan.description}
                                            </p>

                                            {/* Price */}
                                            <div className="mb-6">
                                                {plan.price !== null ? (
                                                    <div className="flex items-baseline justify-center gap-1">
                                                        <span className={`text-6xl font-bold ${plan.popular ? 'text-primary' : 'text-gold'}`}>
                                                            ${plan.price}
                                                        </span>
                                                        <span className={`text-lg font-medium ${plan.popular ? 'text-primary/60' : 'text-stone-500'}`}>
                                                            /{plan.interval}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className={`text-5xl font-bold ${plan.popular ? 'text-primary' : 'text-gold'}`}>
                                                        Custom
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check
                                                        size={20}
                                                        className={`shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-gold'}`}
                                                    />
                                                    <span className={`text-sm leading-relaxed ${plan.popular ? 'text-primary/90' : 'text-stone-300'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <Link
                                            to={plan.ctaLink}
                                            className={`block text-center py-4 px-8 rounded-full font-bold text-base transition-all duration-300 
                                                ${plan.popular
                                                    ? 'bg-primary text-gold hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105'
                                                    : 'bg-gradient-to-r from-gold to-gold-dark text-primary hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105'
                                                }`}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative py-20">
                <div className="container-custom max-w-3xl">
                    <Reveal>
                        <h2 className="text-4xl font-serif font-bold text-center text-stone-100 mb-12">
                            Frequently Asked Questions
                        </h2>
                    </Reveal>

                    <div className="space-y-4">
                        {PRICING_FAQS.map((faq, index) => (
                            <Reveal key={index} delay={index * 50}>
                                <div className="bg-surface border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition-colors">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-semibold text-stone-100">{faq.question}</span>
                                        <div
                                            className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                                }`}
                                        >
                                            <X size={20} className={`text-gold transition-transform ${openFaq === index ? '' : 'rotate-45'}`} />
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="px-6 pb-5 text-stone-400">{faq.answer}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 border-t border-white/10">
                <div className="container-custom text-center">
                    <Reveal>
                        <h3 className="text-3xl font-serif font-bold text-stone-100 mb-4">
                            Still have questions?
                        </h3>
                        <p className="text-stone-400 mb-8">
                            Our team is here to help you choose the right plan for your needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block btn-primary text-base px-8 py-3"
                        >
                            Contact Us
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
