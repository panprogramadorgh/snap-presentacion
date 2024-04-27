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
    "readonly",
  ],
  operators: ["+", "-", "*", "/", "%", "!==", "===", "!=", "==", "=", ">", "<"],
  punctuation: [".", ":", ",", ";", ":", "(", ")", "{", "}", "[", "]"],
  comments: ["//", "/*", "*/"],
  values: [
    "True",
    "False",
    "true",
    "false",
    "null",
    "undefined",
    "Infinity",
    "NaN",
    "None",
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
          const supportedCharacters = [
            ...targetWords.operators,
            ...targetWords.punctuation,
            ...targetWords.comments,
            " ",
            undefined,
          ];
          if (!supportedCharacters.includes(currentLine()[kwIndex - 1])) return;
          if (
            !supportedCharacters.includes(
              currentLine()[kwIndex + keyword.length]
            )
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

      // Primitive types coloring
      function colorPrimitiveTypes() {
        const primitiveTypes = ["string", "number", "boolean", "void"];
        primitiveTypes.forEach((type) => {
          const typeIndex = currentLine().indexOf(type);
          if (typeIndex === -1) return;
          const supportedCharacters = [
            ...targetWords.operators,
            ...targetWords.punctuation,
            ...targetWords.comments,
            " ",
            undefined,
          ];
          if (!supportedCharacters.includes(currentLine()[typeIndex - 1]))
            return;
          if (
            !supportedCharacters.includes(
              currentLine()[typeIndex + type.length]
            )
          )
            return;

          tokens.splice(typeIndex, type.length, () => (
            <span className="token primitive-type">{type}</span>
          ));
          colorPrimitiveTypes();
        });
      }
      colorPrimitiveTypes();

      // Obj, Clases, Types & interfaces (uppercase Words) coloring
      function colorUpperCaseWords() {
        const upperCaseLetters = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ];
        upperCaseLetters.forEach((letter) => {
          const uppserCaseLetterIndex = currentLine().indexOf(letter);
          if (
            uppserCaseLetterIndex === -1 ||
            (currentLine()[uppserCaseLetterIndex - 1] &&
              currentLine()[uppserCaseLetterIndex - 1] !== " ")
          )
            return;

          const possibleFinalIndices = [
            targetWords.operators,
            targetWords.punctuation,
            targetWords.comments,
            " ",
          ]
            .flat()
            .map((char) =>
              currentLine().indexOf(char, uppserCaseLetterIndex + 1)
            )
            .filter((index) => index !== -1);

          const endOfWord = Math.min(...possibleFinalIndices);

          const word = currentLine().substring(
            uppserCaseLetterIndex,
            endOfWord
          );

          const invalidWords = ["True", "False"];
          if (invalidWords.includes(word)) return;

          tokens.splice(uppserCaseLetterIndex, word.length, () => (
            <span className="token type">{word}</span>
          ));
          colorUpperCaseWords();
        });
      }
      colorUpperCaseWords();

      // Methods coloring
      function colorMethods() {
        const dotIndex = currentLine().indexOf(".");
        if (dotIndex === -1 || !isNaN(Number(currentLine()[dotIndex + 1])))
          return;

        const possibleFinalIndices = [
          targetWords.operators,
          targetWords.punctuation,
          targetWords.comments,
          " ",
        ]
          .flat()
          .map((char) => currentLine().indexOf(char, dotIndex + 1))
          .filter((index) => index !== -1);

        if (possibleFinalIndices.length === 0) return;
        const endIndex = Math.min(...[...possibleFinalIndices]);
        if (endIndex === -1) return;
        const method = currentLine().substring(dotIndex + 1, endIndex);
        // Aprovecha para introducir el punto y el nombre del metodo en el mismo lugar
        tokens.splice(dotIndex, 1, () => (
          <span className="token punctuation">{"."}</span>
        ));
        tokens.splice(dotIndex + 1, method.length, () => (
          <span className="token method">{method}</span>
        ));

        colorMethods();
      }
      colorMethods();

      // Punctuaction coloring
      targetWords.punctuation.forEach((keyword) => {
        const replacetokens = () => {
          const kwIndex = currentLine().indexOf(keyword);
          if (kwIndex === -1) return;
          tokens.splice(kwIndex, keyword.length, () => (
            <span className="token punctuation">{keyword}</span>
          ));
          replacetokens();
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
