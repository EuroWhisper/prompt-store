import { Prompt } from "../pages/api/prompt";
import DataGrid, { Column } from "react-data-grid";
import Button from "./Button";

type Props = {
  prompts: Prompt[];
};

export default function PromptList(props: Props) {
  const columns: Column<Prompt>[] = [
    { key: "id", name: "ID", width: 50 },
    { key: "prompt", name: "Prompt", minWidth: 500 },
    {
      key: "copy",
      name: "Copy",
      width: 50,
      formatter: (column) => (
        <Button onClick={() => handleCopyPrompt(column.row.prompt)}>
          Copy
        </Button>
      ),
    },
  ];

  const rows = props.prompts;

  return <DataGrid columns={columns} rows={rows} />;

  function handleCopyPrompt(prompt: string) {
    navigator.clipboard.writeText(prompt);
    alert("Copied to clipboard!");
  }
}
