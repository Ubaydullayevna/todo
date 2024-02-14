import TodoList from "../components/TodoList";
import { useCollection } from "../hooks/useCollection";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Home() {
  const { user } = useGlobalContext();
  console.log(user.uid);
  const { documents: todos } = useCollection("todos", ["uid", "==", user.uid]);
  return (
    <div className="my-container py-5">
      <h2 className="mb-4 text-3xl font-bold">Todos</h2>
      {todos ? (
        <ul className="flex flex-col gap-4">
          <TodoList todos={todos} />
        </ul>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default Home;
