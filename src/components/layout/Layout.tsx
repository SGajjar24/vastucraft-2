import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import BackToTopButton from '../BackToTopButton';
import CookieBanner from '../CookieBanner';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const isDigitalCard = location.pathname === '/connect';

    if (isDigitalCard) {
        return (
            <div className="flex flex-col min-h-screen font-sans text-stone-100 antialiased selection:bg-gold selection:text-primary bg-primary">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-100 antialiased selection:bg-gold selection:text-primary bg-primary">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <BackToTopButton />
            <CookieBanner />
        </div>
    );
};

export default Layout;

