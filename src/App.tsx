
import './App.css'
import { Routes, Route } from "react-router";

import MainLayout from './layout/MainLayout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <div className="">

              <MainLayout><div className="">hjg</div></MainLayout>
            </div>


          </>

        } >
          <Route path="login" element={<>dsj</>} />
          <Route path="register" element={<>dsj</>} />
        </Route>


      </Routes>
    </>
  )
}

export default App
