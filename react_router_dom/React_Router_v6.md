## 📌 React Router DOM Setup (Modern Approach)// {BrowserRouter } is OLd  Approach

---

### 🌟 **Step 1: Setting Up RootLayout (src/Layout/RootLayout.jsx)**
```jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Rootlayout() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}

export default Rootlayout;
```

---

### 🌟 **Step 2: Setting Up App.jsx (src/App.jsx)**
```jsx
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>        
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```

---

### 🌟 **Step 3: Setting Up Navbar (src/components/Navbar.jsx)**
```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <ul className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "font-bold" : ""}>Contact</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? "font-bold" : ""}>Login</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
```

---

## 💡 **Explanation & Tips**
1. **RootLayout.jsx:** Handles the overall layout with `Navbar` and `Outlet` for nested pages.
2. **App.jsx:** Sets up the router using the modern `createBrowserRouter` & `RouterProvider` (the latest approach).
3. **Navbar.jsx:** Uses `NavLink` to provide active class highlighting.
4. **Styling:** Using Tailwind CSS for a clean & beautiful UI.

---

## 🎯use Naviage**
```JSX
  <button onClick={() => navigate("/about")}>Get started</button>
  ```
  by thet we can nagigateb to any page and Ourhistory of click store in History stack


This setup is clean, modern, and easy to scale! 🚀




