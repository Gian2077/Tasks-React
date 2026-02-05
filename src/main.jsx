import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./components/TaskProvider/TaskProvider.jsx";
import { DateProvider } from "./components/DateProvider/DateProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DateProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </DateProvider>
  </StrictMode>,
);
