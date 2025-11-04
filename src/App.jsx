import './App.css'
// import Basic from './basic'
// import CallingFunction from './embadding-expression/callingFunction'
// import Condition from './embadding-expression/Condition'
// import Welcome from './embadding-expression/Welcome'

// function App() {

//   return (
//     <>
//     {/* embading expression */}
//     {/* <Basic/> */}
//     {/* <Welcome/> */}
//     {/* <CallingFunction/> */}
//     {/* <Condition/> */}
//     </>
//   )
// }

// export default App
            //--------------- class Component---------------------------------
import React, { Component } from 'react'
import BasicClass from './class-component/basicClass'
import Counter from './class-component/counter'
import Mounting from './class-component/LifeCycleMethods/Mounting'
import Update from './class-component/LifeCycleMethods/Update'

export default class App extends Component {
  render() {
    return (
      <div>
      {/* <BasicClass/> */}
      {/* <Counter/> */}

      {/* //..............life cycle method..................... */}

      {/* <Mounting/> */}
      <Update/>
      </div>
    )
  }
}

