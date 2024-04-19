import Header from "./components/Header/Header";
import CodeBox from "./components/CodeBox/CodeBox";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="app__main">
        <section>
          <CodeBox />
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
