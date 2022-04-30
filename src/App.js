import { Routes, Route} from "react-router-dom";
import JobId from "./components/careers/JobId";
import Navbar from './components/navbar/Navbar';
import Carrier from "./pages/Carrier";
import Home from './pages/Home';
import Supscripe from "./pages/Supscripe";
import ReactPixel from 'react-facebook-pixel';
import { ToastProvider } from 'react-toast-notifications';
function App() {


const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init('yourPixelIdGoesHere', advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
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
