import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Pages/home.jsx'
import Contact from './Pages/contact.jsx'
import About from './Pages/about.jsx'
// import User from './Pages/user.jsx'
import Github from './Pages/github.jsx'





// method 1
// const router = createBrowserRouter([
//   {
//       path:'/',
//       element:<Layout/>,
//       children:[
//         {
//           path: "home",
//           element: <Home/>
//         },
//         {
//           path: "pricing",
//           element: <Pricing/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//       ]
//   }
// ])

// method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='user/:userid' element={<User/>}/> */}
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
