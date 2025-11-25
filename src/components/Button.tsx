import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-gold to-gold-dark text-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1",
    secondary: "bg-surface text-stone-200 border border-white/10 hover:bg-white/5 hover:text-gold hover:border-gold/30",
    outline: "border border-gold/50 text-gold bg-transparent hover:bg-gold/10",
    ghost: "bg-transparent hover:bg-white/5 text-stone-300 hover:text-gold",
    white: "bg-white text-primary hover:bg-stone-100 shadow-lg",
    gold: "bg-gold text-primary hover:bg-gold-light shadow-lg hover:shadow-gold/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;