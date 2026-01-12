import { use, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Tasks } from "./components/Tasks/Tasks.jsx";
import { Task } from "./components/Task/Task.jsx";
import { Dialog } from "./components/Dialog/Dialog.jsx";
import { ButtonFAB } from "./components/ButtonFAB/ButtonFAB.jsx";
import { FormNewTask } from "./components/FormNewTask/FormNewTask.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import TaskContext from "./components/TaskProvider/TaskContext.js";

function App() {
  const {
    tasks,
    showDialog,
    openDialog,
    closeDialog,
    targetTask,
    addTask,
    editTask,
  } = use(TaskContext);
  const handleFormSubmit = (formData) => {
    if (targetTask) {
      editTask(formData);
    } else {
      addTask(formData);
    }
    closeDialog();
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
        <Dialog isOpen={showDialog} onClose={closeDialog}>
          <FormNewTask
            onSubmit={handleFormSubmit}
            defaultValue={targetTask?.title}
          />
        </Dialog>
        <ButtonFAB onClick={() => openDialog()} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
