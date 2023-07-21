import { useTheme } from "../contexts/ThemeContext";

const ToggleThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="" onClick={toggleTheme}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ToggleThemeButton;
