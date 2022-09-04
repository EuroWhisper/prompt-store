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
  color,
  size = 'medium',
  variant,
}: Props) {
  const buttonClass = classNames({
    'bg-green-500 hover:bg-green-600 text-white font-bold rounded': true,
    'bg-transparent border-2': variant === 'outlined',
    'px-2 py-1 text-sm': size === 'small',
    'px-3 py-2 text-base': size === 'medium',
    'px-4 py-3 text-lg': size === 'large',
    'bg-yellow-500 hover:bg-yellow-600': color === 'warning',
    className: !!className,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
