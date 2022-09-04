import { useState } from 'react';

import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

type Props = {
  onSubmit: (prompt: string, seed?: string) => void;
};

export default function PromptForm(props: Props) {
  const [prompt, setPrompt] = useState('');
  const [seed, setSeed] = useState('');

  return (
    <>
      <TextArea placeholder="Prompt" onChange={handlePromptChange} />
      <div className="w-1/2">
        <Input placeholder="Seed" onChange={handleSeedChange} />
      </div>
      <div className="mt-2">
        <Button disabled={!prompt} onClick={() => props.onSubmit(prompt, seed)}>
          Save prompt
        </Button>
      </div>
    </>
  );

  function handlePromptChange(prompt: string) {
    setPrompt(prompt);
  }

  function handleSeedChange(seed: string) {
    setSeed(seed);
  }
}
