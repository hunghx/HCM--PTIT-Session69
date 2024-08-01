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
import NotFound from '../pages/NotFound'
import ProductDetails from '../pages/user/ProductDetails'

export const Router = () => {
  return (
    // <Routes>
    //     <Route path='/register' element={<RegisterPage/>}/>
    //     <Route path='/login' element={<LoginPage/>}/>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/admin' element={<DashBoard/>}/>
    // </Routes>

    <Routes>
      {/* định nhĩa các đường dẫn */}
      <Route path='/' element={<Home />} >
        {/* khai báo các đường dẫn con ở đây */}
        <Route index element={<main>Banner</main>}/>
        <Route path='products' element={<main>Products</main>}/>
        <Route path='about' element={<main>about</main>}/>
        <Route path='profile' element={<main>Profile</main>}/>
      </Route>
      <Route path='/product/:productId' element={<ProductDetails/>}/>

      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
