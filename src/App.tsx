import GameLayout from "./components/GameLayout";
import P5Container from "./components/P5Container";
import "./App.css";

function App() {

  return (
    <main className="container">
      <h1>Trusted Servers Demo Game</h1>
      <div className="row">
        <P5Container>
          <GameLayout></GameLayout>
        </P5Container>
      </div>
    </main>
  );
}

export default App;
