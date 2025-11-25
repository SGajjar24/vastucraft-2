import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const updateCursorType = () => {
            const hoveredElement = document.elementFromPoint(position.x, position.y);
            if (hoveredElement) {
                const computedStyle = window.getComputedStyle(hoveredElement);
                setIsPointer(
                    computedStyle.cursor === 'pointer' ||
                    hoveredElement.tagName === 'BUTTON' ||
                    hoveredElement.tagName === 'A' ||
                    hoveredElement.closest('button') !== null ||
                    hoveredElement.closest('a') !== null
                );
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateCursorType);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, [position.x, position.y]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isPointer ? 0.5 : 1})`
                }}
            />

            {/* Following Ring */}
            <div
                className={`fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${isPointer ? 'bg-gold/10 scale-150 border-gold/50' : 'scale-100 opacity-50'
                    }`}
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px)`
                }}
            />
        </>
    );
};

export default CustomCursor;
