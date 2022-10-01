import { useEffect, useState } from "react";

export const Themebutton = () => {
  const [theme, setTheme] = useState("minside");

  const handleTheme = () => {
    let newTheme = "";
    switch (theme) {
      case "minside":
        newTheme = "dark";
        break;
      case "dark":
        newTheme = "minside";
        break;
      /* case "light":
        newTheme = "minside";
        break; */
      default:
        break;
    }
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", "minside");
  }, []);

  return (
    <button
      className="bg-slate-300 text-gray-900 rounded-bl-md focus:outline-none fixed top-0 right-0 p-2"
      onClick={handleTheme}
    >
      {theme}
    </button>
  );
};
