import './App.css'
// import Basic from './functional-component/Basic'
import Home from './functional-component/hooks/useContext/themeSetting/Home'
import { ThemeProvider } from './functional-component/hooks/useContext/themeSetting/ThemeContext'
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
      <ThemeProvider>
        <Home />
      </ThemeProvider>
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
//       </div>
//     )
//   }
// }

