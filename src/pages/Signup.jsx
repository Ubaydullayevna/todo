import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Signup() {
  const { signUpWithGoogleProvider, signUp } = useSignup();
  const { isPending } = useGlobalContext();
  // HANDLESUBMIT
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = {};
    for (const [key, value] of data.entries()) {
      obj[key] = value;
    }
    signUp(obj);
  };

  return (
    <div className="flex h-full items-center justify-center bg-base-200">
      <div className="w-full max-w-[400px]">
        <h2 className="mb-4 text-center text-2xl font-bold">Signup</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
          <label>
            <span className="label-text font-semibold">Email</span>
            <input
              type="email"
              placeholder="example@email.com"
              name="email"
              className="input input-bordered input-info w-full"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </label>
          <label>
            <span className="label-text font-semibold">Photo URL</span>
            <input
              type="url"
              placeholder="Enter your photo URL"
              name="photoURL"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <label>
            <span className="label-text font-semibold">Username</span>
            <input
              type="text"
              placeholder="John"
              name="displayName"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <label>
            <span className="label-text font-semibold">Password</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered input-info w-full"
              required
            />
          </label>
          <button
            className={`btn btn-neutral btn-active ${
              isPending ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            {isPending ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Submit"
            )}
          </button>
          <button
            onClick={(e) => handleGoogleLogin(e)}
            className="btn btn-ghost btn-active"
          >
            Google
          </button>
          <Link className="btn btn-success btn-active" to={"/login"}>
            I have an account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
