import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Your route setup file
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={1000} position="top-center" />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
