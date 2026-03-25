import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const API_URL = 'https://mass-backend.onrender.com/api/v1/notification';

function AdminAnnouncements() {
    const { token } = useAuth();
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ title: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const fetchAnnouncements = () => {
        setLoading(true);
        fetch(`${API_URL}/all`)
            .then((res) => res.json())
            .then((data) => {
                setAnnouncements(data?.data || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('sending');
        setErrorMsg('');

        try {
            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ title: '', message: '' });
                fetchAnnouncements();
            } else {
                setErrorMsg(data?.error || 'Something went wrong.');
                setSubmitStatus('error');
            }
        } catch {
            setErrorMsg('Network error.');
            setSubmitStatus('error');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this announcement?')) return;
        try {
            await fetch(`${API_URL}/delete/${id}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': token },
            });
            fetchAnnouncements();
        } catch {
            alert('Failed to delete.');
        }
    };

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
                            Manage Announcements
                        </h1>
                    </div>
                    <Link
                        to="/admin/dashboard"
                        className="text-yellow-600 text-sm hover:text-yellow-500 transition font-bold"
                    >
                        ← Dashboard
                    </Link>
                </div>

                {/* Add Form */}
                <div className="bg-white border border-yellow-200 border-t-4 border-t-yellow-500 p-8 mb-8">
                    <h3 className="font-bold text-amber-900 text-xl mb-6">
                        ➕ Add Announcement
                    </h3>

                    {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 mb-4 text-sm rounded">
                            ✅ Announcement added!
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-4 text-sm rounded">
                            ❌ {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                                placeholder="Announcement title"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-amber-900 mb-2">
                                Message *
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows="4"
                                placeholder="Announcement message"
                                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitStatus === 'sending'}
                            className="bg-yellow-500 text-gray-900 font-bold px-8 py-3 text-sm tracking-widest uppercase hover:bg-yellow-400 transition disabled:opacity-50"
                        >
                            {submitStatus === 'sending' ? 'Adding...' : 'Add Announcement'}
                        </button>
                    </form>
                </div>

                {/* List */}
                <h3 className="font-bold text-amber-900 text-xl mb-4">
                    📢 All Announcements ({announcements.length})
                </h3>

                {loading && (
                    <div className="flex justify-center py-10">
                        <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <div className="space-y-4">
                    {announcements.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white border-l-4 border-yellow-500 p-6 flex items-start justify-between gap-4 shadow-sm"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-bold text-amber-900">{item?.title}</h4>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                    ${item?.is_active
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {item?.is_active ? 'Active' : 'Ended'}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">{item?.message}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 text-white text-xs font-bold px-4 py-2 hover:bg-red-400 transition flex-shrink-0"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AdminAnnouncements;