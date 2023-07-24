import "./App.css";
import Header from "./modules/header.js";
import Footer from "./modules/footer.js";
import Navbar from "./modules/navbar.js"
import Main from "./modules/main.js"


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
