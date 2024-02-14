import { useDeleteTodo } from "../hooks/useDeleteTodo";

function TodoList({ todos }) {
  const { deletedDoc } = useDeleteTodo();
  const handleDelete = (id) => {
    deletedDoc("todos", id);
  };
  return todos.length > 0 ? (
    todos.map(({ title, body, id, completed }) => {
      return (
        <li key={id} className="card relative w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
            <p>
              <strong>Completed</strong>: {completed ? "✅" : "⛔"}
            </p>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-circle btn-ghost  absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <span>No data</span>
  );
}

export default TodoList;
