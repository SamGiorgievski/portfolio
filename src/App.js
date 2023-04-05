import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Projects from "./Projects";
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path ="/" index element = {<Home/>}/>
        <Route path ="/projects" index element = {<Projects/>}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
