import './App.css'

import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about';
import Contact from './pages/Contact';
import Login from './pages/login';
import Rootlayout from './layout/Rootlayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    )
  )
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App