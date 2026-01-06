import "./FormNewTask.css";
export function FormNewTask({ onSubmit }) {
  return (
    <>
      <form action={onSubmit} className="form-newtask">
        <label htmlFor="newtask">New Task</label>
        <input type="text" id="newtask" required />
        <button className="btn-addtask">Add Task</button>
      </form>
    </>
  );
}
