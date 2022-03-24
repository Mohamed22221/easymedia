import { Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="easymedia" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
