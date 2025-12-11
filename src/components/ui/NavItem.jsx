import { useTheme } from "../../context/useTheme";

export const NavItem = ({ label, href }) => {
  const { darkMode } = useTheme();
  return (
    <a href={href} className={`${darkMode ? "hover:text-orange-600" : "hover:text-gray-200 "}  transition font-medium`}>
      {label}
    </a>
  );
};
