import { useDarkMode } from '../providers/DarkModeProvider';

export default function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className={
        "font-planar font-normal capitalize px-4 py-2 select-none " +
        "text-foreground dark:text-foreground-dark " +
        "hover:bg-accent-blood-orange hover:text-background " +
        "transition-colors duration-300"
      }
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
