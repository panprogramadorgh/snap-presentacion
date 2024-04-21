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
        <section className="app__main__section main">
          <CodeBox
            skeletonLines={11}
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
        <section className="app__main__section">
          <h1 id="about">About Project</h1>
          <article className="app__main__section__article">
            <h2>What is Snap Code ?</h2>
            <p>
              Snap Code is an open source web platform available for any device
              aimed at learning programming in the most in-demand languages such
              as JavaScript and Python. Our goal is to involve more people than
              ever in the world of development thanks to our innovative learning
              method.
            </p>
          </article>
          <article className="app__main__section__article splited">
            <div className="app__main__section__article__text-container">
              <h2>Our innovative learning method</h2>
              <p>
                Snap code is based on an innovative practice-oriented learning
                method, which means that in less time you will learn more and
                better.
              </p>
            </div>
            <div className="app__main__section__article__codebox-container">
              <CodeBox
                skeletonLines={19}
                getTabs={async () => {
                  return [
                    {
                      label: "conditionals.js",
                      content: fromStringToCode(
                        await fetchCode("javascript-conditionals.js")
                      ),
                      highlightedLines: [9, 10, 11, 12, 13],
                    },
                  ];
                }}
              />
            </div>
          </article>
          <article className="app__main__section__article splited">
            <div className="app__main__section__article__codebox-container">
              <CodeBox
                skeletonLines={19}
                getTabs={async () => {
                  return [
                    {
                      label: "conditionals.js",
                      content: fromStringToCode(
                        await fetchCode("javascript-conditionals.js")
                      ),
                      highlightedLines: [9, 10, 11, 12, 13],
                    },
                  ];
                }}
              />
            </div>
            <div className="app__main__section__article__text-container">
              <h2>Our innovative learning method</h2>
              <p>
                Snap code is based on an innovative practice-oriented learning
                method, which means that in less time you will learn more and
                better.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
