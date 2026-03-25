import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const API_URL = 'https://mass-backend.onrender.com/api/v1/prayerRequest/all';

function AdminPrayerRequests() {
    const { token } = useAuth();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL, {
            headers: { 'x-auth-token': token },
        })
            .then((res) => res.json())
            .then((data) => {
                setRequests(data.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load prayer requests.');
                setLoading(false);
            });
    }, [token]);

    return (
        <div className="min-h-screen bg-amber-50 px-8 py-12">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-yellow-600 text-xs tracking-widest uppercase mb-1">
                            ✝ Admin Panel
                        </p>
                        <h1 className="text-3xl font-bold text-amber-900">
                            Prayer Requests
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-gray-900 text-yellow-400 text-xs font-bold px-4 py-2 rounded">
                            Total: {requests.length}
                        </span>
                        <Link
                            to="/admin/dashboard"
                            className="text-yellow-600 text-sm hover:text-yellow-500 transition font-bold"
                        >
                            ← Dashboard
                        </Link>
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