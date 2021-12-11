import { useState } from "react";
const Addtask = ({ onadd }) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onadd({ text, day, reminder });
    settext("");
    setday("");
    setreminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Date & Time"
          value={day}
          onChange={(e) => setday(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>reaminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default Addtask;
