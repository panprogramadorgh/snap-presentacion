import Header from "./components/Header/Header";
import CodeBox from "./components/CodeBox/CodeBox";
import Card from "./components/Card/Card";
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
        </section>
        <section className="app__main__section">
          <Card
            title={
              <>
                Project <span>values</span>
              </>
            }
          >
            Our project is about innovating, taking care of our customers and
            making devices work well together. We highly value innovation to
            remain competitive. We strive for great customer service and make
            our devices integrate seamlessly so users have a good experience.
            These are our principles to be the best in technology and satisfy
            our customers.
          </Card>
          <Card
            title={
              <>
                Project <span>mission</span>
              </>
            }
          >
            We want to create a digital platform that provides fair and
            affordable access to high-quality educational resources and
            interactive tools. We value things like ensuring equal learning
            opportunities, promoting collaboration between students and mentors,
            constantly innovating our educational and technological methods,
            providing exceptional customer service, and most importantly,
            ensuring device interoperability for easy access to our platform on
            any time and place.
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
