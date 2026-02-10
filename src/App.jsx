import { use } from "react";
import "./App.css";
import TaskContext from "./components/TaskProvider/TaskContext.js";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Dialog } from "./components/Dialog";
import { ButtonFAB } from "./components/ButtonFAB";
import { FormTask } from "./components/FormTask";
import { Footer } from "./components/Footer";
import { TaskGroup } from "./components/TaskGroup/index.jsx";

function App() {
  const { tasks, showDialog, openDialog, closeDialog } = use(TaskContext);
  return (
    <>
      <Header />
      <Main>
        <TaskGroup
          title="Daily Tasks"
          tasks={tasks.filter((task) => task.type === "daily")}
        />
        <TaskGroup
          title="Weekly Tasks"
          tasks={tasks.filter((task) => task.type === "weekly")}
        />
        <TaskGroup
          title="Monthly Tasks"
          tasks={tasks.filter((task) => task.type === "monthly")}
        />
        <TaskGroup
          title="Yearly Tasks"
          tasks={tasks.filter((task) => task.type === "yearly")}
        />
        <Dialog isOpen={showDialog} onClose={closeDialog} />
        <ButtonFAB onClick={() => openDialog()} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
