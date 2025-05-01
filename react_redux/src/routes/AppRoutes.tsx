import { Route, Routes } from 'react-router-dom';
import LoginPage from '../features/auth/pages/LoginPage';
import SignupPage from '../features/auth/pages/SignupPage';
import HomePage from '../layouts/MainLayout';
// import ProductPage from '../features/product/pages/ProductPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/home" element={<HomePage/>} /> 
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/products" element={<ProductPage />} */}
    </Routes>
  );
};

export default AppRoutes;
