import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="grow">
      <Outlet />
    </main>
  );
}

export default Main;
