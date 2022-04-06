import { Routes, Route} from "react-router-dom";
import JobId from "./components/careers/JobId";
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
        <Route path="/Careers" element={<Carrier/>} />
        <Route path="/jop" element={<JobId/>} >
        <Route path=":jopId" element={<JobId/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
