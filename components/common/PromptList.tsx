import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from './Button';
import Loader from './Loader';
import { Prompt } from '../../pages/api/prompt/index';

type Props = {
  prompts: Prompt[];
};

export default function PromptList(props: Props) {
  const queryClient = useQueryClient();
  const { mutate: deletePromptMutate, isLoading: deletePromptLoading } =
    useMutation(['prompt'], deletePrompt);

  return (
    <section>
      {props.prompts.map((prompt) => {
        return (
          <div key={prompt.id} className="p-4 mb-4 bg-slate-700 rounded-md">
            <p>{prompt.prompt}</p>
            <p>{prompt.seed}</p>
            <div className="flex mt-4">
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleCopyPrompt(prompt.prompt)}
                >
                  Copy
                </Button>
              </div>
              <div className="ml-2">
                <Button
                  color="danger"
                  variant="outlined"
                  size="small"
                  onClick={() => deletePromptMutate(prompt.id.toString())}
                >
                  Delete
                </Button>
              </div>
              <Loader open={deletePromptLoading} />
            </div>
          </div>
        );
      })}
    </section>
  );

  function deletePrompt(id: string): Promise<Prompt> {
    return fetch(`/api/prompt/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      queryClient.invalidateQueries(['prompts']);
      return res.json();
    });
  }

  function handleCopyPrompt(prompt: string) {
    navigator.clipboard.writeText(prompt);
    alert('Copied to clipboard!');
  }
}
