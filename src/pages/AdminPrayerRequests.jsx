import { useState, useEffect } from 'react';

const API_URL = 'https://mass-backend.onrender.com/api/v1/prayerRequest/all';
const ADMIN_PASSWORD = 'loyola2024';

function AdminPrayerRequests() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setWrongPassword(false);
        } else {
            setWrongPassword(true);
        }
    };

    useEffect(() => {
        if (!isAuthenticated) return;
        setLoading(true);
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setRequests(data.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load prayer requests.');
                setLoading(false);
            });
    }, [isAuthenticated]);

    // Password Screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-900 pt-28 pb-20 px-8 flex items-center justify-center">
                <div className="bg-white border-t-4 border-yellow-500 p-10 w-full max-w-sm">
                    <div className="text-center mb-8">
                        <div className="text-4xl mb-3">🔐</div>
                        <h2 className="font-bold text-amber-900 text-2xl">Admin Access</h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Enter password to view prayer requests
                        </p>
                    </div>

                    {wrongPassword && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 mb-4 rounded">
                            ❌ Wrong password. Please try again.
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter admin password"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-gray-900 font-bold py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 pt-28 pb-20 px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                            ✝ Admin Panel
                        </p>
                        <h1 className="text-3xl font-bold text-amber-900">
                            Prayer Requests
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-gray-900 text-yellow-400 text-xs font-bold px-4 py-2 rounded">
                            Total: {requests.length}
                        </span>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="bg-red-500 text-white text-xs font-bold px-4 py-2 hover:bg-red-400 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4" />
                        <p className="text-gray-500 italic">Loading prayer requests...</p>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-500">❌ {error}</p>
                    </div>
                )}

                {/* Requests List */}
                {!loading && !error && (
                    <div className="space-y-4">
                        {requests.length === 0 && (
                            <div className="bg-white border border-yellow-200 p-12 text-center">
                                <div className="text-5xl mb-4">🙏</div>
                                <p className="text-gray-500 italic">No prayer requests yet.</p>
                            </div>
                        )}
                        {requests.map((item, index) => (
                            <div
                                key={item._id}
                                className="bg-white border-l-4 border-yellow-500 p-6 shadow-sm hover:shadow-md transition duration-300"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                                            {item.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900">{item.name}</h3>
                                            <p className="text-gray-400 text-xs">📞 {item.mobile}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-xs bg-gray-100 px-2 py-1 rounded">
                                        #{index + 1}
                                    </span>
                                </div>
                                <div className="bg-amber-50 border border-yellow-100 p-4 rounded">
                                    <p className="text-xs font-bold tracking-widest uppercase text-yellow-600 mb-2">
                                        Prayer Intention
                                    </p>
                                    <p className="text-gray-700 leading-relaxed italic">
                                        "{item.intention}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default AdminPrayerRequests;