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
      </main>
    </>
  );
}

export default App;
