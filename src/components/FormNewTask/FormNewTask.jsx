import "./FormNewTask.css";
export function FormNewTask({ onSubmit }) {
  return (
    <>
      <form action={onSubmit} className="form-newtask">
        <label htmlFor="newTask">New Task</label>
        <input type="text" id="newTask" name="newTask" required />
        <button className="btn-addtask">Add Task</button>
      </form>
    </>
  );
}
