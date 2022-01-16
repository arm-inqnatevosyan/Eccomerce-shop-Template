import Arrivals from "./Components/Arrivals";
import Blog from "./Components/Blog";
import Blog1 from "./Components/Blog1";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import NavBar from "./Components/Navbar";
import Section from "./Components/Section";
import Services from "./Components/Services";
import Sign from "./Components/SignIn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Section />
      <Featured />
      <Services />
      <Arrivals />
      <Blog />
      <Blog1 />
      <Sign />
      <Footer />
    </div>
  );
}

export default App;