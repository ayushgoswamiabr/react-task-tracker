import { FaTimes } from "react-icons/fa";
const Task = ({ task, ondelete, ontoggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => ontoggle(task._id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => ondelete(task._id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
