import "./FormNewTask.css";
export function FormNewTask({ onSubmit, defaultValue }) {
  return (
    <>
      <form action={onSubmit} className="form-newtask">
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
