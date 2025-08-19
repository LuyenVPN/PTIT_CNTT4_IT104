import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import AdminIndex from './components/B6/AdminIndex'
import UserLayout from './components/B7/UserLayout'
import UserTable from './components/b8/UserTable'

function App() {
  

  return (
    <>
       {/* ss12-b1 */}
      {/* <ListCourse></ListCourse> */}
      {/* ss12-b2 */}
      {/* <Calculation></Calculation> */}
      {/* ss12-b3 */}
      {/* <UserInfo></UserInfo> */}
      {/* ss12-b4 */}
       {/* <div style={{ display: "flex" }}>
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      </div> */}
      {/* ss12-b5 */}
      {/* <FormatName></FormatName> */}
      {/* ss12-b6 */}
      {/* <AdminIndex></AdminIndex> */}
      {/* ss12-b7 */}
      {/* <UserLayout></UserLayout> */}
      {/* ss12-b8 */}
      <UserTable></UserTable>
    </>
  )
}

export default App
