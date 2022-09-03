import { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  onClick?: () => void;
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

export default function Button({
  onClick,
  className,
  children,
  size = 'medium',
}: Props) {
  const buttonClass = classNames({
    'bg-green-500 hover:bg-green-600 text-white font-bold rounded': true,
    'px-2 py-1 text-sm': size === 'small',
    'px-3 py-2 text-base': size === 'medium',
    'px-4 py-3 text-lg': size === 'large',
    className: !!className,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
