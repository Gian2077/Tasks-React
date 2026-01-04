import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Tasks } from "./components/Tasks/Tasks.jsx";
import { Task } from "./components/Task/Task.jsx";
import { ButtonFAB } from "./components/Button-FAB/Button-FAB.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const tasks = [
  {
    id: 1,
    title: "Study HTML",
  },
  {
    id: 2,
    title: "Study CSS",
  },
  {
    id: 3,
    title: "Study JavaScript",
  },
];

function App() {
  return (
    <>
      <Header />
      <Main>
        <Tasks>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </Tasks>
        <ButtonFAB />
      </Main>
      <Footer />
    </>
  );
}

export default App;
