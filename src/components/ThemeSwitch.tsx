import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkThemeToggle } from "flowbite-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <DarkThemeToggle
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      />
    </div>
  );
};

export default ThemeSwitch;
