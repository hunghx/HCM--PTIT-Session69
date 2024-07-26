// định nghĩa các router của ứng dụng 
// admin
// http://localhost:5173/admin/users
// user
// http://localhost:5173/profile


import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../pages/auth/RegisterPage'
import LoginPage from '../pages/auth/LoginPage'
import { Home } from '../pages'
import { DashBoard } from '../pages/admin'

export const Router = () => {
  return (
    <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<DashBoard/>}/>
    </Routes>
  )
}
