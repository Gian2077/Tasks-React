<<<<<<< HEAD:src/components/FormNewTask/FormNewTask.jsx
import "./FormNewTask.css";
export function FormNewTask({ onSubmit, defaultValue }) {
=======
import "./FormTask.css";
export function FormTask({ onSubmit }) {
>>>>>>> 611e83358ca648d3e735875884db71d774a07e7e:src/components/FormTask/FormTask.jsx
  return (
    <>
      <form action={onSubmit} className="form-task">
        <label htmlFor="newTask">New Task</label>
        <input
          type="text"
          id="newTask"
          name="newTask"
          required
          defaultValue={defaultValue}
        />
        <button className="btn-addtask">Add Task</button>
      </form>
    </>
  );
}
