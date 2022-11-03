import './App.css';
import { Routes, Route, } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from './pages/homePages/HomePages';
import ProductPage from "./pages/productPage/ProductPage";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ErrorBlock from './components/errorBlock/ErrorBlock';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import { useEffect} from 'react';
import AdPage from './pages/ad/AdPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchHouses } from './redax/housesSlice';
import { fetchCars } from "./redax/carsSlice";



function App() {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchHouses())
    dispatch(fetchCars())
  },[]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
         element={<HomePage/>} />
        <Route path="/product/:product_id" element={<ProductPage/>} />
        <Route path="/login" element={
          <PublicRoute>
              <LoginPage/>
          </PublicRoute>
          } />
        <Route path="/ad" element={
        <PrivateRoute>
          <AdPage/>
        </PrivateRoute>
        }/>
        <Route path="/dashboard" 
        element={
        <PrivateRoute>
             <DashboardPage/>
        </PrivateRoute>
        } />

        <Route path="*"  element={ <ErrorBlock text="Page not  found"/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App
