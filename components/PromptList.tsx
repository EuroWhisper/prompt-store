import { Prompt } from "../pages/api/prompt/create";
import DataGrid, { Column } from "react-data-grid";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  prompts: Prompt[];
};

export default function PromptList(props: Props) {
  const queryClient = useQueryClient();

  const { mutate: deletePromptMutate, isLoading: deletePromptIsLoading } =
    useMutation(["prompt"], deletePrompt);

  const columns: Column<Prompt>[] = [
    { key: "id", name: "ID", width: 50 },
    { key: "prompt", name: "Prompt", minWidth: 500 },
    {
      key: "actions",
      name: "Actions",
      width: 150,
      formatter: (column) => (
        <>
          <Button onClick={() => handleCopyPrompt(column.row.prompt)}>
            Copy
          </Button>
          <Button onClick={() => deletePromptMutate(column.row.id.toString())}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const rows = props.prompts;

  return <DataGrid columns={columns} rows={rows} />;

  function deletePrompt(id: string): Promise<Prompt> {
    return fetch(`/api/prompt/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      queryClient.invalidateQueries(["prompts"]);
      return res.json();
    });
  }

  function handleCopyPrompt(prompt: string) {
    navigator.clipboard.writeText(prompt);
    alert("Copied to clipboard!");
  }
}
