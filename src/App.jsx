import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import RegisterPage from './pages/RegisterPage'
import OrderPage from './pages/OrderPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {  
  // App.jsx 에 react-router-dom 설정 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/> 
          <Route path='product/:id' element={<DetailPage />}/>
          <Route path='cart' element={<CartPage />}/>
          <Route path='login' element={<LoginPage />}/>
          <Route path='register' element={<RegisterPage />}/>
          <Route path='order' element={<OrderPage />}/>
          <Route path='*' element={<NotFoundPage />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
