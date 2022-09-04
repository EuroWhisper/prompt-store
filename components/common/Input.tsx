type Props = {
  onChange: (value: string) => void;
  placeholder: string;
};

export default function Input(props: Props) {
  return (
    <input
      onChange={(e) => props.onChange(e.target.value)}
      className="w-full h-10 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 p-2"
      placeholder={props.placeholder}
    ></input>
  );
}
