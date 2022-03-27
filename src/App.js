import { Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Carrier from "./pages/Carrier";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>Carrier
        <Route path="/" element={<Home/>} />
        <Route path="easymedia" element={<Home/>} />
        <Route path="Careers" element={<Carrier/>} />
      </Routes>
    </div>
  );
}

export default App;
