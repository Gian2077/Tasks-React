import { use } from "react";
import "./App.css";
import TaskContext from "./components/TaskProvider/TaskContext.js";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Tasks } from "./components/Tasks";
import { Task } from "./components/Task/Task.jsx";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { FormTask } from "./components/FormTask";
import { Footer } from "./components/Footer";
import { EmptyState } from "./components/EmptyState";

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
          {tasks.length === 0 && <EmptyState />}
        </Tasks>
        <Dialog isOpen={showDialog} onClose={closeDialog}>
          <FormTask
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
