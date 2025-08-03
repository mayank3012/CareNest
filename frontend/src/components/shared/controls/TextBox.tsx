import React from 'react'
import { BackgroundColors, PrimaryColors, SecondaryColors } from '../../../helper/cssHelper';

interface TextBoxProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange?: (value: string) => void;
    error?: string | null;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    autoFocus?: boolean;
    autoComplete?: string;
    maxLength?: number;
    minLength?: number;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    pattern?: string;
    readOnly?: boolean;
    spellCheck?: boolean;
    tabIndex?: number;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    style?: React.CSSProperties;
}

const TextBox = ({
    id,
    label,
    name,
    placeholder = '',
    value,
    onChange,
    error = null,
    type = 'text',
    disabled = false,
    required = false,
    className = '',
    autoFocus = false,
    autoComplete = 'off',
    maxLength,
    minLength,
    onBlur,
    onKeyDown,
    onKeyUp,
    onFocus,
    readOnly = false,
    spellCheck = false,
    tabIndex,
    min,
    max,
    step = 'any', 
    style = {}  
    
}:TextBoxProps) => {
  return (
    <div className={`flex flex-col w-full`}>
      <label htmlFor={`textbox-${id}`} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={`textbox-${id}`}
        type={type}
        name={name}
        aria-label={placeholder}
        autoComplete={autoComplete}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange && onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        readOnly={readOnly}
        spellCheck={spellCheck}
        tabIndex={tabIndex}
        min={min}
        max={max}
        step={step}
        style = {style}
        className={`px-3 ${SecondaryColors.secondaryTextColor} ${BackgroundColors.primaryBackground} ${className} py-2 mt-1 ${error ? 'border-2 border-red-400' : ''}`}
      />
      {maxLength && <span className="text-xs focus:outline-blue-500 text-gray-500 mt-1">{`${value.length}/${maxLength} character(s) remaining`}</span>}
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}

    </div>
  )
}

export default TextBox