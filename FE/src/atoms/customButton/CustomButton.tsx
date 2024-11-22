import React, { CSSProperties } from 'react';
import s from './customButton.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset'; // добавлено свойство type
}

// Основная функция компонента Button
const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  icon,
  className = '',
  style = {},
  type = 'button', // значение по умолчанию для type
}) => {
  const buttonClass = [
    s.button,
    variant ? s[variant] : s.primary,
    disabled ? s.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type} // применяем type
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      <span className={s.text}>{text}</span>
    </button>
  );
};

export default CustomButton;
