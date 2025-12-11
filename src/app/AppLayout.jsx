import { Navbar } from "../components/ui/Navbar";
import { ThemeProvider } from "../context/useTheme";
import { Footer } from "./section/Footer";
export const AppLayout = ({ children }) => {
  return (
    <>

        <Navbar />
        <main>{children}</main>
        <Footer/>
    </>
  );
};
