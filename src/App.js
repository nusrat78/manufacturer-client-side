import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/tool/:toolId'
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>

          }
        ></Route>
        <Route path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>

          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="/dashboard/review" element={<AddReview></AddReview>}></Route>
          <Route path="/dashboard/profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/allusers" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
