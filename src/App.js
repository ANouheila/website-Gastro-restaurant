import './App.css';
import  Header from "./components/Header";
import { BrowserRouter as Router, Routes,Route,useParams } from "react-router-dom";
import "./styles/style.css";
import "./styles/responsive.css"
import "./styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import  Footer from "./components/Footer";
import Home from "./pages/Home";
import Social from "./components/Social";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Receipe from './components/Receipe';
import Meal from './pages/Meal';
import Favorite from './pages/Favorite';

function App() {
  return (
        <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/meal/:id" element={<Meal />} />
               <Route path="/About" element={<About/>} />
               <Route path="/menu" element={<Menu/>} />
               <Route path="/favorite" element={<Favorite/>} />

            </Routes>   
            <Social />     
            <Footer />
        </Router>
      



  );

}

export default App;




