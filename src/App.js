import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps </h1>
     <h1>Hola</h1> 
      <GoogleMap />
      <Helmet>
      <script defer data-key="23aa3957-58d8-41f4-af6c-ad4635e25ce0" src="https://widget.tochat.be/bundle.js"></script> 
       </Helmet>
      
    </div>
  );
}

export default App;
