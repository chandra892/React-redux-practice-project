import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Electronics from './components/electronics/Electronics'
import Home from './components/home/Home'
import Jewelery from './components/jewelery/Jewelery';
import Men from './components/mens/Men';
import Womens from './components/womens/Womens';
import PageNotFound from './components/page not found/PageNotFound'
import ProductDetails from './components/productDetails/ProductDetails';
import Profile from './components/profile/Profile';
import PersonalDetails from './components/details/PersonalDetails';
import WorkExpe from './components/details/WorkExpe';
import Educational from './components/details/Educational';
import Cart from './service/cart/Cart';






const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/men' element={<Men />} />
        <Route path='/womens' element={<Womens />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path='/profile' element={<Profile />}>

        <Route path="" element={<Navigate to="personal"/>} />
        <Route path='personal' element={<PersonalDetails />} />
        <Route path='work' element={<WorkExpe />} />
        <Route path='educational' element={<Educational/>} />

        
        
        </Route>
        <Route path='/cart' element={<Cart />}/>

        
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>

    </div>
  )
}

export default App