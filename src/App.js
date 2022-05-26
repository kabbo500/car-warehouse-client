import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Navbar/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyPortfolio from './Pages/Navbar/MyPortfolio/MyPortfolio';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          {/* <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route> */}
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
