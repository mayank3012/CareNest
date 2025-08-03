import React from 'react';
import { PrimaryColors, SecondaryColors } from '../../../helper/cssHelper';

export interface ButtonProps {
    id?: string;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary';
    ariaLabel?: string;
    tabIndex?: number;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    id,
    type = 'button',
    children,
    onClick,
    disabled = false,
    className = '',
    variant = 'primary',
    ariaLabel,
    tabIndex,
    style = {},
}) => {

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            tabIndex={tabIndex}
            style={style}
            className={`
                px-4 py-2 font-semibold transition-colors duration-150
                ${variant === 'primary' ? PrimaryColors.primaryColor : SecondaryColors.secondaryColor}
                ${variant === 'primary' ? PrimaryColors.primaryTextColor : SecondaryColors.secondaryTextColor}
                ${variant === 'primary' ? PrimaryColors.primaryHoverColor : SecondaryColors.secondaryHoverColor}
                ${variant === 'primary' ? PrimaryColors.primaryFocusRing : SecondaryColors.secondaryFocusRing}
                focus:outline-none
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;