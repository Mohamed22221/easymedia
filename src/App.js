import { Routes, Route} from "react-router-dom";
import React , {useState, useEffect} from 'react'
import JobId from "./components/careers/JobId";
import Navbar from './components/navbar/Navbar';
import Carrier from "./pages/Carrier";
import Home from './pages/Home';
import Supscripe from "./pages/Supscripe";
import { ToastProvider } from 'react-toast-notifications';
import Terms from "./components/glopal/Terms";
import ScrollToTop from "./components/glopal/ScrollToTop";
import Loading from "./components/glopal/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false);
    }, 4400);


  },[])
  return (
    <div >
    {loader && <Loading/>}
    <ToastProvider autoDismiss
    autoDismissTimeout={1000} placement="bottom-center">
      <Navbar/>
      <ScrollToTop />
      <Routes>Carrier
        <Route path="/" element={<Home/>} />
        <Route path="easymedia" element={<Home/>} />
        <Route path="/Careers" element={<Carrier/>} />
        <Route path="/subscribe" element={<Supscripe/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="/jop" element={<JobId/>} >
        <Route path=":jopId" element={<JobId/>} />
        </Route>
      </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
