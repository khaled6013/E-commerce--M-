import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pages from './pages/Pages'
import LayOut from './components/LayOut'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<LayOut></LayOut>}>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/pages' element={<Pages></Pages>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
