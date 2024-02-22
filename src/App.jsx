import Sidebar from "./components/sideBar/Sidebar"

import { Outlet } from 'react-router-dom';


function App() {


  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
