
// import './App.css'
import LoginPage from './pages/auth/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegisterPage } from './pages/auth/RegisterPage';
import { Router } from './router';
import { Parents } from './ontap/Parents';
import { Link } from 'react-router-dom';



function App() {


  // lấy ra biến môi trường
  console.log(import.meta.env.VITE_API_HOST);
  

  return (
    <>
   <Link to={"/"}>Home</Link>
   <Link to={"/about"}>ABout</Link>
   <Link to={"/products"}>Product</Link>
  
   <Link to={"/profile"}>Profile</Link>
   <Link to={"/login"}>Login</Link>
   {/* nhúng router vào */}
   <Router/>
   {/* <Parents name={'nguyễn văn a'} sex={true}/> */}
    </>
  )
}

export default App
