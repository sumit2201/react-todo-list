import { TodoListType } from "../types";
import Button from "./button";
import Checkbox from "./checkbox";

const TodoList = ({ todos, onMarkAsDone, onDelete }: TodoListType) => {
  const items = todos.map((item) => {
    return (
      <li key={item.id} className={item.done ? "completed" : ""}>
        <Checkbox
          className="checkbox"
          checked={item.done}
          onChange={(e) => {
              onMarkAsDone(item.id, e.target.checked);
          }}
        />
        <span>{item.text}</span>
        <Button
          className="delete"
          type="button"
          onClick={(e) => {
            onDelete(item.id);
          }}
        >
          Delete
        </Button>
      </li>
    );
  });

  return <ul className="todos">{items}</ul>;
};

export default TodoList;
