import { useState } from 'react';

import Button from './Button';
import TextArea from './TextArea';

type Props = {
  onSubmit: (prompt: string) => void;
};

export default function PromptForm(props: Props) {
  const [prompt, setPrompt] = useState('');

  return (
    <>
      <TextArea onChange={handlePromptChange} />
      <div className="mt-2">
        <Button disabled={!prompt} onClick={() => props.onSubmit(prompt)}>
          Save prompt
        </Button>
      </div>
    </>
  );

  function handlePromptChange(prompt: string) {
    setPrompt(prompt);
  }
}
