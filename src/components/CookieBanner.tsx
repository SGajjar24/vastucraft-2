import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface CookiePreferences {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        essential: true,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after 1 second delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const saveCookieConsent = (prefs: CookiePreferences) => {
        localStorage.setItem('cookie-consent', JSON.stringify(prefs));
        localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());

        // Disable Google Analytics if not consented
        if (!prefs.analytics) {
            (window as any)['ga-disable-GA_MEASUREMENT_ID'] = true;
        }

        setIsVisible(false);
    };

    const acceptAll = () => {
        saveCookieConsent({
            essential: true,
            analytics: true,
            marketing: true
        });
    };

    const rejectAll = () => {
        saveCookieConsent({
            essential: true,
            analytics: false,
            marketing: false
        });
    };

    const savePreferences = () => {
        saveCookieConsent(preferences);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-4xl bg-surface border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden animate-slide-up">
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-serif font-bold text-stone-100 mb-2">
                                🍪 Cookie Preferences
                            </h3>
                            <p className="text-sm text-stone-400">
                                We use cookies to enhance your experience, analyze site traffic, and personalize content.
                                You can customize your preferences or accept all cookies.
                            </p>
                        </div>
                        <button
                            onClick={rejectAll}
                            className="text-stone-400 hover:text-stone-100 transition-colors"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Cookie Categories (shown when "Customize" is clicked) */}
                {showDetails && (
                    <div className="p-6 border-b border-white/10 space-y-4 bg-primary/50">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-semibold text-stone-100 mb-1">Essential Cookies</h4>
                                <p className="text-xs text-stone-400">
                                    Required for the website to function properly. Cannot be disabled.
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="w-12 h-6 rounded-full bg-gold flex items-center px-1">
                                    <div className="w-4 h-4 rounded-full bg-primary ml-auto"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-semibold text-stone-100 mb-1">Analytics Cookies</h4>
                                <p className="text-xs text-stone-400">
                                    Help us understand how visitors interact with our website (Google Analytics).
                                </p>
                            </div>
                            <button
                                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                                className="shrink-0"
                            >
                                <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics ? 'bg-gold' : 'bg-white/10'
                                    }`}>
                                    <div className={`w-4 h-4 rounded-full bg-primary transition-transform ${preferences.analytics ? 'ml-auto' : ''
                                        }`}></div>
                                </div>
                            </button>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h4 className="font-semibold text-stone-100 mb-1">Marketing Cookies</h4>
                                <p className="text-xs text-stone-400">
                                    Used to deliver personalized ads and track campaign performance.
                                </p>
                            </div>
                            <button
                                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                                className="shrink-0"
                            >
                                <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing ? 'bg-gold' : 'bg-white/10'
                                    }`}>
                                    <div className={`w-4 h-4 rounded-full bg-primary transition-transform ${preferences.marketing ? 'ml-auto' : ''
                                        }`}></div>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="p-6 flex flex-col sm:flex-row items-center gap-3">
                    <button
                        onClick={acceptAll}
                        className="w-full sm:w-auto btn-primary px-6 py-2.5 text-sm"
                    >
                        Accept All Cookies
                    </button>

                    {showDetails ? (
                        <button
                            onClick={savePreferences}
                            className="w-full sm:w-auto px-6 py-2.5 bg-surface border border-gold text-gold rounded-full font-semibold hover:bg-gold/10 transition-colors text-sm"
                        >
                            Save Preferences
                        </button>
                    ) : (
                        <button
                            onClick={() => setShowDetails(true)}
                            className="w-full sm:w-auto px-6 py-2.5 bg-surface border border-white/10 text-stone-100 rounded-full font-semibold hover:bg-white/5 transition-colors text-sm"
                        >
                            Customize
                        </button>
                    )}

                    <button
                        onClick={rejectAll}
                        className="w-full sm:w-auto px-6 py-2.5 text-stone-400 hover:text-stone-100 transition-colors text-sm font-semibold"
                    >
                        Reject All
                    </button>

                    <a
                        href="/privacy"
                        className="text-xs text-stone-400 hover:text-gold transition-colors ml-auto"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
