console.log("First")
// we have to npm install react-router-dom
// then in main.jsx ==== import { BrowserRouter } from "react-router-dom";
// <BrowserRouter>
// <App />
// </BrowserRouter> // wrap the App component in the <BrowserRouter> component. 

console.log("2nd");
//in app.jsx ==== import {Routes, Route} from 'react-router-dom';
//after import the <Routes> and <Route> component .  Route will tke @ paraMeter path and element . here path = "URL" and element = <which we want to show on homepage/>
// <Routes>
//   <Route path="/" element={<Home/>}/>
//   <Route path="/about" element={<About/>}/>
//   <Route path="/contact" element={<Contact/>}/>
//</Routes>

console.log("3rd");
//in Navbar.jsx ==== import { Link } from 'react-router-dom';
//after import the <Link> component .  Link will tke @ paraMeter to = "URL" . here path = "URL" . like <Link to="/about">Home</Link>


console.log(`--------------from here we are gona learn new way to setup react Router Dom-----------------`)