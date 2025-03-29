
import { Outlet } from 'react-router'
import Navbar from '../components/NavBar'

function Rootlayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}
export default Rootlayout;