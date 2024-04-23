import Header from "./components/Header/Header";
import CodeBox from "./components/CodeBox/CodeBox";
import ProgressMonitoring from "./components/ProgressMonitoring/ProgressMonitoring"
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
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
                  label: "vampires-game.ts",
                  content: fromStringToCode(await fetchCode("vampires-game.ts")),
                },
              ];
            }}
          />
        </section>
        <section className="app__main__section">
          <h1 id="about">About Project</h1>
          <article className="app__main__section__article">
            <h2>
              What is <span>Snap Code</span> ?
            </h2>
            <p>
              Snap Code is an open source web platform available for any device
              aimed at learning programming in the most in-demand languages such
              as JavaScript, TypeScript and Python. Our goal is to involve more people than
              ever in the world of development thanks to our innovative learning
              method.
            </p>
          </article>
          <hr />
          <article className="app__main__section__article splited">
            <div className="app__main__section__article__text-container">
              <h2>
                Our <span>innovative</span> learning method
              </h2>
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
                      highlightedLines: [9, 10, 11, 12, 13, 15, 16, 17, 18, 19],
                    },
                  ];
                }}
              />
            </div>
          </article>
          <hr />
          <article className="app__main__section__article splited">
            <div className="app__main__section__article__codebox-container">
              <CodeBox
                skeletonLines={19}
                linesFadeout={true}
                getTabs={async () => {
                  return [
                    {
                      label: "shopping.py",
                      content: fromStringToCode(
                        await fetchCode("shop-list.py")
                      ),
                      highlightedLines: [4, 5, 6, 9, 10, 11, 12],
                    },
                  ];
                }}
              />
            </div>
            <div className="app__main__section__article__text-container">
              <h2>
                <span>Lots of levels</span> to never stop learning
              </h2>
              <p>
                Snap Code will provide you with numerous levels with progressive
                difficulty as you learn. Furthermore, thanks to the level import
                system, a large community of players will keep the platform
                alive.
              </p>
            </div>
          </article>
          <hr />
          <article className="app__main__section__article splited">
            <div className="app__main__section__article__text-container">
              <h2>
                <span>Real-time</span> execution
              </h2>
              <p>
                Execute your programming code in real time in the most demanded programming languages through our application with great performance.
              </p>
            </div>
            <div className="app__main__section__article__codebox-container">
              <CodeBox
                skeletonLines={19}
                getTabs={async () => {
                  return [
                    {
                      label: "board-game.ts",
                      content: fromStringToCode(
                        await fetchCode("board-game.ts")
                      ),
                      highlightedLines: [4, 5, 8, 9],
                    },
                  ];
                }}
              />
            </div>
          </article>
          <hr />
          <article className="app__main__section__article">
            <div className="app__main__section__article__text-container">
              <h2>
                Process <span>monitoring</span>
              </h2>
              <p>
                You could exhaustively track your progress as a programmer, being able to see all the levels you have passed and thus the knowledge acquired.
              </p>
              <div className="app__main__section__article__progress-monitoring-container">
                <ProgressMonitoring />
              </div>
            </div>
          </article>
        </section>
        <section className="app__main__section card-section">
          <Card
            title={
              <>
                Project <span>values</span>
              </>
            }
          >
            We believe in the constant advancement of technology as an engine of help for people. At all times we care about wanting to help others and we think that learning programming is a great goal that everyone can overcome with a little help.
          </Card>
          <Card
            title={
              <>
                Project <span>mission</span>
              </>
            }
          >
            We aim to create a digital platform providing fair access to quality
            education and tools. We prioritize equal opportunities,
            collaboration, innovation, excellent service, and device
            compatibility for convenient access.
          </Card>
          <Card
            title={
              <>
                Our <span>team</span>
              </>
            }
          >
            We focus on innovation, top-tier customer service, and device
            interoperability. Innovation drives our progress, while exceptional
            service and device compatibility ensure customer satisfaction. These
            values represent our commitment to excellence in technology.
          </Card>
        </section>
        <section className="app__main__section">
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
