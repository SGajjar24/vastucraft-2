import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    location: string;
    photo?: string;
    rating: number;
    quote: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
    autoPlayDelay?: number;
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
    testimonials,
    autoPlayDelay = 5000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused && testimonials.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, autoPlayDelay);

            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused, testimonials.length, autoPlayDelay]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (testimonials.length === 0) return null;

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Main Testimonial Display */}
            <div className="glass-panel p-8 md:p-12 rounded-2xl min-h-[320px] flex flex-col justify-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={20}
                            className={`${i < currentTestimonial.rating
                                    ? 'text-gold fill-gold'
                                    : 'text-stone-600'
                                }`}
                        />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-serif text-center text-stone-100 mb-8 leading-relaxed">
                    "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-4">
                    {currentTestimonial.photo && (
                        <img
                            src={currentTestimonial.photo}
                            alt={currentTestimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                        />
                    )}
                    <div className="text-center">
                        <p className="font-semibold text-stone-100 text-lg">
                            {currentTestimonial.name}
                        </p>
                        <p className="text-sm text-stone-400">{currentTestimonial.location}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 text-stone-300 hover:text-gold hover:border-gold/30 transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-surface/80 backdrop-blur-sm border border-white/10 text-stone-300 hover:text-gold hover:border-gold/30 transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}

            {/* Dots Navigation */}
            {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-gold w-8'
                                    : 'bg-stone-600 hover:bg-stone-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TestimonialsCarousel;
