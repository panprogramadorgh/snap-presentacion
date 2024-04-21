import fromStringToCode from "./code-coloring";
import { Tab } from "./definitions";

const fetchCode = async (filename: string): Promise<string> => {
  const response = await fetch(`/code/${filename}`);
  const text = await response.text();
  return text;
};

async function getTabs(): Promise<Tab[]> {
  const tabs = [
    {
      label: "index.js",
      content: fromStringToCode(await fetchCode("index.js")),
    },
    {
      label: "game.ts",
      content: fromStringToCode(await fetchCode("game.ts")),
    },
    { label: "main.py", content: fromStringToCode(await fetchCode("main.py")) },
  ];

  return tabs;
}

export default getTabs();
