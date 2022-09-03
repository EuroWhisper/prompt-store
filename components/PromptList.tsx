import { Prompt } from "../pages/api/prompt";
import DataGrid, { Column } from "react-data-grid";

type Props = {
  prompts: Prompt[];
};

export default function PromptList(props: Props) {
  const columns: Column<Prompt>[] = [
    { key: "id", name: "ID", width: 50 },
    { key: "prompt", name: "Prompt", minWidth: 500 },
  ];

  const rows = props.prompts;

  return <DataGrid columns={columns} rows={rows} />;
}
