type Props = {
  onChange: (prompt: string) => void;
  placeholder: string;
};

export default function TextArea(props: Props) {
  return (
    <textarea
      onChange={(e) => props.onChange(e.target.value)}
      className="w-full h-40 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 p-2"
      placeholder={props.placeholder}
    ></textarea>
  );
}
