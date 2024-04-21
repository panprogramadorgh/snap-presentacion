import { ReactNode, FC } from "react";

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
    "export",
    "try",
    "catch",
    "finally",
    "switch",
    "case",
    "default",
    "class",
    "extends",
    "this",
    "super",
    "static",
    "yield",
    "yield*",
    "of",
    "in",
    "as",
    "typeof",
    "instanceof",
    "void",
    "delete",
    "public",
    "private",
    "protected",
    "abstract",
    "final",
    "native",
    "synchronized",
    "transient",
    "volatile",
    "implements",
    "interface",
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

// TODO: Mejorar coloreado de sintaxis:
// - Propiedades y metodos de objeto

function fromStringToCode(str: string): ReactNode[] {
  const lines = str.split("\n");
  // Elimina las ultimas lineas si estan vacias
  const reversedLines = [...lines].reverse();
  for (let line of reversedLines) {
    if (line.trim() === "") lines.pop();
    else break;
  }

  const reactNodeLines = lines.map((line) => {
    let tokens: (string | FC)[] = line.split("");
    let currentLine = () => {
      return tokens
        .map((token) => {
          if (typeof token === "function") return " ";
          return token;
        })
        .join("");
    };

    // Line comments coloring
    function colorLineComment(commentSymbol: string): boolean | void {
      const lineCommentIndex = currentLine().indexOf(commentSymbol);
      if (lineCommentIndex === -1) return;

      const commentLine = currentLine().substring(lineCommentIndex);
      tokens.splice(lineCommentIndex, currentLine().length, () => (
        <span className="token comment">{commentLine}</span>
      ));
      return true;
    }
    const lineIsComment = colorLineComment("//") || colorLineComment("#");

    // Solamente hace el resto del coloreado cuando no es un comentario
    if (!lineIsComment) {
      // Keywords coloring
      targetWords.keywords.forEach((keyword) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(keyword);
          if (kwIndex === -1) return;
          if (currentLine()[kwIndex - 1] && currentLine()[kwIndex - 1] !== " ")
            return;
          if (
            currentLine()[kwIndex + keyword.length] &&
            currentLine()[kwIndex + keyword.length] !== " "
          )
            return;

          tokens.splice(kwIndex, keyword.length, () => (
            <span className="token keyword">{keyword}</span>
          ));
          replacetokens();
        };
        replacetokens();
      });

      // Operators coloring
      targetWords.operators.forEach((keyword) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(keyword);
          if (kwIndex === -1) return;
          tokens.splice(kwIndex, keyword.length, () => (
            <span className="token operator">{keyword}</span>
          ));
          replacetokens();
        };
        replacetokens();
      });

      // Punctuaction coloring
      targetWords.punctuation.forEach((keyword) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(keyword);
          if (kwIndex === -1) return;
          tokens.splice(kwIndex, keyword.length, () => (
            <span className="token punctuation">{keyword}</span>
          ));
        };
        replacetokens();
      });

      // Values coloring
      targetWords.values.forEach((keyword) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(keyword);
          if (kwIndex === -1) return;
          tokens.splice(kwIndex, keyword.length, () => (
            <span className="token value">{keyword}</span>
          ));
        };
        replacetokens();
      });
      // Strings value coloring
      function colorStrings() {
        let doubleQuotIndex = currentLine().indexOf('"');
        let nextDoubleQuotIndex = currentLine().indexOf(
          '"',
          doubleQuotIndex + 1
        );
        if (nextDoubleQuotIndex === -1)
          nextDoubleQuotIndex = currentLine().length - 1;

        if ([doubleQuotIndex, nextDoubleQuotIndex].includes(-1)) return;

        const word = currentLine().substring(
          doubleQuotIndex,
          nextDoubleQuotIndex + 1
        );

        tokens.splice(doubleQuotIndex, word.length, () => {
          return <span className="token value string">{word}</span>;
        });
      }
      colorStrings();
    }

    const reactNodeLine = (
      <>
        {tokens.map((Token, index) => {
          // Si Token es una funcion quere decir que es una palabra, signo, etc y por lo tanto es un componente a ser renderizado.
          if (typeof Token === "function") return <Token key={index} />;
          // De lo contrario es un simple espacio o caracter
          else if (typeof Token === "string" && Token === " ") {
            return (
              <span key={index} className="token blank">
                &nbsp;
              </span>
            );
          }
          return (
            <span key={index} className="token char">
              {Token}
            </span>
          );
        })}
      </>
    );
    return reactNodeLine;
  });

  return reactNodeLines;
}

export default fromStringToCode;
