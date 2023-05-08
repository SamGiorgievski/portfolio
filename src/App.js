import Header from "./Header";
import Home from "./Home";
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

    </div>
  );
}

export default App;
