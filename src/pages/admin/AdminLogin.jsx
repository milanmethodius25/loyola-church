import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LOGIN_URL = 'https://mass-backend.onrender.com/api/v1/admin/login';

function AdminLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        adminEmail: '',
        password: '',
    });
    const [status, setStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                login(data.token, data.data);
                navigate('/admin/dashboard');
            } else {
                setErrorMsg(data.error || 'Invalid credentials.');
                setStatus('error');
            }
        } catch {
            setErrorMsg('Network error. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-gray-900 text-2xl mx-auto mb-4">
                        LC
                    </div>
                    <h1 className="text-white font-bold text-2xl">St.Ignatius of Loyola Church</h1>
                    <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
                </div>

                {/* Login Card */}
                <div className="bg-white border-t-4 border-yellow-500 p-8">
                    <h2 className="font-bold text-amber-900 text-xl mb-6 text-center">
                        🔐 Admin Login
                    </h2>

                    {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 mb-6 text-sm rounded">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="adminEmail"
                                value={formData.adminEmail}
                                onChange={handleChange}
                                required
                                placeholder="admin@gmail.com"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter your password"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                    Logging in...
                                </span>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-600 text-xs mt-4">
                    ← <a href="/" className="text-yellow-400 hover:text-yellow-300">Back to Website</a>
                </p>

            </div>
        </div>
    );
}

export default AdminLogin;