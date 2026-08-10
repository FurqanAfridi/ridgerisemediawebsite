import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import "./theme-toggle.css";

export function ThemeToggle({
  className,
  variant = "header",
}: {
  className?: string;
  variant?: "header" | "panel";
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={cn(
        "theme-toggle",
        variant === "panel" && "theme-toggle--panel",
        className,
      )}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span
        className={cn(
          "theme-toggle__thumb",
          isDark && "theme-toggle__thumb--dark",
        )}
        aria-hidden="true"
      />
      <Sun
        className={cn(
          "theme-toggle__icon theme-toggle__icon--sun",
          !isDark && "theme-toggle__icon--active",
        )}
        size={16}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "theme-toggle__icon theme-toggle__icon--moon",
          isDark && "theme-toggle__icon--active",
        )}
        size={16}
        aria-hidden="true"
      />
    </button>
  );
}
