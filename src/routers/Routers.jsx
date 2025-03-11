import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Mainlayout from "../layout/mainlayout/Mainlayout"
import Product from '../product/Product';
import {Categorypage, Products, Login, Notfound, Singup, About, Contact, Home} from '@/pages';

const Routers = () => {
  return (
        <Routes>
        <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Singup" element={<Singup/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Product' element={<Product/>}/>
        <Route path="Products/:Products_id" element={<Products/>}/>
        <Route path='/Category/:category_slug' element={<Categorypage/>}/>
        </Route>
    </Routes>
  )
}
 
export default Routers