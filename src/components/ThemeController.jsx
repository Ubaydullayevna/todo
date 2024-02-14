import { useEffect } from "react";

function ThemeController() {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  function handleChange({ target: { value } }) {
    localStorage.setItem("theme", value);
  }

  return (
    <div className="dropdown ml-auto">
      <label tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="bg-base-300 rounded-box dropdown-content absolute right-0 z-[1] h-[200px] w-52 overflow-y-scroll p-2 shadow-2xl transition"
      >
        {themes.map((theme, index) => {
          return (
            <li key={index}>
              <input
                onChange={(e) => handleChange(e)}
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme}
                value={theme}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ThemeController;
