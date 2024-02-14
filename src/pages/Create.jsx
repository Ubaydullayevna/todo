import { toast } from "react-toastify";
import { useAddNewTodo } from "../hooks/useAddNewTodo";
import { Navigate, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Create() {
  const { addNewDoc, isPending, newTodos } = useAddNewTodo();
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = {};
    for (const [key, value] of data.entries()) {
      obj[key] = value;
    }
    if (obj.completed) {
      obj.completed = true;
    } else {
      obj.completed = false;
    }

    addNewDoc("todos", { uid: user.uid, ...obj })
      .then(() => {
        toast.success("Succesfully added new todo :)");
        navigate("/");
      })
      .catch(({ message }) => {
        toast.warn(message);
      });
  };
  return (
    <div className="my-container py-10">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-[600px] flex-col gap-4"
      >
        <h2 className="mb-4 text-3xl font-bold">Create Todo</h2>
        <label className="flex flex-col items-start">
          <span className="mb-1 font-bold">Title:</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full"
            name="title"
            minLength="4"
            maxLength="100"
            required
          />
        </label>
        <label className="flex flex-col items-start">
          <span className="mb-1 font-bold">Body:</span>
          <textarea
            className="textarea textarea-info min-h-40 w-full"
            placeholder="Type here"
            name="body"
            minLength="4"
            required
          ></textarea>
        </label>
        <div className="form-control max-w-36">
          <label className="label cursor-pointer">
            <span className="label-text font-bold">Completed:</span>
            <input type="checkbox" name="completed" className="checkbox" />
          </label>
        </div>
        <button
          className={`btn btn-primary btn-active ${
            isPending ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          {isPending ? (
            <span class="loading loading-dots loading-md"></span>
          ) : (
            "Add"
          )}
        </button>
      </form>
    </div>
  );
}

export default Create;
