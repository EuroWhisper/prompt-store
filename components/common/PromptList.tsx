import DataGrid, { Column } from 'react-data-grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from './Button';
import { Prompt } from '../../pages/api/prompt/index';

type Props = {
  prompts: Prompt[];
};

export default function PromptList(props: Props) {
  const queryClient = useQueryClient();
  const { mutate: deletePromptMutate } = useMutation(['prompt'], deletePrompt);

  const columns: Column<Prompt>[] = [
    { key: 'id', name: 'ID', width: 50 },
    { key: 'prompt', name: 'Prompt', minWidth: 500 },
    { key: 'seed', name: 'Seed', minWidth: 100 },
    {
      key: 'actions',
      name: 'Actions',
      width: 150,
      formatter: (column) => (
        <div className="flex">
          <div>
            <Button
              variant="outlined"
              size="small"
              onClick={() => handleCopyPrompt(column.row.prompt)}
            >
              Copy
            </Button>
          </div>
          <div className="ml-2">
            <Button
              color="danger"
              variant="outlined"
              size="small"
              onClick={() => deletePromptMutate(column.row.id.toString())}
            >
              Delete
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const rows = props.prompts;

  return (
    <DataGrid
      className="border-gray-200 rounded-md"
      columns={columns}
      rows={rows}
    />
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
