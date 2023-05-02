import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTopNav from "./components/ScrollTopNav";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
      <ScrollTopNav />
    </div>
  );
}

export default App;
