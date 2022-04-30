import { Routes, Route} from "react-router-dom";
import JobId from "./components/careers/JobId";
import Navbar from './components/navbar/Navbar';
import Carrier from "./pages/Carrier";
import Home from './pages/Home';
import Supscripe from "./pages/Supscripe";

import { ToastProvider } from 'react-toast-notifications';
function App() {



  return (
    <div className="App">
    <ToastProvider autoDismiss
    autoDismissTimeout={4000} placement="bottom-center">
      <Navbar/>
      <Routes>Carrier
        <Route path="/" element={<Home/>} />
        <Route path="easymedia" element={<Home/>} />
        <Route path="/Careers" element={<Carrier/>} />
        <Route path="/subscribe" element={<Supscripe/>} />
        <Route path="/jop" element={<JobId/>} >
        <Route path=":jopId" element={<JobId/>} />
        </Route>
      </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
