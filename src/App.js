import logo from './logo.svg';
import './App.css';
import Header from './Header';
import All_jewellery from './All_jewellery';

import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Gold from './Gold';
import Diamond from './Diamond';
import Dashboard from './Dashboard';
// import Test from './Test';
import Rings from './Rings';
import Trial from './Trial';
import AdminOrder from './AdminOrder';
import Earrings from './Earrings';
import Daily_wear from './Daily_wear';
import Login from './Login';
import Gifting from './Gifting';
import Myproducts from'./Myproducts';
import Wedding from './Wedding';
import Notice from './Notice';
import Example from './Example';
import Order from './Order';
import Register from './Register';
import Addcategory from './Addcategory';
import Add_to_cart from './Add_to_cart';
import Address from './Address';
import XYZ from './XYZ';
import Add_products from './Add_products';
import Add_to_category from './Add_to_category';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>

        {/* localhost:3000 */}
        <Route path='' element={<Home/>} />
        {/* localhost:3000/About */}
        <Route path='/About' element={<About />} />

        {/* localhost:3000/Contact */}
        <Route path='/Contact' element={<Contact />} />

        {/* localhost:3000/Gold */}
        <Route path='/Gold' element={<Gold/>} />

        {/* localhost:3000/Dashboard */}
         <Route path='/Dashboard' element={<Dashboard/>} />

         {/* localhost:3000/Diamond */}
         <Route path='/Diamond' element={<Diamond/>} />

         {/* Test */}
         {/* <Route path='/Test' element={<Test/>}/> */}

         {/* Rings */}
         <Route path='/Rings' element={<Rings/>}/>

         {/* Earrings */}
         <Route path='/Earrings' element={<Earrings/>}></Route>

         {/* Dailywear */}
         <Route path='/Daily_wear' element={<Daily_wear/>}></Route>

         {/* login */}
         <Route path='/Login' element={<Login/>}></Route>

         {/* Trial */}

         <Route path='/Trial' element={<Trial/>}></Route>

         {/* Admin order */}
         <Route path='/AdminOrder' element={<AdminOrder/>}></Route>

         {/* Gifting */}
         <Route path='/Gifting' element={<Gifting/>}></Route>

         {/* my product */}
         <Route path='/Myproducts' element={<Myproducts/>}></Route>

         {/* wedding */}
         <Route path='/Wedding' element={<Wedding/>}></Route>

         {/* Notice */}
         <Route path='/Notice' element={<Notice></Notice>}></Route>

         {/* example */}
         <Route path='/Example' element={<Example/>}></Route>

         {/* Order */}
         <Route path='/Order' element={<Order/>}></Route>

         {/* register */}
         <Route path='/Register' element={<Register></Register>}></Route>

         {/* Addproducts */}
         <Route path='/Addproducts' element={<Addcategory/>}></Route>

         {/* Addcategory */}
         <Route path='/Addcategory' element={<Addcategory/>}></Route>

         {/* Add to cart */}
         <Route path='/Add_to_cart' element={<Add_to_cart/>}></Route>

         {/* Address */}

         <Route path='/Address' element={<Address/>}></Route>

         {/* XYZ */}
         <Route path='/XYZ' element={<XYZ/>}></Route>

         {/* Add products */}
         <Route path='/Add_products' element={<Add_products/>}></Route>

         {/* Add to category */}
         <Route path='/Add_to_category ' element={<Add_to_category/>}></Route>

       


      </Routes>

      
      <Footer></Footer>
     
    </div>
  );
}

export default App;
