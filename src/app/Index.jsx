import { AppLayout } from "./AppLayout";
import { Home } from "./section/Home";
import { Portfolio } from "./section/Portfolio";
import { Services } from "./section/Services";
import { Team } from "./section/Team";
import { About } from "./section/About";
import { Contact } from "./section/Contact";
export const Index = () => {
  return (
    <AppLayout>
      <Home />
      <Services />
      <Portfolio />
      <Team />
      <About/>
      <Contact/>
    </AppLayout>
  );
};
