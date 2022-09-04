import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  onClick?: () => void;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'warning' | 'danger';
  variant?: 'contained' | 'outlined';
  className?: string;
};

export default function Button({
  onClick,
  className,
  children,
  color = 'primary',
  size = 'medium',
  variant,
}: Props) {
  const buttonClass = classNames(
    {
      'bg-green-500 hover:bg-green-600 text-white font-bold rounded': true,
      'px-2 py-1 text-sm': size === 'small',
      'px-3 py-2 text-base': size === 'medium',
      'px-4 py-3 text-lg': size === 'large',
      'bg-yellow-500 hover:bg-yellow-600': color === 'warning',
      'bg-red-500 hover:bg-red-600': color === 'danger',
      'bg-transparent  border-2': variant === 'outlined',
      'border-green-500 hover:bg-green-500 text-green-500 hover:text-white':
        variant === 'outlined' && color === 'primary',
      'border-yellow-500 hover:bg-yellow-500 text-yellow-500 hover:text-white':
        variant === 'outlined' && color === 'warning',
      'border-red-500 hover:bg-red-500 text-red-500 hover:text-white':
        variant === 'outlined' && color === 'danger',
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
