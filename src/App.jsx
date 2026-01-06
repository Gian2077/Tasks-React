import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Tasks } from "./components/Tasks/Tasks.jsx";
import { Task } from "./components/Task/Task.jsx";
import { Dialog } from "./components/Dialog/Dialog.jsx";
import { ButtonFAB } from "./components/ButtonFAB/ButtonFAB.jsx";
import { FormNewTask } from "./components/FormNewTask/FormNewTask.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [tasks, setTasks] = useState([
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
  ]);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };
  const addTask = (formData) => {
    const newTask = formData.get("newTask");
    setTasks((prevState) => {
      const task = {
        id: prevState.length + 1,
        title: newTask,
      };
      return [...prevState, task];
    });
    toggleDialog();
  };
  return (
    <>
      <Header />
      <Main>
        <Tasks>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </Tasks>
        <Dialog isOpen={showDialog} onClose={toggleDialog}>
          <FormNewTask onSubmit={addTask} />
        </Dialog>
        <ButtonFAB onClick={toggleDialog} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
