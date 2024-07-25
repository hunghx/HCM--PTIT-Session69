
// import './App.css'
import LoginPage from './pages/auth/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegisterPage } from './pages/auth/RegisterPage';
import { Router } from './router';



function App() {


  // lấy ra biến môi trường
  console.log(import.meta.env.VITE_API_HOST);
  

  return (
    <>
   
   {/* nhúng router vào */}
   <Router/>
    </>
  )
}

export default App
