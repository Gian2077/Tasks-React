import { use, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Tasks } from "./components/Tasks/Tasks.jsx";
import { Task } from "./components/Task/Task.jsx";
import { Dialog } from "./components/Dialog/Dialog.jsx";
import { ButtonFAB } from "./components/ButtonFAB/ButtonFAB.jsx";
import { FormTask } from "./components/FormTask/FormTask.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import TaskContext from "./components/TaskProvider/TaskContext.js";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { tasks, addTask } = use(TaskContext);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };
  const handleFormSubmit = (formData) => {
    addTask(formData);
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
          <FormTask onSubmit={handleFormSubmit} />
        </Dialog>
        <ButtonFAB onClick={toggleDialog} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
