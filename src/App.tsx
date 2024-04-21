import Header from "./components/Header/Header";
import CodeBox from "./components/CodeBox/CodeBox";
import "./App.css";

import fromStringToCode from "./utils/code-coloring";
import fetchCode from "./utils/fetch-code";

function App() {
  return (
    <>
      <Header />
      <main className="app__main">
        <section>
          <CodeBox
            getTabs={async () => {
              return [
                {
                  label: "index.js",
                  content: fromStringToCode(await fetchCode("index.js")),
                },
                {
                  label: "main.py",
                  content: fromStringToCode(await fetchCode("main.py")),
                },
                {
                  label: "game.ts",
                  content: fromStringToCode(await fetchCode("game.ts")),
                },
              ];
            }}
          />
        </section>
        <section>
          <h1 id="about">About Project</h1>
          <h2>What is Snap Code ?</h2>
          <p>
            Snap Code is an open source web platform available for any device
            aimed at learning programming in the most in-demand languages such
            as JavaScript and Python. Our goal is to involve more people than
            ever in the world of development thanks to our innovative learning
            method.
          </p>
          <h2>Our innovative learning method</h2>
          <p>
            Snap Code is an open source web platform available for any device
            aimed at learning programming in the most in-demand languages such
            as JavaScript and Python. Our goal is to involve more people than
            ever in the world of development thanks to our innovative learning
            method.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
