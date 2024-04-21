import fromStringToCode from "./code-coloring";

const fetchCode = async (filename: string): Promise<string> => {
  const response = await fetch(`/code/${filename}`);
  const text = await response.text();
  return text;
};

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

export default tabs;
