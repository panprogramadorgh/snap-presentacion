import { ReactNode } from "react";

const targetWords = {
  keywords: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "break",
    "continue",
    "await",
    "async",
    "new",
    "import",
    "from",
  ],
  operators: ["+", "-", "*", "/", "%", "=", "==", "===", "!=", "!==", ">", "<"],
  punctuation: [".", ":", ",", ";", ":", "(", ")", "{", "}", "[", "]"],
  comments: ["//", "/*", "*/"],
  values: [
    "true",
    "false",
    "null",
    "undefined",
    "Infinity",
    "NaN",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ],
};


// TODO: Mejorar coloreado de sintaxis

function fromStringToCode(str: string): ReactNode[] {
  const lines = str.split("\n");
  const reactNodeLines = lines.map((line) => {
    let currentLine = line;
    type ColoredWordComponent = () => ReactNode;
    const chars = currentLine.split("") as (string | ColoredWordComponent)[];

    // Keywords coloring
    targetWords.keywords.forEach((keyword) => {
      const replaceChars = () => {
        const kwIndex = currentLine.indexOf(keyword);
        if (kwIndex === -1) return;
        if (currentLine[kwIndex - 1] && currentLine[kwIndex - 1] !== " ")
          return;
        if (
          currentLine[kwIndex + keyword.length] &&
          currentLine[kwIndex + keyword.length] !== " "
        )
          return;

        chars.splice(kwIndex, keyword.length, () => (
          <span className="word keyword">{keyword}</span>
        ));
        const lineCharArr = currentLine.split("");
        lineCharArr.splice(kwIndex, keyword.length, " ");
        currentLine = lineCharArr.join("");
        replaceChars();
      };
      replaceChars();
    });

    // Operators coloring
    targetWords.operators.forEach((keyword) => {
      const replaceChars = () => {
        const kwIndex = currentLine.indexOf(keyword);
        if (kwIndex === -1) return;
        chars.splice(kwIndex, keyword.length, () => (
          <span className="word operator">{keyword}</span>
        ));
        const lineCharArr = currentLine.split("");
        lineCharArr.splice(kwIndex, keyword.length, " ");
        currentLine = lineCharArr.join("");
        replaceChars();
      };
      replaceChars();
    });

    // Punctuaction coloring
    targetWords.punctuation.forEach((keyword) => {
      const replaceChars = () => {
        const kwIndex = currentLine.indexOf(keyword);
        if (kwIndex === -1) return;
        chars.splice(kwIndex, keyword.length, () => (
          <span className="word punctuation">{keyword}</span>
        ));
        const lineCharArr = currentLine.split("");
        lineCharArr.splice(kwIndex, keyword.length, " ");
        currentLine = lineCharArr.join("");
        replaceChars();
      };
      replaceChars();
    });

    // Values coloring
    targetWords.values.forEach((keyword) => {
      const replaceChars = () => {
        const kwIndex = currentLine.indexOf(keyword);
        if (kwIndex === -1) return;
        chars.splice(kwIndex, keyword.length, () => (
          <span className="word value">{keyword}</span>
        ));
        const lineCharArr = currentLine.split("");
        lineCharArr.splice(kwIndex, keyword.length, " ");
        currentLine = lineCharArr.join("");
        replaceChars();
      };
      replaceChars();
    });

    const reactNodeLine = (
      <>
        {chars.map((Char, index) => {
          if (typeof Char === "function") return <Char key={index} />;
          else if (typeof Char === "string" && Char === " ") {
            return (
              <span key={index} className="word">
                &nbsp;
              </span>
            );
          }
          return (
            <span key={index} className="word char">
              {Char}
            </span>
          );
        })}
      </>
    );
    return reactNodeLine;
  });

  return reactNodeLines;
}

const code = fromStringToCode(`import jwt from "jsonwebtoken";

  export default (req, res, next) => {
    const token = req.headers["token"];
  
    req.user = null;
    if (token) {
      jwt.verify(token, "secreto", (error, data) => {
        if (error) return res.status(422).json({ error: "Token invalido !" });
        req.user = data;
      });
    }
  
    next();
  };`);

const tabs = [
  {
    label: "index.js",
    content: code,
  },
  { label: "game.ts", content: ["// typescript code"] },
  { label: "main.py", content: ["# python code"] },
];

export default tabs;
