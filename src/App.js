import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Alljewellery from './Alljewellery';

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

import Earrings from './Earrings';
import Dailywear from './Dailywear';
import Login from './Login';
import Gifting from './Gifting';
import Myproducts from './Myproducts';
import Wedding from './Wedding';
import Notice from './Notice';
import Example from './Example';
import Order from './Order';
import Register from './Register';
import Addcategory from './Addcategory';
import Address from './Address';
import XYZ from './XYZ';
import Addproduct from './Addproduct';
import Addtocategory from './Addtocategory';
import Address1 from './Address1';
import PunjabiBrideJewellery from './PunjabiBrideJewellery';

import Account from './Account';
import AdminOrders from './AdminOrders';
import AllProducts from './AllProducts';
import Addnewaddress from './Addnewaddress';
import Add from './Add';
import Products from './Products';
import Cart from './Cart';
import Cart2 from './Cart2';



function App() {
  return (
    <div>

      <Header></Header>
      <Routes>

        {/* localhost:3000 */}
        <Route path='/Home' element={<Home />} />
        {/* localhost:3000/About */}
        <Route path='/About' element={<About />} />



        {/* localhost:3000/Contact */}
        <Route path='/Contact' element={<Contact />} />

        {/* localhost:3000/Gold */}
        <Route path='/Gold' element={<Gold />} />

        {/* localhost:3000/Dashboard */}
        <Route path='/Dashboard' element={<Dashboard />} />

        {/* localhost:3000/Diamond */}
        <Route path='/Diamond' element={<Diamond />} />

        {/* Test */}
        {/* <Route path='/Test' element={<Test/>}/> */}

        {/* Rings */}
        <Route path='/Rings' element={<Rings />} />

        {/* Earrings */}
        <Route path='/Earrings' element={<Earrings />}></Route>

        {/* Dailywear */}
        <Route path='/Dailywear' element={<Dailywear />}></Route>

        {/* login */}
        <Route path='/Login' element={<Login />}></Route>


        {/* Trial */}

        <Route path='/Trial' element={<Trial />}></Route>



        {/* Gifting */}
        <Route path='/Gifting' element={<Gifting />}></Route>

        {/* my product */}
        <Route path='/Myproducts' element={<Myproducts />}></Route>

        {/* wedding */}
        <Route path='/Wedding' element={<Wedding />}></Route>

        {/* Notice */}
        <Route path='/Notice' element={<Notice></Notice>}></Route>

        {/* example */}
        <Route path='/Example' element={<Example />}></Route>

        {/* Order */}
        <Route path='/Order' element={<Order />}></Route>

        {/* register */}
        <Route path='/Register' element={<Register></Register>}></Route>

        {/* Addproducts */}
        <Route path='/Addproducts' element={<Addcategory />}></Route>

        {/* Addcategory */}
        <Route path='/Addcategory' element={<Addcategory />}></Route>



        {/* Address */}

        <Route path='/Address' element={<Address />}></Route>

        {/* XYZ */}
        <Route path='/XYZ' element={<XYZ />}></Route>

        {/* Add products */}
        <Route path='/Addproduct' element={<Addproduct />}></Route>

        {/* Add to category */}
        <Route path='/Addtocategory' element={<Addtocategory />}></Route>

        {/* address1 */}
        <Route path='/Address1' element={<Address1 />}></Route>

        {/* Punjabi bride jwellery */}
        <Route path='/PunjabiBrideJewellery' element={PunjabiBrideJewellery}></Route>


        <Route path='/Account' element={<Account />} />

        <Route path='/AdminOrders' element={<AdminOrders />}></Route>

        <Route path='/Allproducts' element={<AllProducts />}></Route>

        <Route path='/Addnewaddress' element={<Addnewaddress />}></Route>

        <Route path='/Add' element={<Add />}></Route>

        <Route path='/Products' element={<Products />}></Route>

        <Route path='/Cart' element={<Cart />}></Route>

        <Route path='/Cart2' element={<Cart2 />}></Route>



      </Routes>


      <Footer></Footer>

    </div>
  );
}

export default App;
