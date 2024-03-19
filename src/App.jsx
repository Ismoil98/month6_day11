import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, NotFound, Shop, Contact } from './pages';
import {Headers, Loader, Footer} from './components'


const App = () => {
  return (
      <Router> 
        <Headers/>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loader/>}>
                <Home/>
              </Suspense>
            }>
          </Route>
          <Route
            path='/shop'
            element={
              <Suspense fallback={<Loader/>}>
                <Shop/>
              </Suspense>
            }>
          </Route>
          <Route
            path='/about'
            element={
              <Suspense fallback={<Loader/>}>
                <About/>
              </Suspense>
            }>
          </Route>
          <Route
            path='/contact'
            element={
              <Suspense fallback={<Loader/>}>
                <Contact/>
              </Suspense>
            }>
          </Route>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App