import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import BackToTopButton from '../BackToTopButton';
import VastuChatWidget from '../VastuChatWidget';
import CookieBanner from '../CookieBanner';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-stone-100 antialiased selection:bg-gold selection:text-primary bg-primary">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <BackToTopButton />
            <VastuChatWidget />
            <CookieBanner />
        </div>
    );
};

export default Layout;

