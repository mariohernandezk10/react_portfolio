import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header className="App-header"></Header>
      <About/>
      <Services/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
