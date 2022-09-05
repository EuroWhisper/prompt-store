import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  open?: boolean;
};

export default function Backdrop({ children, open = false }: Props) {
  const [body, setBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setBody(document.body);
  }, [setBody]);

  if (body && open) {
    return createPortal(
      <div className="w-screen h-screen bg-slate-300/50 absolute top-0 flex justify-center items-center">
        {children}
      </div>,
      body
    );
  }
  return null;
}
