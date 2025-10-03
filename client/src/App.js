import './App.css';
import Form from './componets/Form';
import Details from './componets/Details';
import Navbar from './componets/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center pt-10">Home Page</h1>} />
        <Route path="/form" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  
 
  );
}

export default App;
