import {  Link, Route, Routes } from 'react-router-dom'
import './App.css'
// import Product from './dynamic-Routing/product'
// import ProductDetails from './dynamic-Routing/ProductDetails'
// import Navbar from './nested-routing/Navbar'
// import Home from './nested-routing/pages/Home'
// import About from './nested-routing/pages/About'
// import Services from './nested-routing/pages/Services'
// import WebDev from './nested-routing/pages/services/WebDev'
// import AppDev from './nested-routing/pages/services/AppDev'
// import Person from './embadding-expression/Person'
import Items from './react-keys/Items'
import AllProducts from './react-keys/AllProducts'
import SimpleForm from './form/SimpleForm'
import Form from './form/FOrm'
// import Basic from './functional-component/Basic'
// import Home from './functional-component/hooks/useContext/themeSetting/Home'
// import { ThemeProvider } from './functional-component/hooks/useContext/themeSetting/ThemeContext'
// import { UserApiProvider } from './functional-component/hooks/useContext/userList/UserApiContext'
// import UserList from './functional-component/hooks/useContext/userList/UserList'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/about'
// import { FcAbout } from 'react-icons/fc'
// import Counter from './functional-component/hooks/useState/Counter'
// import UseEffect from './functional-component/hooks/useState/useEffect'
// import UserList from './functional-component/hooks/useState/UserList'
// import Props from './functional-component/props'
// import State from './functional-component/State'
// import CallingFunction from './embadding-expression/callingFunction'
// import Condition from './embadding-expression/Condition'
// import Welcome from './embadding-expression/Welcome'

function App() {

  return (
    <>
      {/* embading expression */}
      {/* <Basic/> */}
      {/* <Person/> */}
      {/* <Welcome/> */}
      {/* <CallingFunction/> */}
      {/* <Condition/> */}

      {/* -----------------------------functional component------------------------------ */}
      {/* <Basic/> */}

      {/* <State/> */}
      {/* <Props/> */}
      {/* <Counter/> */}
      {/* <UseEffect/> */}
      {/* <UserList/> */}

      {/* ----------------------------usecontext---------------------------------- */}
      {/* -----------theme---------- */}
      {/* <ThemeProvider>
        <Home />
      </ThemeProvider> */}

      {/* 2.  useList */}
      {/* 
      <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}


      {/* --------react-router-dom-------- */}
      {/* 1.Basic */}

      {/* <div>
  <nav>
    <Link to='/'>Home</Link>|
    <Link to='/about'>about</Link>
  </nav>

  <Routes>
    <Route path='/' element={<Home/>}/>  
      <Route path='/about' element={<About/>}/>

  </Routes>
</div> */}      

      {/* <Navbar /> */}
{/* 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/serivces' element={<Services />}>
          <Route path='web-dev' element={<WebDev />} />
          <Route path='app-dev' element={<AppDev />} />
        </Route>
      </Routes> */}

      {/* <Items/> */}
      {/* <AllProducts/> */}
      {/* <SimpleForm/> */}
      <Form/>
    </>
  )
}

export default App


//             //--------------- class Component---------------------------------
// import React, { Component } from 'react'
// import BasicClass from './class-component/basicClass'
// import Counter from './class-component/counter'
// import Mounting from './class-component/LifeCycleMethods/Mounting'
// import Update from './class-component/LifeCycleMethods/Update'
// import UnMounting from './class-component/LifeCycleMethods/unMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//       {/* <BasicClass/> */}
//       {/* <Counter/> */}

//       {/* //..............life cycle method..................... */}

//       {/* <Mounting/> */}
//       {/* <Update/> */}
//       <UnMounting/>



// -----------react keys-------------------

//       </div>
//     )
//   }
// }

