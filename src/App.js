import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Auth/Login/Login';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';
import Signup from './Pages/Auth/Signup/Signup';
import Footer from './Pages/Common/Footer/Footer';
import Header from './Pages/Common/Header/Header';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/ManageInventory/MyItems';
import Page404 from './Pages/Page404/Page404';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './Pages/ManageInventory/AddItem';
import StockUpdate from './Pages/ManageInventory/StockUpdate';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }>
        </Route>
        <Route path='/myitems' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }></Route>
        <Route path='/additem' element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }></Route>
        <Route path='/stockupdate/:id' element={
            <RequireAuth>
              <StockUpdate></StockUpdate>
            </RequireAuth>
          }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
