import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    strength?: number; // How strong the magnetic pull is (default: 30)
    variant?: 'primary' | 'outline' | 'ghost';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    strength = 30,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!btnRef.current) return;

        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const deltaX = (e.clientX - centerX) / width;
        const deltaY = (e.clientY - centerY) / height;

        // Apply magnetic pull
        setPosition({
            x: deltaX * strength,
            y: deltaY * strength
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    // Base styles
    const baseStyles = "relative inline-flex items-center justify-center transition-transform duration-200 ease-out cursor-pointer";

    // Variant styles
    const variants = {
        primary: "bg-gold text-primary font-semibold hover:bg-gold-light shadow-[0_0_20px_rgba(212,175,55,0.3)]",
        outline: "border border-gold/30 text-gold hover:bg-gold/10",
        ghost: "text-stone-300 hover:text-gold"
    };

    // Combine classes
    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <button
            ref={btnRef}
            className={combinedClasses}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
