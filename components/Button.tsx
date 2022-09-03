import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children?: ReactNode;
};

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  );
}
