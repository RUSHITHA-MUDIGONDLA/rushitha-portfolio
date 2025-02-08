import "./Task.css";
export default function Task() {
  return (
    <form className="form">
      <label className="label">
        Task:
        <textarea rows={1} cols={15}></textarea>
      </label>
      <label>
        ETA:
        <input type="date" required />
      </label>
      <button>Create Task</button>
    </form>
  );
}
