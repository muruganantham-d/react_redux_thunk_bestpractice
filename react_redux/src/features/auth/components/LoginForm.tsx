import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { loginThunk } from '../authThunks';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Dispatch the login action
      const resultAction = await dispatch(loginThunk({ email, password }));
      if (loginThunk.fulfilled.match(resultAction)) {
        // On success, redirect to home page
        navigate('/home');
        toast.success('Login successful!');
      } else {
          const errorMessage = resultAction.payload as string;
          toast.error(errorMessage || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      
      <input
        className="w-full p-2 mb-4 border"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full p-2 mb-4 border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
    <Link to="/signup">
      <button className="mt-2 rounded border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2">
        SignUp
      </button>
    </Link>
        </div>
  );
};

export default LoginForm;
