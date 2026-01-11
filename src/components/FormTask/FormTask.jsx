import "./FormTask.css";
export function FormTask({ onSubmit }) {
  return (
    <>
      <form action={onSubmit} className="form-task">
        <label htmlFor="newTask">New Task</label>
        <input type="text" id="newTask" name="newTask" required />
        <button className="btn-addtask">Add Task</button>
      </form>
    </>
  );
}
