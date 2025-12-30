import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Tasks } from "./components/Tasks/Tasks.jsx";
import { Task } from "./components/Task/Task.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Tasks>
          <Task></Task>
        </Tasks>
      </Main>
      <Footer />
    </>
  );
}

export default App;
