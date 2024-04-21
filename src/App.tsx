import Header from "./components/Header/Header";
import CodeBox from "./components/CodeBox/CodeBox";
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
            <h2>
              What is <span>Snap Code</span> ?
            </h2>
            <p>
              Snap Code is an open source web platform available for any device
              aimed at learning programming in the most in-demand languages such
              as JavaScript and Python. Our goal is to involve more people than
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
                      highlightedLines: [9, 10, 11, 12, 13],
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
        </section>
        <section className="app__main__section card-section">
          <Card
            title={
              <>
                Project <span>values</span>
              </>
            }
          >
            We believe in responsibility, sacrifice, companionship, and
            coordination. We take ownership of our actions, value sacrifices for
            success, and promote mutual respect and encouragement. Together, we
            maximize our impact through effective teamwork.
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
